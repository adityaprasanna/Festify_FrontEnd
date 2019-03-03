import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SlickCarouselModule } from 'ngx-slick-carousel';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { OrganizationsComponent } from './components/organizations/organizations.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FestUploadFormComponent } from './components/fest-upload-form/fest-upload-form.component';
import { GrdFilterPipe } from './components/organizations/grd-filter.pipe';

// import {SocialLoginModule,AuthServiceConfig,GoogleLoginProvider,FacebookLoginProvider,
// } from "angular-6-social-login-v2";
import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "angularx-social-login";

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { RecaptchaModule, RECAPTCHA_SETTINGS, RecaptchaSettings } from 'ng-recaptcha';
import { RecaptchaFormsModule  } from 'ng-recaptcha/forms';

//service
import { AppService } from "./app.service";
import { AuthGuardService } from './auth-guard.service';


import { HttpModule } from '@angular/http'; 
import { HttpClientModule } from '@angular/common/http';
import { FileSelectDirective } from 'ng2-file-upload';
import { OrganizationDashboardComponent } from './components/organization-dashboard/organization-dashboard.component';
import { FestComponent } from './components/fest/fest.component';
import { UserheaderComponent } from './userheader/userheader.component';
import { OrganizationheaderComponent } from './organizationheader/organizationheader.component';
import { EditorgdashboardComponent } from './components/editorgdashboard/editorgdashboard.component';
import { EditfestComponent } from './components/editfest/editfest.component';
import { AuthenticationService } from './authentication.service';
import { PaymentComponent } from './components/payment/payment.component';
import { FestspecificComponent } from './components/festspecific/festspecific.component';
import { FailureComponent } from './components/failure/failure.component';
import { OrgauthService } from './orgauth.service';
import { PrivatePolicyComponent } from './components/private-policy/private-policy.component';
import { AftersuccessComponent } from './components/aftersuccess/aftersuccess.component';



export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider("541589206326432")
        },
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider("394569857573-fl3pfejivfi6nvj2289u6s67o7ki3n1u.apps.googleusercontent.com")
        },
      ]
  );
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistrationComponent,
    DashboardComponent,
    PagenotfoundComponent,
    HeaderComponent,
    FooterComponent,
    FileSelectDirective,
    FestUploadFormComponent,
    OrganizationsComponent,
    GrdFilterPipe,
    OrganizationDashboardComponent,
    FestComponent,
    UserheaderComponent,
    OrganizationheaderComponent,
    EditorgdashboardComponent,
    EditfestComponent,
    PaymentComponent,
    FestspecificComponent,
    FailureComponent,
    PrivatePolicyComponent,
    AftersuccessComponent
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SocialLoginModule,
    RecaptchaModule.forRoot(),
    RecaptchaFormsModule,
    HttpModule,
    HttpClientModule,
    SlickCarouselModule
   
  
  ],
  
  providers: [{
    provide: AuthServiceConfig,
    useFactory: getAuthServiceConfigs
  },
  {
    provide: RECAPTCHA_SETTINGS,
    useValue: {
      siteKey: '6Lf5lY0UAAAAABK_UwwIo_CahKFI0mMSoB9ZcnXC',
    } as RecaptchaSettings,
  },AppService,AuthGuardService,AuthenticationService,OrgauthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
