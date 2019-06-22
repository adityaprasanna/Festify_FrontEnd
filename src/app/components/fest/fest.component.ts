import { Component, OnInit, AfterViewInit } from "@angular/core";
import { AppService } from "src/app/app.service";
import { AuthService } from "../../services/Authentication/auth.service";
declare var $: any;
@Component({
  selector: "app-fest",
  templateUrl: "./fest.component.html",
  styleUrls: ["./fest.component.scss"]
})
export class FestComponent implements OnInit, AfterViewInit {
  disLikeData: any;
  university: any = [];
  preuniversity: any = [];
  youth: any = [];
  medical: any = [];
  arts: any = [];
  science: any = [];
  engineering: any = [];
  arch: any = [];
  commerse: any = [];
  likedFest: any;

  constructor(
    private appService: AppService,
    private authService: AuthService
  ) {
    this.appService.festDetails().subscribe(data => {
      if (data) {
        data.map(x => {
          if (x.org_type == "youth") {
            this.youth.push(x);
          } else if (x.org_type == "pre-university") {
            this.preuniversity.push(x);
          } else if (x.org_type == "university") {
            this.university.push(x);
          } else if (x.org_category == "medical") {
            this.medical.push(x);
          } else if (x.org_category == "arts") {
            this.arts.push(x);
          } else if (x.org_category == "Science") {
            this.science.push(x);
          } else if (x.org_category == "arch") {
            this.arch.push(x);
          } else if (x.org_category == "engineering") {
            this.engineering.push(x);
          } else if (x.org_category == "commerce") {
            this.commerse.push(x);
          }
        });
      }
    });
  }

  ngOnInit() {
    this.authService.orgExist = sessionStorage.getItem("currentUser");
    this.authService.userExist = sessionStorage.getItem("userData");
    if (this.authService.userExist) {
      this.appService.getLikesBookedEvents().subscribe(data => {
        this.likedFest = data.liked_fests;
      });
      setTimeout(() => {
        if (this.likedFest) {
          this.likedFest.map(x => {
            let element = document.getElementById(x.id);
            if (element != undefined) {
              element.className = "blast";
            }
          });
        }
      }, 5000);
    }
  }

  get authenticationServicefn() {
    return this.authService;
  }

  ngAfterViewInit(): void {
    $(document).ready(function() {
      $(".filter-button").click(function() {
        var value = $(this).attr("data-filter");

        if (value == "all") {
          $(".filter").show("1000");
        } else {
          $(".filter")
            .not("." + value)
            .hide("3000");
          $(".filter")
            .filter("." + value)
            .show("3000");
        }
      });

      if ($(".filter-button").removeClass("active")) {
        $(this).removeClass("active");
      }
      $(this).addClass("active");
    });
  }
}
