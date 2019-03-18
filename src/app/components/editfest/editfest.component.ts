import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../authentication.service';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl, EmailValidator } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editfest',
  templateUrl: './editfest.component.html',
  styleUrls: ['./editfest.component.sass']
})

export class EditfestComponent implements OnInit {
  festEditData: any;
  festForm: FormGroup;
  can = 0;
  submitted = false;
  constructor(private authenticationService: AuthenticationService, private router: Router, private formBuilder: FormBuilder, ) { }

  ngOnInit() {
    let selectedFest = localStorage.getItem('festspecific');
    this.festEditData = JSON.parse(selectedFest);
    for (let item in this.festEditData) {
      if (this.festEditData[item] == null) {
        this.festEditData[item] = ''
      }
    }
    this.festForm = this.formBuilder.group({
      name: new FormControl(this.festEditData.name, [Validators.required]),
      image: new FormControl(null),
      start_date: new FormControl(this.festEditData.start_date, [Validators.required]),
      end_date: new FormControl(this.festEditData.end_date, [Validators.required]),
      website: new FormControl(this.festEditData.website),
      social_media_pages: new FormControl(this.festEditData.social_media_pages),
      promo_video: new FormControl(null),
      promo_video_thumbnail: new FormControl(null),
      id: new FormControl(this.festEditData.id),
      event: this.formBuilder.array([this.formBuilder.group
        ({ id: new FormControl(''), eventName: new FormControl('', [Validators.required]), rule: new FormControl('', [Validators.required]), ticket_price: new FormControl('', [Validators.required]) })]),
      manager_name: new FormControl(this.festEditData.manager_name, [Validators.required]),
      manager_phone: new FormControl(this.festEditData.manager_phone, [Validators.required]),
      manager_email: new FormControl(this.festEditData.manager_email, [Validators.required, Validators.email]),
      event_sponser: this.formBuilder.array([this.formBuilder.group
        ({ id: new FormControl(''), evtSpnName: '', picture: new FormControl(null), caption: new FormControl('') })]),
      sec_manager_name: new FormControl(this.festEditData.sec_manager_name, [Validators.required]),
      sec_manager_phone: new FormControl(this.festEditData.sec_manager_phone, [Validators.required]),
      account_holder_name: new FormControl(this.festEditData.account_holder_name, [Validators.required]),
      account_number: new FormControl(this.festEditData.account_number, [Validators.required]),
      ifsc: new FormControl(this.festEditData.IFSC, [Validators.required]),
    });
    this.addEventPoint();
    this.addSponsorEventPoint();
  }
  get e() {
    return this.festForm.controls;
  }

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
        var myCanvas = <HTMLCanvasElement>document.getElementById(e.target.nextElementSibling.id.toString());
        break;

    }
    var ctx = myCanvas.getContext('2d');
    var img = new Image();
    img.onload = function () {
      myCanvas.width = img.width;
      myCanvas.height = img.height;
      ctx.drawImage(img, 0, 0);
    };

    img.src = URL.createObjectURL(e.target.files[0]);
    var dataURL = myCanvas.toDataURL('image/jpeg');
    dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
  }

  onSubmitEditFest() {
    if (this.festForm.status == "INVALID"
      || new Date(this.festForm.controls.start_date.value) > new Date(this.festForm.controls.end_date.value)) {
      alert('Please provide all the details correctly and start date value is less than end date');
      return;
    }

    for (let item in this.festForm.value) {
      if (item == "image") {
        if (this.festForm.value[item] != null) {
          var myCanvas = <HTMLCanvasElement>document.getElementById("display");
          let imageUrl = myCanvas.toDataURL('image/jpeg');
          this.festForm.value[item] = imageUrl;
        } else if (this.festForm.value[item] == null) {
          this.festForm.value[item] = this.festEditData.image;
        }
      } else if (item == "promo_video") {
        if (this.festForm.value[item] != null) {
          var myCanvas = <HTMLCanvasElement>document.getElementById("provideo");
          let imageUrl = myCanvas.toDataURL('image/jpeg');
          this.festForm.value[item] = imageUrl;
        } else if (this.festForm.value[item] == null) {
          this.festForm.value[item] = this.festEditData.promo_video;
        }
      } else if (item == "promo_video_thumbnail") {
        if (this.festForm.value[item] != null) {
          var myCanvas = <HTMLCanvasElement>document.getElementById("thumbmail");
          let imageUrl = myCanvas.toDataURL('image/jpeg');
          this.festForm.value[item] = imageUrl;
        } else if (this.festForm.value[item] == null) {
          this.festForm.value[item] = this.festEditData.promo_video_thumbnail;
        }
      } else if (item == "event_sponser") {
        let i = 0;
        this.festForm.value[item].map(x => {
          if (x.picture != null) {
            var myCanvas = <HTMLCanvasElement>document.getElementById(i.toString());
            let imageUrl = myCanvas.toDataURL('image/jpeg');
            x.picture = imageUrl;

          } else if (x.picture == null) {
            x.picture = this.festEditData.sponsor[i].sponsor_picture
          }
          i++;
        })

      }
    }
    this.authenticationService.updateFest(this.festForm.value).subscribe(data => {
      if (data) {
        localStorage.removeItem('festspecific');
        this.router.navigate(['orgdashboard']);
      }
    });
  }

  get eventPoints() {
    return this.festForm.get('event') as FormArray;
  }
  get sponsorEventPoints() {
    return this.festForm.get('event_sponser') as FormArray;
  }

  addEventPoint() {

    for (let i = 0; i < this.festEditData.events.length; i++) {
      this.eventPoints.push(this.formBuilder.group
        ({ id: new FormControl(this.festEditData.events[i].id), eventName: new FormControl(this.festEditData.events[i].event_name), rule: new FormControl(this.festEditData.events[i].event_rules), ticket_price: new FormControl(this.festEditData.events[i].ticket_price) }));
    }
    this.eventPoints.removeAt(0);

  }

  deleteEventPoint(index) {
    this.eventPoints.removeAt(index);
  }

  addSponsorEventPoint() {
    for (let i = 0; i < this.festEditData.sponsor.length; i++) {
      this.sponsorEventPoints.push(this.formBuilder.group
        ({ id: new FormControl(this.festEditData.sponsor[i].id), inputId: i, evtSpnName: new FormControl(this.festEditData.sponsor[i].sponsor_name), picture: new FormControl(null), caption: new FormControl(this.festEditData.sponsor[i].caption) }));

    }
    this.sponsorEventPoints.removeAt(0);
  }

  onKeyDown(e) {
    e.preventDefault();
  }

  cancelSave() {
    localStorage.removeItem('festspecific');
    this.router.navigate(['orgdashboard']);
  }

}
