import { Component, OnInit, ViewChild } from "@angular/core";
import { AuthenticationService } from "../../../services/authentication.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-editorgdashboard",
  templateUrl: "./editorgdashboard.component.html",
  styleUrls: ["./editorgdashboard.component.sass"]
})
export class EditorgdashboardComponent implements OnInit {
  editOrganizationList: any;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit() {
    let editOrganizationList = localStorage.getItem("organization");
    this.editOrganizationList = JSON.parse(editOrganizationList);
  }
  cancelSave() {
    this.router.navigate(["orgdashboard"]);
  }

  onSubmitTemplateBased() {
    console.log(this.editOrganizationList);
    this.authenticationService
      .updateOrganization(this.editOrganizationList)
      .subscribe(data => {
        if (data) {
          alert("data updated successfull");
          this.router.navigate(["orgdashboard"]);
        } else {
          alert("data updated unsuccessfull");
        }
      });
  }
}
