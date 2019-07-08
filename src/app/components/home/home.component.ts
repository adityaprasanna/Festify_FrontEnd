import { Component, OnInit, AfterViewInit } from "@angular/core";
import { AuthService } from "../../services/Authentication/auth.service";
declare var $: any;
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit, AfterViewInit {
  university: any = [];
  preuniversity: any = [];
  youth: any = [];
  isHovering = false;
  slideConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    itemsMobile: [568, 1],
    itemsTablet: [768, 1],
    navigation: true,
    touchMove: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 568,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  };
  likedFest: any;

  constructor(private authService: AuthService) {
    $(window).on("load", function() {
      $(".loader").fadeOut("slow");
    });
    this.authService.orgExist = sessionStorage.getItem("currentUser");
    this.authService.userExist = sessionStorage.getItem("userData");

    // this.appService.festDetails().subscribe(data => {
    //   if (data) {
    //     data.filter(x => {
    //       if (x.org_type == "youth") {
    //         this.youth.push(x);
    //       } else if (x.org_type == "pre-university") {
    //         this.preuniversity.push(x);
    //       } else {
    //         //if (x.org_type == "university")
    //         this.university.push(x);
    //       }
    //     });
    //     localStorage.setItem("festDetails", JSON.stringify(data));
    //   }
    // });
  }

  ngOnInit() {}

  mouseHovering() {
    this.isHovering = true;
  }
  mouseLeaving() {
    this.isHovering = false;
  }

  ngAfterViewInit(): void {
    this.runCarouselHeader();
    setTimeout(() => {
      if (this.likedFest) {
        this.likedFest.map(x => {
          let element = document.getElementById(x.id);
          if (element != undefined) {
            element.className = "blast";
          }
        });
      }
    }, 2000);
  }

  runCarouselHeader() {
    $(document).ready(function() {
      var owl = $(".slider");
      owl.owlCarousel({
        autoPlay: 4000, //Set AutoPlay to 4 seconds
        items: 1,
        itemsMobile: [568, 1],
        itemsTablet: [768, 1],
        // navigation:true,
        loop: true,
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: true
      });

      var owl1 = $(".tab-cara");
      owl1.owlCarousel({
        autoPlay: 4000, //Set AutoPlay to 4 seconds
        items: 3,
        itemsMobile: [568, 1],
        itemsTablet: [768, 1],
        navigation: true,
        loop: true,
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: true
      });

      var owl2 = $(".partner");
      owl2.owlCarousel({
        autoPlay: 4000, //Set AutoPlay to 4 seconds
        items: 5,
        itemsMobile: [568, 1],
        itemsTablet: [768, 1],
        // navigation:true,
        loop: true,
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: true
      });
      var owl3 = $(".team");
      owl3.owlCarousel({
        autoPlay: 4000, //Set AutoPlay to 4 seconds
        items: 5,
        itemsMobile: [568, 1],
        itemsTablet: [768, 1],
        // navigation:true,
        loop: true,
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: true
      });
    });

    $('a[href^="#"]').on("click", function(event) {
      var target = $(this.getAttribute("href"));
      if (target.length) {
        event.preventDefault();
        $("html, body")
          .stop()
          .animate(
            {
              scrollTop: target.offset().top
            },
            1000
          );
      }
    });
  }
}
