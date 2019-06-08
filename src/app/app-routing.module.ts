import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { AuthGuardService } from "./services/auth-guard.service";
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
import { OrgauthService } from "./services/orgauth.service";
import { UploadSelectorComponent } from "./components/Uploads/upload-selector/upload-selector.component";
import { SeventUploadFormComponent } from "./components/Uploads/sevent-upload-form/sevent-upload-form.component";
import { MunUploadFormComponent } from "./components/Uploads/mun-upload-form/mun-upload-form.component";
import { BlogComponent } from "./components/blog/blog.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "home",
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
    canActivate: [AuthGuardService]
  },
  {
    path: "organizations",
    component: OrganizationsComponent
  },
  {
    path: "upload-selector",
    component: UploadSelectorComponent
    // canActivate: [OrgauthService]
  },
  {
    path: "fest-upload",
    component: FestUploadFormComponent
    // canActivate: [OrgauthService]
  },
  {
    path: "sevent-upload",
    component: SeventUploadFormComponent
    // canActivate: [OrgauthService]
  },
  {
    path: "mun-upload",
    component: MunUploadFormComponent
    // canActivate: [OrgauthService]
  },
  {
    path: "orgdashboard",
    component: OrganizationDashboardComponent,
    canActivate: [OrgauthService]
  },
  {
    path: "edit",
    component: EditorgdashboardComponent,
    canActivate: [OrgauthService]
  },
  {
    path: "editfest/:id",
    component: EditfestComponent,
    canActivate: [OrgauthService]
  },
  {
    // path: 'success/:&fname:&lname:&email:&phone:&fest:&event:&price:&tid',
    path: "success/:successData",
    component: AftersuccessComponent
  },
  {
    path: "failure",
    component: FailureComponent,
    canActivate: [AuthGuardService]
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
    canActivate: [AuthGuardService]
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
