import { Component, OnInit } from "@angular/core";
import { AppService } from "src/app/app.service";
import { AuthenticationService } from "src/app/services/authentication.service";

@Component({
  selector: "app-organizations",
  templateUrl: "./organizations.component.html",
  styleUrls: ["./organizations.component.sass"]
})
export class OrganizationsComponent implements OnInit {
  organizationList: any = [];
  public searchText: string;

  constructor(
    private appService: AppService,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.orgExist = sessionStorage.getItem("currentUser");
    this.authenticationService.userExist = sessionStorage.getItem("userData");
  }

  get authenticationServicefn() {
    return this.authenticationService;
  }
  ngOnInit() {
    this.appService.organizationList().subscribe(data => {
      if (data == undefined) {
        // this.router.navigate(['home']);
      } else {
        this.organizationList = data;
      }
    });
  }
}
