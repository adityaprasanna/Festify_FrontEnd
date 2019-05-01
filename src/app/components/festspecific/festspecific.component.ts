import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-festspecific',
  templateUrl: './festspecific.component.html',
  styleUrls: ['./festspecific.component.scss']
})
export class FestspecificComponent implements OnInit {
  festDetails: any;
  festID: string;
  enableBookNow: string;
  public orgExist_global;
  public userExist_global;

  constructor(private authenticationService: AuthenticationService, private router: Router, private route: ActivatedRoute) {
    this.festID = this.route.snapshot.paramMap.get('id');
    this.authenticationService.orgExist = sessionStorage.getItem('currentUser');
    this.orgExist_global = this.authenticationService.orgExist;
    this.authenticationService.userExist = sessionStorage.getItem('userData');
    this.userExist_global = this.authenticationService.userExist;
    this.enableBookNow = localStorage.getItem("isOrganization")
  }

  getReadableDate(dateStr) {
      const dateModified = new Date(dateStr.toString());
      return dateModified.getDate() + '-' + (1 + dateModified.getMonth()) + '-' + dateModified.getFullYear();
  }

  ngOnInit() {
    this.authenticationService.festSepecificDetails(this.festID).subscribe(data => {
      this.festDetails = (data[0]);
      this.festDetails.start_date = this.getReadableDate(this.festDetails.start_date);
      this.festDetails.end_date = this.getReadableDate(this.festDetails.end_date);
      if (this.festDetails.events.length >= 1) {
          this.festDetails.events.map(x => {
          if (x.event_date) {
            x.event_date = this.getReadableDate(x.event_date);
          }
          if (x.ticket_price) {
            x.ticket_price = parseFloat(x.ticket_price).toFixed(2);
          }
        });
       }
    });
  }
  get authenticationServicefn() {
    return this.authenticationService;
  }

  festDeatils(e) {
    const data = JSON.stringify(e);
    localStorage.setItem('festPaymentDeatils', data);
    this.router.navigate(['/payment']);
  }
}
