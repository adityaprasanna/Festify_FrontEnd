import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-aftersuccess",
  templateUrl: "./aftersuccess.component.html",
  styleUrls: ["./aftersuccess.component.scss"]
})
export class AftersuccessComponent implements OnInit {
  firstName: any;
  lastName: any;
  festName: any;
  eventName: any;
  email: any;
  ticketPrice: any;
  phoneNo: any;

  ticketId: any;

  constructor(private route: ActivatedRoute) {
    // let url= window.location.href;
    // let currentURL=url.split('&');
    const successInfo = JSON.parse(
      this.route.snapshot.paramMap.get("successData")
    );
    this.firstName = successInfo.fname;
    this.lastName = successInfo.lname;
    this.email = successInfo.email;
    this.phoneNo = successInfo.phone;
    this.festName = successInfo.fest;
    this.eventName = successInfo.event;
    this.ticketPrice = successInfo.price;
    this.ticketId = successInfo.tid;
  }

  ngOnInit() {}
}
