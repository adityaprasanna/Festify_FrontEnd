import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl, EmailValidator } from '@angular/forms';
import { AppService } from 'src/app/app.service';
import { Router } from '@angular/router';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';


@Component({
  selector: 'app-fest-upload-form',
  templateUrl: './fest-upload-form.component.html',
  styleUrls: ['./fest-upload-form.component.sass']
})
export class FestUploadFormComponent implements OnInit {
  festForm: FormGroup;
  submitted = false;
  
 
  public bsConfig: Partial<BsDatepickerConfig> = new BsDatepickerConfig();
  constructor(private formBuilder: FormBuilder, private appService: AppService, private router: Router) { // this.createForm();
    this.bsConfig.containerClass = 'theme-red';
    this.bsConfig.dateInputFormat = "YYYY-MM-DD";
  }

  ngOnInit() {
    this.festForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      image: ['', [Validators.required]],
      fest_type: ['', [Validators.required]],
      description: ['', [Validators.required]],
      start_date: new FormControl(Date, [Validators.required]),
      end_date: new FormControl(Date, [Validators.required]),
      website: new FormControl(null),
      social_media_pages: new FormControl(null),
      promo_video: new FormControl(null),
      promo_video_thumbnail: new FormControl(null),

      event: this.formBuilder.array([this.formBuilder.group({eventName: new FormControl('', [Validators.required]), ticket_price: ['', [Validators.required]], event_description: ['', [Validators.required]], event_coordinator: ['', [Validators.required]], event_date: new FormControl(Date, [Validators.required]), event_time: ['', [Validators.required]], event_type: ['', [Validators.required]] })]),
      
      manager_name: ['', [Validators.required]], 
      manager_phone: ['', [Validators.required]], 
      manager_email: ['', [Validators.required]], 

      event_sponser: this.formBuilder.array([this.formBuilder.group({ evtSpnName: '', picture: new FormControl(null), caption: new FormControl('') })]),

      sec_manager_name: ['', [Validators.required]], 
      sec_manager_phone: ['', [Validators.required]], 
      account_holder_name: ['', [Validators.required]], 
      account_number: ['', [Validators.required]], 
      ifsc: ['', [Validators.required]], 
      confirm_account: ['', [Validators.required]], 
      confirm_ifsc: ['', [Validators.required]], 
      checkbox: new FormControl(null, [Validators.required]),
      recaptchaReactive: new FormControl(null, [Validators.required])
    });
  }

  get e() {
    return this.festForm.controls;
  }

  onFestSubmit() {
    this.submitted = true;

    if (this.festForm.invalid
      || this.festForm.controls.account_number == this.festForm.controls.confirm_account
      || this.festForm.controls.ifsc == this.festForm.controls.confirm_ifsc
      || new Date(this.festForm.controls.start_date.value) > new Date(this.festForm.controls.end_date.value)) {
      // alert('Please provide all the details correctly and check the checkbox');
      return;
    }

    for (let item in this.festForm.value) {
      if (item == "image") {
        if (this.festForm.value[item] != null) {
          var myCanvas = <HTMLCanvasElement>document.getElementById("display");
          let imageUrl = myCanvas.toDataURL('image/jpeg');
          this.festForm.value[item] = imageUrl;
        }
      } else if (item == "promo_video") {
        if (this.festForm.value[item] != null) {
          var myCanvas = <HTMLCanvasElement>document.getElementById("provideo");
          let imageUrl = myCanvas.toDataURL('image/jpeg');
          this.festForm.value[item] = imageUrl;
        }
      } else if (item == "promo_video_thumbnail") {
        if (this.festForm.value[item] != null) {
          var myCanvas = <HTMLCanvasElement>document.getElementById("thumbmail");
          let imageUrl = myCanvas.toDataURL('image/jpeg');
          this.festForm.value[item] = imageUrl;
        }
      } else if(item == "start_date"){
        if (this.festForm.value[item] != null) {
          var stringDateOne = new Date(this.festForm.value[item]);
          let modifiedDateOne = stringDateOne.getFullYear()+'-' + (stringDateOne.getMonth()+1) + '-'+stringDateOne.getDate();
          this.festForm.value[item] = modifiedDateOne;
        }
      } else if(item == "end_date"){
        if (this.festForm.value[item] != null) {
          var stringDateTwo = new Date(this.festForm.value[item]);
          let modifiedDateTwo = stringDateTwo.getFullYear()+'-' + (stringDateTwo.getMonth()+1) + '-'+stringDateTwo.getDate();
          this.festForm.value[item] = modifiedDateTwo;
        }
      } else if(item == "event_date"){
        if (this.festForm.value[item] != null) {
          var stringDateTwo = new Date(this.festForm.value[item]);
          let modifiedDateTwo = stringDateTwo.getFullYear()+'-' + (stringDateTwo.getMonth()+1) + '-'+stringDateTwo.getDate();
          this.festForm.value[item] = modifiedDateTwo;
        }
      } else if (item == "event_sponser") {
        // for (let pic in this.festForm.value[item]) {
        this.festForm.value[item].map(x => {
          if (x.picture != null) {
            let id = 0;
            if (id <= this.sponsorEventPoints.length - 1) {
              var myCanvas = <HTMLCanvasElement>document.getElementById(id.toString());
              let imageUrl = myCanvas.toDataURL('image/jpeg');
              x.picture = imageUrl;
              id++;
            }
          }
        })

        // }
      }
    }
    this.appService.createFest(this.festForm)
    .subscribe(data => {
      if (data == undefined) {
        this.router.navigate(['home']);
      } else {
        // alert('Registration Successful');
        this.router.navigate(['organization-dashboard']);
        this.festForm.reset();
      }
    });
    //this.festFormData.push()
  }
  // createForm() {
  //   this.festForm = this.formBuilder.group({
  //     name: new FormControl('', [Validators.required]),
  //     image: new FormControl(null, [Validators.required]),
  //     fest_type: ['', [Validators.required]],
  //     description: new FormControl(null, [Validators.required]),
  //     start_date: new FormControl(Date, [Validators.required]),
  //     end_date: new FormControl(Date, [Validators.required]),
  //     website: new FormControl(null),
  //     social_media_pages: new FormControl(null),
  //     promo_video: new FormControl(null),
  //     promo_video_thumbnail: new FormControl(null),

  //     event: this.formBuilder.array([this.formBuilder.group({eventName: new FormControl('', [Validators.required]), 
  //     ticket_price: new FormControl('', [Validators.required]), 
  //     event_description: new FormControl('', [Validators.required]), 
  //     event_coordinator: new FormControl('', [Validators.required]), 
  //     event_date: new FormControl('', [Validators.required]), 
  //     event_time: new FormControl('', [Validators.required]), 
  //     event_type: ['', [Validators.required]] })]),
      
  //     manager_name: new FormControl('', [Validators.required]),
  //     manager_phone: new FormControl('', [Validators.required]),
  //     manager_email: new FormControl('', [Validators.required, Validators.email]),

  //     event_sponser: this.formBuilder.array([this.formBuilder.group({ evtSpnName: '', picture: new FormControl(null), caption: new FormControl('') })]),

  //     sec_manager_name: new FormControl('', [Validators.required]),
  //     sec_manager_phone: new FormControl('', [Validators.required]),
  //     account_holder_name: new FormControl('', [Validators.required]),
  //     account_number: new FormControl('', [Validators.required]),
  //     ifsc: new FormControl('', [Validators.required]),
  //     confirm_account: new FormControl('', [Validators.required]),
  //     confirm_ifsc: new FormControl('', [Validators.required]),
  //     checkbox: new FormControl(null, [Validators.required]),
  //     recaptchaReactive: new FormControl(null, [Validators.required])
  //   });
  // }

  

  

  onChange(e) {
    switch (e.target.name) {
      case "image":
        var myCanvas = <HTMLCanvasElement>document.getElementById("display");
        break;
      case "promo_video":
        var myCanvas = <HTMLCanvasElement>document.getElementById("provideo");
        break;
      case "promo_video_thumbnail":
        var myCanvas = <HTMLCanvasElement>document.getElementById("thumbmail");
        break;
      case "picture":
        let id = this.sponsorEventPoints.length;
        id = id - 1;
        var myCanvas = <HTMLCanvasElement>document.getElementById(id.toString());
        break;

    }
    var ctx = myCanvas.getContext('2d');
    var img = new Image();
    img.onload = function () {
      myCanvas.width = img.width;
      myCanvas.height = img.height;
      ctx.drawImage(img, 0, 0);
     // console.log(myCanvas.toDataURL('image/jpeg'));
    };

    img.src = URL.createObjectURL(e.target.files[0]);
    var dataURL = myCanvas.toDataURL('image/jpeg');
    dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
  }


  onKeydown(e) {
    e.preventDefault();
  }
  
  get eventPoints() {
    return this.festForm.get('event') as FormArray;
  }
  get sponsorEventPoints() {
    return this.festForm.get('event_sponser') as FormArray;
  }

  addEventPoint() {
    this.eventPoints.push(this.formBuilder.group({ eventName: new FormControl(''), ticket_price: new FormControl(''), event_description: new FormControl('', [Validators.required]), event_coordinator: new FormControl('', [Validators.required]), event_date: new FormControl('', [Validators.required]), event_time: new FormControl('', [Validators.required]), event_type: ['', [Validators.required]], }));

  }

  deleteEventPoint(index) {
    this.eventPoints.removeAt(index);
  }

  addSponsorEventPoint() {
    this.sponsorEventPoints.push(this.formBuilder.group
      ({ evtSpnName: '', picture: new FormControl(null), caption: new FormControl('') }));
  }

  deleteSponsorEventPoint(index) {
    this.sponsorEventPoints.removeAt(index);
  }
}

