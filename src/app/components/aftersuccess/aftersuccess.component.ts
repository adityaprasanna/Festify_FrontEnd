import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-aftersuccess',
  templateUrl: './aftersuccess.component.html',
  styleUrls: ['./aftersuccess.component.sass']
})
export class AftersuccessComponent implements OnInit {
  firstName: any;
  lastName: any;
  festName: any;
  eventName: any;
  email: any;
  ticketPrice: any;
  phoneNo: any;

  ticketId:any;
  

  constructor(private route: ActivatedRoute) {
    let url= window.location.href;
    let currentURL=url.split('&');
    this.firstName = currentURL[1];
    this.lastName = currentURL[2];
    this.email =currentURL[3];
    this.phoneNo = currentURL[4];
    this.festName = currentURL[5];
    this.eventName = currentURL[6];
    this.ticketPrice =  currentURL[7];
    this.ticketId =  currentURL[8];
  }

  ngOnInit() {
  }
  
}
