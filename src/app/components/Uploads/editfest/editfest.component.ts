import { Component, OnInit } from "@angular/core";
import { AppService } from "src/app/app.service";
import { AuthService } from "../../../services/Authentication/auth.service";

import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { BsDatepickerConfig } from "ngx-bootstrap/datepicker";

@Component({
  selector: "app-editfest",
  templateUrl: "./editfest.component.html",
  styleUrls: ["./editfest.component.scss"]
})
export class EditfestComponent implements OnInit {
  festEditData: any;
  festForm: FormGroup;
  loading = true;
  submitted = false;
  festID: any;

  public bsConfig: Partial<BsDatepickerConfig> = new BsDatepickerConfig();

  constructor(
    private appService: AppService,
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {
    this.bsConfig.containerClass = "theme-red";
    this.bsConfig.dateInputFormat = "YYYY-MM-DD";
    this.festID = this.route.snapshot.paramMap.get("id");
    console.log(this.festID);
  }

  ngOnInit() {
    this.appService.festSpecificDetails(this.festID).subscribe(data => {
      this.loading = false;

      this.festEditData = data[0];

      for (const item in this.festEditData) {
        if (this.festEditData[item] == null) {
          this.festEditData[item] = "";
        }
      }

      this.festForm = this.formBuilder.group({
        fest_type: new FormControl(this.festEditData.fest_type, [
          Validators.required
        ]),
        name: new FormControl(this.festEditData.name, [Validators.required]),
        image: new FormControl(null),
        description: new FormControl(this.festEditData.description, [
          Validators.required
        ]),
        start_date: new FormControl(this.festEditData.start_date, [
          Validators.required
        ]),
        end_date: new FormControl(this.festEditData.end_date, [
          Validators.required
        ]),
        website: new FormControl(this.festEditData.website),
        social_media_pages: new FormControl(
          this.festEditData.social_media_pages
        ),
        promo_video: new FormControl(null),
        promo_video_thumbnail: new FormControl(null),
        id: new FormControl(this.festEditData.id),
        event: this.formBuilder.array([
          this.formBuilder.group({
            id: new FormControl(""),
            eventName: new FormControl("", [Validators.required]),
            ticket_price: new FormControl("", [Validators.required]),
            event_description: new FormControl("", [Validators.required]),
            event_coordinator: new FormControl("", [Validators.required]),
            event_date: new FormControl("", [Validators.required]),
            event_time: new FormControl("", [Validators.required]),
            event_type: new FormControl("", [Validators.required])
          })
        ]),
        manager_name: new FormControl(this.festEditData.manager_name, [
          Validators.required
        ]),
        manager_phone: new FormControl(this.festEditData.manager_phone, [
          Validators.required
        ]),
        manager_email: new FormControl(this.festEditData.manager_email, [
          Validators.required,
          Validators.email
        ]),
        event_sponser: this.formBuilder.array([
          this.formBuilder.group({
            id: new FormControl(""),
            evtSpnName: "",
            picture: new FormControl(null),
            caption: new FormControl("")
          })
        ]),
        sec_manager_name: new FormControl(this.festEditData.sec_manager_name, [
          Validators.required
        ]),
        sec_manager_phone: new FormControl(
          this.festEditData.sec_manager_phone,
          [Validators.required]
        ),
        account_holder_name: new FormControl(
          this.festEditData.account_holder_name,
          [Validators.required]
        ),
        account_number: new FormControl(this.festEditData.account_number, [
          Validators.required
        ]),
        ifsc: new FormControl(this.festEditData.IFSC, [Validators.required])
      });

      this.eventPoints.removeAt(0);
      this.initializeEvents();

      this.sponsorEventPoints.removeAt(0);
      this.initializeSponsors();
    });
  }

  get eventPoints() {
    return this.festForm.get("event") as FormArray;
  }

  get sponsorEventPoints() {
    return this.festForm.get("event_sponser") as FormArray;
  }

  initializeEvents() {
    for (let i = 0; i < this.festEditData.events.length; i++) {
      this.eventPoints.push(
        this.formBuilder.group({
          id: new FormControl(this.festEditData.events[i].id),
          eventName: new FormControl(this.festEditData.events[i].event_name),
          ticket_price: new FormControl(
            this.festEditData.events[i].ticket_price
          ),
          event_description: new FormControl(
            this.festEditData.events[i].event_description
          ),
          event_coordinator: new FormControl(
            this.festEditData.events[i].event_coordinator
          ),
          event_date: new FormControl(this.festEditData.events[i].event_date),
          event_time: new FormControl(this.festEditData.events[i].event_time),
          event_type: new FormControl(this.festEditData.events[i].event_type)
        })
      );
    }
  }

  initializeSponsors() {
    for (let i = 0; i < this.festEditData.sponsor.length; i++) {
      this.sponsorEventPoints.push(
        this.formBuilder.group({
          id: new FormControl(this.festEditData.sponsor[i].id),
          inputId: i,
          evtSpnName: new FormControl(
            this.festEditData.sponsor[i].sponsor_name
          ),
          picture: new FormControl(null),
          caption: new FormControl(this.festEditData.sponsor[i].caption)
        })
      );
    }
  }

  get e() {
    return this.festForm.controls;
  }

  imgBase64ToImage(canvasElem, targetElem) {
    const img = new Image();
    img.onload = function() {
      canvasElem.width = img.width;
      canvasElem.height = img.height;
      ctx.drawImage(img, 0, 0);
      // console.log(myCanvas.toDataURL('image/jpeg'));
    };
    const ctx = canvasElem.getContext("2d");

    img.src = URL.createObjectURL(targetElem.files[0]);
    console.log(targetElem.files, img.src);
    const dataURL = canvasElem.toDataURL("image/jpeg");
    dataURL.replace(/^data:image\/(png|jpg|jpeg);base64,/, "");
  }

  onChange(e, p_id) {
    let myCanvas;
    switch (e.target.name) {
      case "image":
        myCanvas = <HTMLCanvasElement>document.getElementById("display");
        break;
      case "promo_video":
        myCanvas = <HTMLCanvasElement>document.getElementById("provideo");
        break;
      case "promo_video_thumbnail":
        myCanvas = <HTMLCanvasElement>document.getElementById("thumbmail");
        break;
      case "picture":
        // var myCanvas = <HTMLCanvasElement>document.getElementById(e.target.nextElementSibling.id.toString());
        // const id = this.sponsorEventPoints.length - 1;
        // myCanvas = <HTMLCanvasElement>document.getElementById(id.toString());
        myCanvas = <HTMLCanvasElement>document.getElementById(p_id);
        break;
    }
    if (myCanvas) {
      this.imgBase64ToImage(myCanvas, e.target);
    }
    // var ctx = myCanvas.getContext('2d');
    // var img = new Image();
    // img.onload = function () {
    //   myCanvas.width = img.width;
    //   myCanvas.height = img.height;
    //   ctx.drawImage(img, 0, 0);
    // };
    //
    // img.src = URL.createObjectURL(e.target.files[0]);
    // var dataURL = myCanvas.toDataURL('image/jpeg');
    // dataURL.replace(/^data:image\/(png|jpg);base64,/, '');
  }

  onSubmitEditFest() {
    if (
      this.festForm.status == "INVALID" ||
      new Date(this.festForm.controls.start_date.value) >
        new Date(this.festForm.controls.end_date.value)
    ) {
      alert(
        "Please provide all the details correctly and start date value is less than end date"
      );
      return;
    }

    for (const item in this.festForm.value) {
      if (item == "image") {
        if (this.festForm.value[item] != null) {
          const myCanvas = <HTMLCanvasElement>(
            document.getElementById("display")
          );
          const imageUrl = myCanvas.toDataURL("image/jpeg");
          this.festForm.value[item] = imageUrl;
        } else if (this.festForm.value[item] == null) {
          this.festForm.value[item] = this.festEditData.image;
        }
      } else if (item == "promo_video") {
        if (this.festForm.value[item] != null) {
          const myCanvas = <HTMLCanvasElement>(
            document.getElementById("provideo")
          );
          const imageUrl = myCanvas.toDataURL("image/jpeg");
          this.festForm.value[item] = imageUrl;
        } else if (this.festForm.value[item] == null) {
          this.festForm.value[item] = this.festEditData.promo_video;
        }
      } else if (item == "promo_video_thumbnail") {
        if (this.festForm.value[item] != null) {
          const myCanvas = <HTMLCanvasElement>(
            document.getElementById("thumbmail")
          );
          const imageUrl = myCanvas.toDataURL("image/jpeg");
          this.festForm.value[item] = imageUrl;
        } else if (this.festForm.value[item] == null) {
          this.festForm.value[item] = this.festEditData.promo_video_thumbnail;
        }
      } else if (item == "event_sponser") {
        let id = 0;
        this.festForm.value[item].map(x => {
          if (x.picture != null) {
            if (id <= this.sponsorEventPoints.length - 1) {
              const myCanvas = <HTMLCanvasElement>(
                document.getElementById(id.toString())
              );
              x.picture = myCanvas.toDataURL("image/jpeg");
              id++;
            }
          }
        });
      }
    }
    this.authService.updateFest(this.festForm.value).subscribe(data => {
      if (data) {
        localStorage.removeItem("festspecific");
        this.router.navigate(["orgdashboard"]);
      }
    });
  }

  addEventPoint() {
    this.eventPoints.push(
      this.formBuilder.group({
        eventName: new FormControl(""),
        ticket_price: new FormControl(""),
        event_description: new FormControl("", [Validators.required]),
        event_coordinator: new FormControl("", [Validators.required]),
        event_date: new FormControl(Date, [Validators.required]),
        event_time: new FormControl("", [Validators.required]),
        event_type: ["", [Validators.required]]
      })
    );
  }

  deleteEventPoint(index, id) {
    let result = confirm("Are you sure you want to delete this event?");
    if (result) {
      this.eventPoints.removeAt(index);
      this.authService
        .deleteEvent(id)
        .subscribe(() => alert("Event Deleted successfully"));
    }
  }

  addSponsorEventPoint() {
    this.sponsorEventPoints.push(
      this.formBuilder.group({
        evtSpnName: "",
        picture: new FormControl(null),
        caption: new FormControl("")
      })
    );
  }

  deleteSponsorEventPoint(index, id) {
    let result = confirm("Are you sure you want to delete this event?");
    if (result) {
      this.sponsorEventPoints.removeAt(index);
      this.authService
        .deleteSponsor(id)
        .subscribe(() => alert("Sponsor Deleted successfully"));
    }
  }

  onKeyDown(e) {
    e.preventDefault();
  }

  cancelSave() {
    localStorage.removeItem("festspecific");
    this.router.navigate(["orgdashboard"]);
  }
}
