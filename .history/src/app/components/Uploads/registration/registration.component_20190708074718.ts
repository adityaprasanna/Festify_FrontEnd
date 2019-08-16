import { Component, OnInit, VERSION } from "@angular/core";
import {
  FormGroup,
  Validators,
  FormBuilder,
  FormControl
} from "@angular/forms";
import { AuthService } from "../../../services/Authentication/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.scss"]
})
export class RegistrationComponent implements OnInit {
  submitted = false;
  registerForm: FormGroup;
  loading = false;
  public version = VERSION.full;
  mydataURL: any;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    // this.authService.createCoordinator().subscribe();
    this.registerForm = this.formBuilder.group({
      type: ["", [Validators.required]],
      org_category: ["", [Validators.required]],
      username: ["", [Validators.required]],
      password: ["", [Validators.required]],
      name: ["", [Validators.required]],
      // image: new FormControl(null, [Validators.required]),
      address: ["", [Validators.required]],
      description: ["", [Validators.required]],
      website: ["", [Validators.required]],
      main_coordinator_name: ["", [Validators.required]],
      main_coordinator_phone: [
        "",
        [
          Validators.required,
          Validators.pattern(
            /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
          )
        ]
      ],
      main_coordinator_email: ["", [Validators.required]],
      sub_coordinator_name: ["", [Validators.required]],
      sub_coordinator_phone: [
        "",
        [
          Validators.required,
          Validators.pattern(
            /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
          )
        ]
      ],
      sub_coordinator_email: ["", [Validators.required]]
      // team: ['', [Validators.required]],
      // manager_name: ['', [Validators.required]],
      // manager_phone: ['', [Validators.required,Validators.pattern( /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)]],
    });
  }

  // convenience getter for easy access to form fields
  get r() {
    return this.registerForm.controls;
  }

  onPaymentSubmit() {}

  // fileChange(e) {
  //   var myCanvas = <HTMLCanvasElement>document.getElementById("mycanvas");
  //   var ctx = myCanvas.getContext("2d");
  //   var img = new Image();
  //   img.onload = function() {
  //     myCanvas.width = img.width;
  //     myCanvas.height = img.height;
  //     ctx.drawImage(img, 0, 0);
  //     //console.log(myCanvas.toDataURL('image/jpeg'));
  //   };

  //   img.src = URL.createObjectURL(e.target.files[0]);
  //   var dataURL = myCanvas.toDataURL("image/jpeg");
  //   dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
  // }

  onRegistrationSubmit() {
    this.submitted = true;
    // var myCanvas = <HTMLCanvasElement>document.getElementById("mycanvas");
    // this.mydataURL = myCanvas.toDataURL("image/jpeg");
    // for (let item in this.registerForm.value) {
    //   if (item == "image") {
    //     this.registerForm.value[item] = this.mydataURL;
    //   }
    // }
    // stop here if form is invalid
    // if (this.creds.invalid) {
    //   // alert("Please enter 10 digit mobile no and Filled all values properly");
    //   return;
    // } else {

    const loginCreds = {
      username: this.registerForm.value.username,
      password: this.registerForm.value.password
    };

    const coordinatorDetails = [
      {
        coordinator_name: this.registerForm.value.main_coordinator_name,
        coordinator_phone: parseInt(
          this.registerForm.value.main_coordinator_phone
        ),
        coordinator_email: this.registerForm.value.main_coordinator_email
      }
      // {
      //   coordinator_name: this.registerForm.value.sub_coordinator_name,
      //   coordinator_phone: parseInt(
      //     this.registerForm.value.sub_coordinator_phone
      //   )
      // }
    ];

    this.authService.createOrgUser(loginCreds).subscribe(data => {
      if (data) {
        this.authService
          .createCoordinator(coordinatorDetails)
          .subscribe(data1 => {
            if (data1) {
              let file = <HTMLInputElement>document.getElementById("inputFile");
              let formData = new FormData();
              formData.append("file_name", file.files[0]);
              this.authService.fileUpload(formData).subscribe(data2 => {
                if (data2) {
                  const regFormValue = this.registerForm.value;
                  const obj = {
                    org_type: regFormValue.type,
                    org_category: regFormValue.org_category,
                    org_name: regFormValue.org_name,
                    org_address: regFormValue.org_address,
                    org_image: data2.json().data.id,
                    org_description: regFormValue.org_description,
                    org_website: regFormValue.org_website,
                    org_coordinator: data1.json().map(items => items.id),
                    org_user: data.json().id
                  };
                  this.authService.createOrganization(obj).subscribe(data3 => {
                    if (data3) {
                      this.authService
                        .organizationLogin(loginCreds)
                        .subscribe(data3 => {
                          if (data3) {
                            sessionStorage.setItem("token", "Token " + data3);
                            this.router.navigate(["orgdashboard"]);
                          }
                        });
                    }
                  });
                }
              });
            }
          });
      }
    });
  }
}
// this.authService.fileUpload(image).subscribe(data2 => {
//   if (data2) {
//     console.log(data2);
//   }
// });

// this.authService.createOrganization(this.registerForm).subscribe(data => {
//   // console.log(data, this.registerForm.value);
//   if (data) {
//     // this.router.navigate(['home']);
//     // 1st solution
//     // alert('You are registered! Please login to continue now. ');
//     // $('#myModal2').modal('show');
//     const postParams = {
//       value: {
//         email: this.registerForm.value.org_id,
//         password: this.registerForm.value.org_password
//       }
//     };
//     this.authService.organizationLogin(postParams).subscribe(resp => {
//       if (resp) {
//         sessionStorage.setItem(
//           "currentUserId",
//           JSON.stringify(postParams.value)
//         );
//         sessionStorage.setItem("currentUser", JSON.stringify(resp));
//         this.router.navigate(["orgdashboard"]);
//       }
//     });
//   } else {
//     // alert('Registration Successful');
//     this.router.navigate(["organization-dashboard"]);
//     this.registerForm.reset();
//   }
// });
// }

// previewFile() {
//   let file = <HTMLInputElement>document.getElementById("inputFile");

//   let formData = new FormData();
//   formData.append("file_name", file.files[0]);
//   formData.append("username", "Chris");

//   this.authService.fileUpload(formData).subscribe(data => {
//     console.log("image data", data);
//   });
// }
