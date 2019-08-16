import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
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
const routes: Routes = [
  // {
  //   path: "",
  //   component: HomeComponent
  // },
  // {
  //   path: "home",
  //   component: HomeComponent
  // },
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
    // path: 'success/:&fname:&lname:&email:&phone:&fest:&event:&price:&tid',
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
  // {
  //   path: 'festspecific',
  //   component: FestspecificComponent,
  // },
  {
    path: "**",
    component: PagenotfoundComponent
  }
];

@NgModule({
  declarations: [
    HomeComponent,
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
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class LazyModule {}
