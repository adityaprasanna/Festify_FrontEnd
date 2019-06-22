import { Component, OnInit } from "@angular/core";
import { AppService } from "src/app/app.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  socialData: any;
  bookedEvents: any;
  likedFest: any;
  constructor(private appService: AppService) {
    this.appService.getLikesBookedEvents().subscribe(data => {
      this.bookedEvents = data.booked_events;
      this.likedFest = data.liked_fests;
    });
  }

  ngOnInit() {
    const data = sessionStorage.getItem("userData");
    this.socialData = JSON.parse(data);
    const image = document.getElementById("googleImg");
    image.setAttribute("src", this.socialData.photoUrl);
  }
}
