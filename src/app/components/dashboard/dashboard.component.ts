import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {
  socialData: any;
  bookedEvents: any;
  likedFest: any;
  constructor(private authenticationService: AuthenticationService) {
    this.authenticationService.getLikesBookedEvents().subscribe(data=>{
      this.bookedEvents=data.booked_events;
      this.likedFest=data.liked_fests
    });
  }

  ngOnInit() {
    let data = sessionStorage.getItem('userData');
    this.socialData = JSON.parse(data);
    let imgae = document.getElementById("googleImg");
    imgae.setAttribute('src', this.socialData.photoUrl);

  }

}
