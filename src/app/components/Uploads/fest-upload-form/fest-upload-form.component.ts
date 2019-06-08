import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormArray,
  Validators,
  FormControl,
  EmailValidator
} from "@angular/forms";
import { AppService } from "src/app/app.service";
import { Router } from "@angular/router";
import { BsDatepickerConfig } from "ngx-bootstrap/datepicker";
declare let $: any;

@Component({
  selector: "app-fest-upload-form",
  templateUrl: "./fest-upload-form.component.html",
  styleUrls: ["./fest-upload-form.component.scss"]
})
export class FestUploadFormComponent implements OnInit {
  festForm: FormGroup;
  submitted = false;
  // loading = false;
  // model = new Date();

  public bsConfig: Partial<BsDatepickerConfig> = new BsDatepickerConfig();

  constructor(
    private formBuilder: FormBuilder,
    private appService: AppService,
    private router: Router
  ) {
    this.bsConfig.containerClass = "theme-red";
    this.bsConfig.dateInputFormat = "YYYY-MM-DD";
  }

  ngOnInit() {
    (function() {
      "use strict";
      window.addEventListener(
        "load",
        function() {
          // Fetch all the forms we want to apply custom Bootstrap validation styles to
          var forms = document.getElementsByClassName("needs-validation");
          // Loop over them and prevent submission
          var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener(
              "submit",
              function(event) {
                if (form.checkValidity() === false) {
                  event.preventDefault();
                  event.stopPropagation();
                }
                form.classList.add("was-validated");
              },
              false
            );
          });
        },
        false
      );
    })();
    //jQuery, jQuery-UI progress-bar animation
    var current_fs, next_fs, previous_fs; //fieldsets
    var left, opacity, scale; //fieldset animation
    var animating; //prevent quick multi-click glitches
    $(".next").click(function() {
      if (animating) return false;
      animating = true;

      current_fs = $(this).parent();
      next_fs = $(this)
        .parent()
        .next();

      //activate next step on progressbar using the index of next_fs
      $("#progressbar li")
        .eq($("fieldset").index(next_fs))
        .addClass("active");

      //show the next fieldset
      next_fs.show();
      //hide the current fieldset with style
      current_fs.animate(
        {
          opacity: 0
        },
        {
          step: function(now, mx) {
            //as the opacity of current_fs reduces to 0 - stored in "now"
            //1. scale current_fs down to 80%
            scale = 1 - (1 - now) * 0.2;
            //2. bring next_fs from the right(50%)
            left = now * 50 + "%";
            //3. increase opacity of next_fs to 1 as it moves in
            opacity = 1 - now;
            current_fs.css({
              transform: "scale(" + scale + ")",
              position: "absolute"
            });
            next_fs.css({
              left: left,
              opacity: opacity
            });
          },
          duration: 800,
          complete: function() {
            current_fs.hide();
            animating = false;
          },
          //this comes from the custom easing plugin
          easing: "easeInOutBack"
        }
      );
    });
    $(".previous").click(function() {
      if (animating) return false;
      animating = true;

      current_fs = $(this).parent();
      previous_fs = $(this)
        .parent()
        .prev();

      //de-activate current step on progressbar
      $("#progressbar li")
        .eq($("fieldset").index(current_fs))
        .removeClass("active");

      //show the previous fieldset
      previous_fs.show();
      //hide the current fieldset with style
      current_fs.animate(
        {
          opacity: 0
        },
        {
          step: function(now, mx) {
            //as the opacity of current_fs reduces to 0 - stored in "now"
            //1. scale previous_fs from 80% to 100%
            scale = 0.8 + (1 - now) * 0.2;
            //2. take current_fs to the right(50%) - from 0%
            left = (1 - now) * 50 + "%";
            //3. increase opacity of previous_fs to 1 as it moves in
            opacity = 1 - now;
            current_fs.css({
              left: left
            });
            previous_fs.css({
              transform: "scale(" + scale + ")",
              opacity: opacity
            });
          },
          duration: 800,
          complete: function() {
            current_fs.hide();
            animating = false;
          },
          //this comes from the custom easing plugin
          easing: "easeInOutBack"
        }
      );
    });
    $(".submit").click(function() {
      return false;
    });
    //jQuery ends here

    this.festForm = this.formBuilder.group({
      type: ["", [Validators.required]],
      name: ["", [Validators.required, Validators.maxLength(20)]],
      fest_image: ["", [Validators.required]],
      start_date: new FormControl(Date, [Validators.required]),
      end_date: new FormControl(Date, [Validators.required]),
      image: new FormControl(null),
      description: ["", [Validators.required]],
      highlights: ["", [Validators.required]],

      event: this.formBuilder.array([
        this.formBuilder.group({
          eventName: new FormControl("", [
            Validators.required,
            Validators.maxLength(20)
          ]),
          ticket_price: ["", [Validators.required]],
          event_description: ["", [Validators.required]],
          event_coordinator: ["", [Validators.required]],
          event_date: new FormControl(Date, [Validators.required]),
          event_time: new FormControl(new Date()),
          event_type: ["", [Validators.required]]
        })
      ]),

      sponsor: this.formBuilder.array([
        this.formBuilder.group({
          name: "",
          image: ["", [Validators.required]],
          caption: new FormControl("")
        })
      ]),
      website: new FormControl(null),
      facebook: new FormControl(null),
      instagram: new FormControl(null),
      youtube: new FormControl(null),

      manager_name: ["", [Validators.required]],
      manager_phone: ["", [Validators.required]],
      manager_email: ["", [Validators.required]],

      sec_manager_name: ["", [Validators.required]],
      sec_manager_phone: ["", [Validators.required]],
      account_holder_name: ["", [Validators.required]],
      account_number: ["", [Validators.required]],
      ifsc: ["", [Validators.required]],
      confirm_account: ["", [Validators.required]],
      confirm_ifsc: ["", [Validators.required]],
      checkbox: new FormControl(null, [Validators.required])
    });
  }

  onFestSubmit() {
    this.submitted = true;

    this.appService.createFest(this.festForm).subscribe(data => {
      if (data == undefined) {
        this.router.navigate(["home"]);
      } else {
        this.router.navigate(["organization-dashboard"]);
        this.festForm.reset();
      }
    });
  }

  get e() {
    return this.festForm.controls;
  }

  // Event and Sponsor add/delete
  get eventPoints() {
    return this.festForm.get("event") as FormArray;
  }

  get sponsorEventPoints() {
    return this.festForm.get("sponsor") as FormArray;
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

  deleteEventPoint(index) {
    this.eventPoints.removeAt(index);
  }

  addSponsorEventPoint() {
    this.sponsorEventPoints.push(
      this.formBuilder.group({
        evtSpnName: "",
        picture: ["", [Validators.required]],
        caption: new FormControl("")
      })
    );
  }

  deleteSponsorEventPoint(index) {
    this.sponsorEventPoints.removeAt(index);
  }

  previewFile() {
    let preview = <HTMLImageElement>document.getElementById("imagePreview"); //selects the query named img
    let file = (<HTMLInputElement>document.getElementById("inputFile"))
      .files[0]; //sames as here
    let reader = new FileReader();

    reader.onloadend = function() {
      preview.src = reader.result as string;
    };

    if (file) {
      reader.readAsDataURL(file); //reads the data as a URL
    } else {
      preview.src = "";
    }
  }
}
