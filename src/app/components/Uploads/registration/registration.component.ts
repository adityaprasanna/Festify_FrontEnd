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
    this.registerForm = this.formBuilder.group({
      type: ["", [Validators.required]],
      org_category: ["", [Validators.required]],
      username: ["", [Validators.required]],
      password: ["", [Validators.required]],
      name: ["", [Validators.required]],
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
      main_coordinator_email: ["", [Validators.required]]
      // sub_coordinator_name: ["", [Validators.required]],
      // sub_coordinator_phone: [
      //   "",
      //   [
      //     Validators.required,
      //     Validators.pattern(
      //       /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
      //     )
      //   ]
      // ],
      // sub_coordinator_email: ["", [Validators.required]]
    });
  }

  // convenience getter for easy access to form fields
  get r() {
    return this.registerForm.controls;
  }

  onRegistrationSubmit() {
    this.submitted = true;

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
                    org_coordinator: data1.json().id,
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
