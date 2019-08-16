import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { UserAuthService } from "./services/User-Auth/user-guard.service";
import { OrgAuthService } from "./services/Organization-Auth/org-guard.service";
import { RegistrationComponent } from "./components/Uploads/registration/registration.component";
import { DashboardComponent } from "./components/Dashboards/dashboard/dashboard.component";
import { OrganizationsComponent } from "./components/organizations/organizations.component";
import { FestUploadFormComponent } from "./components/Uploads/fest-upload-form/fest-upload-form.component";
import { OrganizationDashboardComponent } from "./components/Dashboards/organization-dashboard/organization-dashboard.component";
import { FestComponent } from "./components/fest/fest.component";
import { PagenotfoundComponent } from "./components/pagenotfound/pagenotfound.component";
import { EditorgdashboardComponent } from "./components/Dashboards/editorgdashboard/editorgdashboard.component";
import { EditfestComponent } from "./components/Uploads/editfest/editfest.component";
import { AftersuccessComponent } from "./components/aftersuccess/aftersuccess.component";
import { FailureComponent } from "./components/failure/failure.component";
import { PaymentComponent } from "./components/payment/payment.component";
import { FestspecificComponent } from "./components/festspecific/festspecific.component";
import { UploadSelectorComponent } from "./components/Uploads/upload-selector/upload-selector.component";
import { SeventUploadFormComponent } from "./components/Uploads/sevent-upload-form/sevent-upload-form.component";
import { MunUploadFormComponent } from "./components/Uploads/mun-upload-form/mun-upload-form.component";
import { BlogComponent } from "./components/blog/blog.component";
import { HomeComponent } from "./components/home/home.component";

import { FileUploadModule } from "ng2-file-upload";
import { AppService } from "./app.service";
import { HttpModule } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";
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
import { AuthService } from "./services/Authentication/auth.service";
import { SidebarModule } from "ng-sidebar";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "blog",
    component: BlogComponent
  },
  {
    path: "signup",
    component: RegistrationComponent
  },
  {
    path: "userdashboard",
    component: DashboardComponent,
    canActivate: [UserAuthService]
  },
  {
    path: "organizations",
    component: OrganizationsComponent
  },
  {
    path: "upload-selector",
    component: UploadSelectorComponent
    // canActivate: [OrgAuthService]
  },
  {
    path: "fest-upload",
    component: FestUploadFormComponent
    // canActivate: [OrgAuthService]
  },
  {
    path: "sevent-upload",
    component: SeventUploadFormComponent
    // canActivate: [OrgAuthService]
  },
  {
    path: "mun-upload",
    component: MunUploadFormComponent
    // canActivate: [OrgAuthService]
  },
  {
    path: "orgdashboard",
    component: OrganizationDashboardComponent,
    canActivate: [OrgAuthService]
  },
  {
    path: "edit",
    component: EditorgdashboardComponent,
    canActivate: [OrgAuthService]
  },
  {
    path: "editfest/:id",
    component: EditfestComponent,
    canActivate: [OrgAuthService]
  },
  {
    path: "success/:successData",
    component: AftersuccessComponent
  },
  {
    path: "failure",
    component: FailureComponent,
    canActivate: [UserAuthService]
  },
  {
    path: "fest",
    component: FestComponent
  },
  {
    path: "fest/:id",
    component: FestspecificComponent
  },
  {
    path: "payment",
    component: PaymentComponent,
    canActivate: [UserAuthService]
  },
  {
    path: "**",
    component: PagenotfoundComponent
  }
];

@NgModule({
  declarations: [
    HomeComponent,
    GrdFilterPipe,
    RegistrationComponent,
    DashboardComponent,
    OrganizationsComponent,
    FestUploadFormComponent,
    OrganizationDashboardComponent,
    FestComponent,
    PagenotfoundComponent,
    EditorgdashboardComponent,
    EditfestComponent,
    AftersuccessComponent,
    FailureComponent,
    PaymentComponent,
    FestspecificComponent,
    UploadSelectorComponent,
    SeventUploadFormComponent,
    MunUploadFormComponent,
    BlogComponent
  ],
  imports: [
    CommonModule,
    // ReactiveFormsModule,
    // FormsModule,
    SocialLoginModule,
    // HttpModule,
    HttpClientModule,
    SlickCarouselModule,
    BsDatepickerModule.forRoot(),
    TimepickerModule.forRoot(),
    FileUploadModule,
    // SidebarModule.forRoot(),
    RouterModule.forChild(routes)
  ],
  providers: [UserAuthService, OrgAuthService, AuthService]
})
export class LazyModule {}
