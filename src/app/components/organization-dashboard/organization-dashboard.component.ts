import { Component, OnInit, } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../authentication.service';

declare var $: any;

@Component({
  selector: 'app-organization-dashboard',
  templateUrl: './organization-dashboard.component.html',
  styleUrls: ['./organization-dashboard.component.scss']
})

export class OrganizationDashboardComponent implements OnInit {

  organizationFestList: any;
  selectedRow: Number;
  organizationList: any;
  paymentList: any;
  festToEdit: any;

  constructor(private appService: AppService, private router: Router, private authenticationService: AuthenticationService) {
  }

  setClickedRow(index, fest) {
    this.selectedRow = index;
    this.festToEdit = fest;
  }

  ngOnInit() {
    this.gettingFestData();
    // this.gettingPaymentData();
  }

  // gettingPaymentData() {

  //   this.appService.paymentList(JSON.parse(festId).fest_id).subscribe(data => {
  //     this.paymentList = data;
  //     localStorage.setItem('payment', JSON.stringify(this.paymentList));
  //   });
  // }
  gettingFestData() {
    this.appService.specificOrganizationList().subscribe(data => {
      this.organizationList = data['organization'];
      this.organizationFestList = data['fest'];
      localStorage.setItem('organization', JSON.stringify(this.organizationList));
      localStorage.setItem('fest', JSON.stringify(this.organizationFestList));
      // const image = document.getElementById('imgElem');
      // image.setAttribute('src', this.organizationList.image);
    });
  }

  gettingSelectedValue(e) {
    $('input.chk').on('change', function () {
      $('input.chk').not(this).prop('checked', false);
    });
    if (this.selectedRow != undefined) {
      localStorage.setItem('festspecific', JSON.stringify(this.organizationFestList[this.selectedRow.toString()]));
    }
  }

  edit() {
    if (this.festToEdit) {
      this.router.navigate(['editfest', this.festToEdit.id]);
    } else {
      alert('Please Select One Row');
    }
  }
  getList() {
    if (this.selectedRow) {
      let festId = localStorage.getItem('festspecific');
      console.log(festId);
      this.appService.paymentList(JSON.parse(festId).fest_id).subscribe(x => {
        this.paymentList = x;
        localStorage.setItem('payment', JSON.stringify(this.paymentList));
        document.getElementById("participant").style.display ="block";
      })
    } else {
      alert('Please Select One Row');
    }
  }
  // delete(){
  //   if(this.selectedRow){
  //     this.organizationFestList.splice(this.selectedRow, 1);
  //   }
  //   else{
  //     alert('Please Select One Row');

  //   }
  // }
  delete() {
    if (this.selectedRow != undefined) {
      let festId = localStorage.getItem('festspecific');
      this.authenticationService.deleteFest(JSON.parse(festId).id).subscribe(x => {
        // if (x) {
          alert("deleted Successfully");
          this.gettingFestData();
        // }
      })
    } else {
      alert('Please Select One Row');
    }

  }
}
