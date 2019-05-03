import { Component, OnInit, Output, Input, Inject, PLATFORM_ID, AfterViewInit } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication.service';
import { Router } from '@angular/router';

declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit, AfterViewInit {
  university: any = [];
  preuniversity: any = [];
  youth: any = [];
  isHovering = false;
  slideConfig = {
    "slidesToShow": 3,
    "slidesToScroll": 1,
    "dots": true,
    "infinite": true,
    "autoplay": true,
    "autoplaySpeed": 2000,
    "arrows": true,
    "itemsMobile": [568, 1],
    "itemsTablet": [768, 1],
    "navigation": true,
    "touchMove": true,
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
          arrows: false,
        }
      }
    ]
  };
  likedFest: any;

  constructor(private authenticationService: AuthenticationService, @Inject(PLATFORM_ID) private platformId: Object, private router: Router) {
    this.authenticationService.orgExist = sessionStorage.getItem('currentUser');
    this.authenticationService.userExist = sessionStorage.getItem('userData');
    this.authenticationService.festDetails().subscribe(
      data => {
        if (data) {
          data.filter(x => {
            if (x.org_type == "youth") {
              this.youth.push(x);
            } else if (x.org_type == "pre-university") {
              this.preuniversity.push(x);
            } else { //if (x.org_type == "university") 
              this.university.push(x);
            }
          });
          localStorage.setItem('festDetails', JSON.stringify(data));
        }
      });
  }
  
  ngOnInit() {
    this.runCaraosalHeader();
    this.authenticationService.orgExist = sessionStorage.getItem('currentUser');
    this.authenticationService.userExist = sessionStorage.getItem('userData');
    if(this.authenticationService.userExist){
      this.authenticationService.getLikesBookedEvents().subscribe(data=>{
            this.likedFest=data.liked_fests;
          });
          setTimeout(() => {
          if(this.likedFest){
            this.likedFest.map(x=>{
              let element = document.getElementById(x.id);
              if(element !=undefined){
                  element.className = 'blast';
              }
            });
          }
    }, 2000);
   }
  }

  get authenticationServicefn() {
    return this.authenticationService;
  }

  createEvent() {
    this.router.navigate(['signup']);
  }
  mouseHovering() {
    this.isHovering = true;
  }
  mouseLeaving() {
    this.isHovering = false;
  }

  ngAfterViewInit(): void {
    this.runCaraosalHeader();
  }

  runCaraosalHeader() {
    $(document).ready(function () {
      var owl = $('.slider');
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

      var owl1 = $('.tab-cara');
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

      var owl2 = $('.partner');
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
      var owl3 = $('.team');
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

    $('a[href^="#"]').on('click', function (event) {
      var target = $(this.getAttribute('href'));
      if (target.length) {
        event.preventDefault();
        $('html, body').stop().animate({
          scrollTop: target.offset().top
        }, 1000);
      }
    });
  }
}
