import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { RegistrationComponent } from "./components/Uploads/registration/registration.component";
import { DashboardComponent } from "./components/Dashboards/dashboard/dashboard.component";
import { PagenotfoundComponent } from "./components/pagenotfound/pagenotfound.component";
import { OrganizationsComponent } from "./components/organizations/organizations.component";
import { FooterComponent } from "./components/footer/footer.component";
import { FestUploadFormComponent } from "./components/Uploads/fest-upload-form/fest-upload-form.component";
import { GrdFilterPipe } from "./components/organizations/grd-filter.pipe";
import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import {
  GoogleLoginProvider,
  FacebookLoginProvider
} from "angularx-social-login";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { SlickCarouselModule } from "ngx-slick-carousel";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { TimepickerModule } from "ngx-bootstrap/timepicker";

// service
import { FileUploadModule } from "ng2-file-upload";
import { AppService } from "./app.service";
import { UserAuthService } from "./services/User-Auth/user-guard.service";
import { OrgAuthService } from "./services/Organization-Auth/org-guard.service";
import { HttpModule } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";
import { OrganizationDashboardComponent } from "./components/Dashboards/organization-dashboard/organization-dashboard.component";
import { FestComponent } from "./components/fest/fest.component";
import { EditorgdashboardComponent } from "./components/Dashboards/editorgdashboard/editorgdashboard.component";
import { EditfestComponent } from "./components/Uploads/editfest/editfest.component";
import { AuthService } from "./services/Authentication/auth.service";
import { PaymentComponent } from "./components/payment/payment.component";
import { FestspecificComponent } from "./components/festspecific/festspecific.component";
import { FailureComponent } from "./components/failure/failure.component";
import { AftersuccessComponent } from "./components/aftersuccess/aftersuccess.component";
import { SidebarModule } from "ng-sidebar";
import { UploadSelectorComponent } from "./components/Uploads/upload-selector/upload-selector.component";
import { SeventUploadFormComponent } from "./components/Uploads/sevent-upload-form/sevent-upload-form.component";
import { MunUploadFormComponent } from "./components/Uploads/mun-upload-form/mun-upload-form.component";
import { BlogComponent } from "./components/blog/blog.component";

// export function getAuthServiceConfigs() {
//   return new AuthServiceConfig([
//     {
//       id: FacebookLoginProvider.PROVIDER_ID,
//       provider: new FacebookLoginProvider("541589206326432")
//     },
//     {
//       id: GoogleLoginProvider.PROVIDER_ID,
//       provider: new GoogleLoginProvider(
//         "394569857573-fl3pfejivfi6nvj2289u6s67o7ki3n1u.apps.googleusercontent.com"
//       )
//     }
//   ]);
// }

@NgModule({
  declarations: [
    AppComponent
    // HomeComponent,
    // RegistrationComponent,
    // DashboardComponent,
    // PagenotfoundComponent,
    // FooterComponent,
    // FestUploadFormComponent,
    // OrganizationsComponent,
    // GrdFilterPipe
    // OrganizationDashboardComponent,
    // FestComponent,
    // EditorgdashboardComponent,
    // EditfestComponent,
    // PaymentComponent,
    // FestspecificComponent,
    // FailureComponent,
    // AftersuccessComponent,
    // UploadSelectorComponent,
    // SeventUploadFormComponent,
    // MunUploadFormComponent,
    // BlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SocialLoginModule,
    // HttpModule,
    // HttpClientModule,
    // SlickCarouselModule,
    // BsDatepickerModule.forRoot(),
    // TimepickerModule.forRoot(),
    // FileUploadModule,
    SidebarModule.forRoot()
  ],

  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    },
    AppService,
    UserAuthService,
    OrgAuthService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
