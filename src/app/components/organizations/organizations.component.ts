import { Component, OnInit } from "@angular/core";
import { AppService } from "src/app/app.service";
import { AuthService } from "../../services/Authentication/auth.service";

@Component({
  selector: "app-organizations",
  templateUrl: "./organizations.component.html",
  styleUrls: ["./organizations.component.scss"]
})
export class OrganizationsComponent implements OnInit {
  organizationList: any = [];
  public searchText: string;

  constructor(
    private appService: AppService,
    private authService: AuthService
  ) {
    this.authService.orgExist = sessionStorage.getItem("currentUser");
    this.authService.userExist = sessionStorage.getItem("userData");
  }

  get authenticationServicefn() {
    return this.authService;
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
