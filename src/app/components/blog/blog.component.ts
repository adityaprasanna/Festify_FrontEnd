import { Component, OnInit, AfterViewInit } from "@angular/core";
import { AppService } from "src/app/app.service";
import { AuthService } from "../../services/Authentication/auth.service";
declare let $: any;

@Component({
  selector: "app-blog",
  templateUrl: "./blog.component.html",
  styleUrls: ["./blog.component.scss"]
})
export class BlogComponent implements OnInit, AfterViewInit {
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
  constructor(
    private appService: AppService,
    private authService: AuthService
  ) {
    this.authService.orgExist = sessionStorage.getItem("currentUser");
    this.authService.userExist = sessionStorage.getItem("userData");
  }

  get authenticationServicefn() {
    return this.authService;
  }
  ngOnInit() {
    this.runCarouselHeader();
  }

  ngAfterViewInit(): void {
    this.runCarouselHeader();
  }

  runCarouselHeader() {
    $(document).ready(function() {
      var owl = <any>$(".slider");
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

      var owl1 = <any>$(".tab-cara");
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

      var owl2 = <any>$(".partner");
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
      var owl3 = <any>$(".team");
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
