import { Component, OnInit } from "@angular/core";
import { AppService } from "src/app/app.service";
import { Router } from "@angular/router";
import { AuthService } from "../../../services/Authentication/auth.service";
import { ToastrService } from "ngx-toastr";

declare var $: any;

@Component({
  selector: "app-organization-dashboard",
  templateUrl: "./organization-dashboard.component.html",
  styleUrls: ["./organization-dashboard.component.scss"]
})
export class OrganizationDashboardComponent implements OnInit {
  organizationFestList: any;
  selectedRow: Number;
  organizationList: any;
  paymentList: any;
  festToEdit: any;
  orgDetails: any;

  constructor(
    private appService: AppService,
    private router: Router,
    private authService: AuthService,
    private toastr: ToastrService
  ) {}

  setClickedRow(index, fest) {
    this.selectedRow = index;
    this.festToEdit = fest;
  }

  ngOnInit() {
    this.orgDetails = JSON.parse(
      JSON.parse(sessionStorage.getItem("token"))._body
    ).user;
    this.gettingFestData();
  }

  gettingFestData() {
    this.authService.specificOrganizationList().subscribe(data => {
      if (data) {
        this.organizationList = data;
        // this.organizationFestList = data["fest"];
      }
      // const image = document.getElementById('imgElem');
      // image.setAttribute('src', this.organizationList.image);
    });
  }

  gettingSelectedValue(e) {
    $("input.chk").on("change", function() {
      $("input.chk")
        .not(this)
        .prop("checked", false);
    });
    if (this.selectedRow != undefined) {
    }
  }

  edit() {
    if (this.festToEdit) {
      this.router.navigate(["editfest", this.festToEdit.id]);
    } else {
      this.toastr.warning("Please select an event to Edit.");
    }
  }

  getList() {
    if (this.selectedRow) {
      let festId = localStorage.getItem("festspecific");
      this.appService.paymentList(JSON.parse(festId).fest_id).subscribe(x => {
        this.paymentList = x;
        document.getElementById("participant").style.display = "block";
      });
    } else {
      this.toastr.warning(
        "Please select an event to get the participant list."
      );
    }
  }

  delete() {
    var result = confirm("Are you sure you to delete?");
    if (result) {
      if (this.selectedRow != undefined) {
        let festId = localStorage.getItem("festspecific");
        this.authService.deleteFest(JSON.parse(festId).id).subscribe(x => {
          this.toastr.success("Deleted Successfully");
          this.gettingFestData();
        });
      } else {
        this.toastr.warning("Please select an event to Delete.");
      }
    }
  }
}
