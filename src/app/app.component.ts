import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "angularx-social-login";
import {
  FacebookLoginProvider,
  GoogleLoginProvider
} from "angularx-social-login";
import { Router } from "@angular/router";
import { AuthService as authService } from "./services/Authentication/auth.service";

declare var $: any;

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "Festify";

  public _opened: boolean = false;
  public _modeNum: number = 0;
  loginForm: FormGroup;
  submitted = false;
  loginFailed = "";
  public _MODES: Array<string> = ["over", "push", "slide"];
  orgExist: any;
  userExist: any;

  constructor(
    private formBuilder: FormBuilder,
    private socialAuthService: AuthService,
    private router: Router,
    private authService: authService
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: [""],
      password: [""]
    });
    this.orgExist = sessionStorage.getItem("token");
    this.userExist = sessionStorage.getItem("userData");
  }

  // Added Getter for easy access in html
  get authenticator() {
    return this.authService;
  }
  get f() {
    return this.loginForm.controls;
  }

  _toggleSidebar() {
    this._opened = !this._opened;
  }

  logout() {
    this.authService.logout().subscribe();
    sessionStorage.clear();
    localStorage.clear();
  }

  onLoginSubmit() {
    this.authService.organizationLogin(this.loginForm).subscribe(data => {
      if (data) {
        // sessionStorage.setItem("token", data);
        $("#myModal2").modal("hide");
        this.router.navigate(["orgdashboard"]);
      } else {
        alert("Login Unsuccessful");
      }
    });
  }
  organizationSignUp() {
    $("#myModal2").modal("hide");
    this.router.navigate(["signup"]);
  }

  socialSignIn(socialPlatform: string) {
    let socialPlatformProvider;
    if (socialPlatform == "facebook") {
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    } else if (socialPlatform == "google") {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }
    this.socialAuthService.signIn(socialPlatformProvider).then(userData => {
      if (userData) {
        sessionStorage.setItem("userData", JSON.stringify(userData));
        this.authService.userLogin(JSON.stringify(userData)).subscribe(data => {
          if (data) {
            $("#myModal2").modal("hide");
            localStorage.setItem("userDashboardData", JSON.stringify(data));
            this.router.navigate(["userdashboard"]);
          } else {
            this.router.navigate(["home"]);
          }
        });
      } else {
        this.router.navigate(["home"]);
      }
    });
  }
}
