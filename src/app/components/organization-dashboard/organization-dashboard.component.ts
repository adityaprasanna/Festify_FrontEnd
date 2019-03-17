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
  setClickedRow: Function;
  organizationList: any;
  paymentList: any;

  constructor(private appService: AppService, private router: Router, private authenticationService: AuthenticationService) {
    this.setClickedRow = function (index) {
      this.selectedRow = index;
    }
  }

  ngOnInit() {
    this.gettingFestData();
    this.gettingPaymentData();
  }

  gettingPaymentData(){
    this.appService.paymentList().subscribe(data => {
      this.paymentList = data;
      localStorage.setItem('payment', JSON.stringify(this.paymentList));
    });
  }
  gettingFestData(){
    this.appService.specificOrganizationList().subscribe(data => {
      if (data == undefined) {
        // this.router.navigate(['home']);
      } else {

        this.organizationList = data["organization"];
        this.organizationFestList = data["fest"];
        localStorage.setItem('organization', JSON.stringify(this.organizationList));
        localStorage.setItem('fest', JSON.stringify(this.organizationFestList));
        let imgae = document.getElementById("imgElem");
        imgae.setAttribute('src', this.organizationList.image);
      }
    });
  }

  gettingSelectedValue(e) {
    $('input.chk').on('change', function () {
      $('input.chk').not(this).prop('checked', false);
    });
    //console.log(this.organizationFestList[this.selectedRow.toString()]);
    if (this.selectedRow != undefined) {
      localStorage.setItem('festspecific', JSON.stringify(this.organizationFestList[this.selectedRow.toString()]));
    }
  }

  edit() {
    if (this.selectedRow != undefined) {
      this.router.navigate(['editfest'])
    }
    else {
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
