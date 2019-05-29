import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { AuthGuardService } from "./auth-guard.service";
import { RegistrationComponent } from "./components/registration/registration.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { OrganizationsComponent } from "./components/organizations/organizations.component";
import { FestUploadFormComponent } from "./components/fest-upload-form/fest-upload-form.component";
import { MunUploadFormComponent } from "./components/mun-upload-form/mun-upload-form.component";
import { OrganizationDashboardComponent } from "./components/organization-dashboard/organization-dashboard.component";
import { FestComponent } from "./components/fest/fest.component";
import { PagenotfoundComponent } from "./components/pagenotfound/pagenotfound.component";
import { EditorgdashboardComponent } from "./components/editorgdashboard/editorgdashboard.component";
import { EditfestComponent } from "./components/editfest/editfest.component";
import { AftersuccessComponent } from "./components/aftersuccess/aftersuccess.component";
import { FailureComponent } from "./components/failure/failure.component";
import { PaymentComponent } from "./components/payment/payment.component";
import { FestspecificComponent } from "./components/festspecific/festspecific.component";
import { OrgauthService } from "./orgauth.service";

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
    path: "fest-upload-form",
    component: MunUploadFormComponent,
    canActivate: [OrgauthService]
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
    path: "editfest",
    component: EditfestComponent,
    canActivate: [OrgauthService]
  },
  {
    path: "success/:&fname:&lname:&email:&phone:&fest:&event:&price:&tid",
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
    path: "festDetails/:id",
    component: FestspecificComponent
  },
  {
    path: "payment",
    component: PaymentComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "festspecific",
    component: FestspecificComponent
  },
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
