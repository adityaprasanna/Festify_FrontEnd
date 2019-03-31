import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormArray, Validators, FormControl, EmailValidator} from '@angular/forms';
import {AppService} from 'src/app/app.service';
import {Router} from '@angular/router';
import {BsDatepickerConfig} from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-fest-upload-form',
  templateUrl: './fest-upload-form.component.html',
  styleUrls: ['./fest-upload-form.component.sass']
})
export class FestUploadFormComponent implements OnInit {
  festForm: FormGroup;
  submitted = false;
  loading = false;
  model = new Date();

  public bsConfig: Partial<BsDatepickerConfig> = new BsDatepickerConfig();

  constructor(private formBuilder: FormBuilder, private appService: AppService, private router: Router) { // this.createForm();
    this.bsConfig.containerClass = 'theme-red';
    this.bsConfig.dateInputFormat = 'YYYY-MM-DD';
  }

  ngOnInit() {
    this.festForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(20)]],
      image: ['', [Validators.required]],
      fest_type: ['', [Validators.required]],
      description: ['', [Validators.required]],
      start_date: new FormControl(Date, [Validators.required]),
      end_date: new FormControl(Date, [Validators.required]),
      website: new FormControl(null),
      social_media_pages: new FormControl(null),
      promo_video: new FormControl(null),
      promo_video_thumbnail: new FormControl(null),

      event: this.formBuilder.array([
        this.formBuilder.group({
          eventName: new FormControl('', [Validators.required, Validators.maxLength(20)]),
          ticket_price: ['', [Validators.required]],
          event_description: ['', [Validators.required]],
          event_coordinator: ['', [Validators.required]],
          event_date: new FormControl(Date, [Validators.required]),
          event_time: ['', [Validators.required]],
          event_type: ['', [Validators.required]]
        })]),

      manager_name: ['', [Validators.required]],
      manager_phone: ['', [Validators.required]],
      manager_email: ['', [Validators.required]],

      event_sponser: this.formBuilder.array([this.formBuilder.group({
        evtSpnName: '',
        picture: ['', [Validators.required]],
        caption: new FormControl('')
      })]),

      sec_manager_name: ['', [Validators.required]],
      sec_manager_phone: ['', [Validators.required]],
      account_holder_name: ['', [Validators.required]],
      account_number: ['', [Validators.required]],
      ifsc: ['', [Validators.required]],
      confirm_account: ['', [Validators.required]],
      confirm_ifsc: ['', [Validators.required]],
      checkbox: new FormControl(null, [Validators.required]),
      // recaptchaReactive: new FormControl(null, [Validators.required])
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
      return;
    }

    for (const item in this.festForm.value) {
      if (item == 'image') {
        if (this.festForm.value[item] != null) {
          const myCanvas = <HTMLCanvasElement>document.getElementById('display');
          const imageUrl = myCanvas.toDataURL('image/jpeg');
          this.festForm.value[item] = imageUrl;
        }
      } else if (item == 'promo_video') {
        if (this.festForm.value[item] != null) {
          const myCanvas = <HTMLCanvasElement>document.getElementById('provideo');
          const imageUrl = myCanvas.toDataURL('image/jpeg');
          this.festForm.value[item] = imageUrl;
        }
      } else if (item == 'promo_video_thumbnail') {
        if (this.festForm.value[item] != null) {
          const myCanvas = <HTMLCanvasElement>document.getElementById('thumbmail');
          const imageUrl = myCanvas.toDataURL('image/jpeg');
          this.festForm.value[item] = imageUrl;
        }
      } else if (item == 'event_sponser') {
        let id = 0;
        this.festForm.value[item].map(x => {
          if (x.picture != null) {
            if (id <= this.sponsorEventPoints.length - 1) {
              const myCanvas = <HTMLCanvasElement>document.getElementById(id.toString());
              const imageUrl = myCanvas.toDataURL('image/jpeg');
              x.picture = imageUrl;
              id++;
            }
          }
        });
      }
    }
    this.appService.createFest(this.festForm)
      .subscribe(data => {
        console.log('create fest ------ upload data', data);
        this.festForm.reset();
        this.router.navigate(['orgdashboard']);
      }, () => alert('Some error occurred, please try again!'));
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
    this.eventPoints.push(this.formBuilder.group({
      eventName: new FormControl(''),
      ticket_price: new FormControl(''),
      event_description: new FormControl('', [Validators.required]),
      event_coordinator: new FormControl('', [Validators.required]),
      event_date: new FormControl(Date, [Validators.required]),
      event_time: new FormControl('', [Validators.required]),
      event_type: ['', [Validators.required]],
    }));

  }

  deleteEventPoint(index) {
    this.eventPoints.removeAt(index);
  }

  addSponsorEventPoint() {
    this.sponsorEventPoints.push(this.formBuilder.group({
      evtSpnName: '',
      picture: ['', [Validators.required]],
      caption: new FormControl('')
    }));
  }

  deleteSponsorEventPoint(index) {
    this.sponsorEventPoints.removeAt(index);
  }

  imgBase64ToImage(canvasElem, targetElem) {
    const img = new Image();
    const ctx = canvasElem.getContext('2d');
    img.onload = function () {
      canvasElem.width = img.width;
      canvasElem.height = img.height;
      ctx.drawImage(img, 0, 0);
      // console.log(myCanvas.toDataURL('image/jpeg'));
    };

    img.src = URL.createObjectURL(targetElem.files[0]);
    const dataURL = canvasElem.toDataURL('image/jpeg');
    dataURL.replace(/^data:image\/(png|jpg);base64,/, '');
  }

  onChange(e) {
    // var myCanvas = '';
    let myCanvas;
    switch (e.target.name) {
      case 'image':
        myCanvas = <HTMLCanvasElement>document.getElementById('display');
        break;
      case 'promo_video':
        myCanvas = <HTMLCanvasElement>document.getElementById('provideo');
        break;
      case 'promo_video_thumbnail':
        myCanvas = <HTMLCanvasElement>document.getElementById('thumbmail');
        break;
      case 'picture':
        let id = this.sponsorEventPoints.length;
        id = id - 1;
        myCanvas = <HTMLCanvasElement>document.getElementById(id.toString());
        console.log(';;;;;;', id, myCanvas);
        break;
    }
    if (myCanvas) {
      this.imgBase64ToImage(myCanvas, e.target);
    }
    // const img = new Image();
    // img.onload = function () {
    //   myCanvas.width = img.width;
    //   myCanvas.height = img.height;
    //   ctx.drawImage(img, 0, 0);
    //  // console.log(myCanvas.toDataURL('image/jpeg'));
    // };
    // const ctx = myCanvas.getContext('2d');
    //
    // img.src = URL.createObjectURL(e.target.files[0]);
    // const dataURL = myCanvas.toDataURL('image/jpeg');
    // dataURL.replace(/^data:image\/(png|jpg);base64,/, '');
  }
}

