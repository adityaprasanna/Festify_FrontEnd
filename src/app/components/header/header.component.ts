import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { AuthenticationService } from '../../authentication.service';

declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})

export class HeaderComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private socialAuthService: AuthService,
    private router: Router, private appService: AppService, private authenticationService: AuthenticationService) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required,Validators.minLength(6)]]
    });
    this.authenticationService.orgExist = sessionStorage.getItem('currentUser');
    this.authenticationService.userExist = sessionStorage.getItem('userData');
  }

  ngOnInit() {

  }

  // convenience getter for easy access to form fields
  get f() { 
    return this.loginForm.controls; 
  }

  // Added Getter for easy access in html
  get authenticationServiceFn() {
    return this.authenticationService;
  }

  onLoginSubmit() {
    // stop here if form is invalid
    if (this.loginForm.invalid) {
       alert("Please Enter All values Properly");
      return;
    } else {
      this.appService.organizationLogin(this.loginForm).subscribe(
        data => {
          if (data) {
            $('#myModal2').modal('hide');
            sessionStorage.setItem('currentUserId', JSON.stringify(this.loginForm.value));
            sessionStorage.setItem('currentUser', JSON.stringify(data));
            // alert('login Successful');
            this.router.navigate(['orgdashboard']);
          } else {
            alert('login UnSuccessful');
            this.router.navigate(['home']);
          }
        })

    }
  }

  
  organizationSignUp() {
    $('#myModal2').modal('hide');
    this.router.navigate(['signup']);
  }

  socialSignIn(socialPlatform: string) {
    let socialPlatformProvider;
    if (socialPlatform == "facebook") {
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    } else if (socialPlatform == "google") {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        if (userData) {
          sessionStorage.setItem('userData', JSON.stringify(userData));
          this.authenticationService.userLogin(JSON.stringify(userData)).subscribe(data=>{
          if(data){
            $('#myModal2').modal('hide');
            localStorage.setItem('userDashboardData',JSON.stringify(data));
            this.router.navigate(['userdashboard']);
          }
          else{
            this.router.navigate(['home']);
          }
          })
         
        } else {
          this.router.navigate(['home']);
        }

      }
    );
  }

}
