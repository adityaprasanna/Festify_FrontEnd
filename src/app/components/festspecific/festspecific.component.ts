import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-festspecific',
  templateUrl: './festspecific.component.html',
  styleUrls: ['./festspecific.component.sass']
})
export class FestspecificComponent implements OnInit {
  festDetails: any;
  festID: string;
  public orgExist_global;
  public userExist_global;

  constructor(private authenticationService: AuthenticationService, private router: Router) {
    this.festID = localStorage.getItem('festID');
    this.authenticationService.orgExist = sessionStorage.getItem('currentUser');
    this.orgExist_global = this.authenticationService.orgExist;
    this.authenticationService.userExist = sessionStorage.getItem('userData');
    this.userExist_global = this.authenticationService.userExist;
  }

  ngOnInit() {
    this.authenticationService.festSepecificDetails(this.festID).subscribe(data => {
      this.festDetails = (data[0]);
      if (this.festDetails.image) {
        let imgae = document.getElementById("festImg");
        imgae.setAttribute('src', this.festDetails.image);
      }
      if(this.festDetails.events.length >= 1) {
        this.festDetails.events.map(x=>{
          if(x.ticket_price){
            x.ticket_price=parseFloat(x.ticket_price).toFixed(2);
          }
        })
       }
    });
  }

  get authenticationServicefn() {
    return this.authenticationService;
  }
  
  festDeatils(e) {
    let data = JSON.stringify(e);
    localStorage.setItem('festPaymentDeatils', data);
    this.router.navigate(['/payment'])
  }

}
