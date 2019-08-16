import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions, RequestMethod } from "@angular/http";
import { map } from "rxjs/operators";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class AppService {
  private _organizationUrl = "";
  private headerOptions = new Headers({
    "Content-Type": "application/json",
    Accept: "application/json"
  });
  private requestOptions = new RequestOptions({
    method: RequestMethod.Post,
    headers: this.headerOptions
  });
  isClick = false;

  constructor(private http: Http, private _router: Router) {}

  festDetails() {
    return this.http
      .get(`${this._organizationUrl}fest/home/`)
      .pipe(map(x => x.json()));
  }

  festSpecificDetails(id: string) {
    id = id.replace("_", " ");
    return this.http
      .get(`${this._organizationUrl}fest/details/`, { params: { festid: id } })
      .pipe(map(x => x.json()));
  }

  festDetailsWithspecific(name) {
    name = name.replace(" ", "_");
    this._router.navigate(["/fest", name]);
  }

  organizationList() {
    return this.http
      .get(`${this._organizationUrl}organization/list/`)
      .pipe(map(x => x.json()));
  }

  paymentList(fest_id) {
    return this.http
      .get(`${this._organizationUrl}payment/list/`, {
        params: { festid: fest_id }
      })
      .pipe(map(x => x.json()));
  }

  specificOrganizationList() {
    let token = sessionStorage.getItem("token");
    return this.http
      .get(`${this._organizationUrl}organization/v1/${token}`)
      .pipe(map(x => x.json()));
  }

  getLikesNo(festData, e) {
    let likeData = {};

    if (sessionStorage.getItem("userData")) {
      const element = document.getElementById(e.srcElement.id);
      if (element.className == "blast") {
        element.className = "heart";
        this.isClick = false;
      } else if (element.className == "heart") {
        element.className = "blast";
        this.isClick = true;
      }
      if (sessionStorage.getItem("userData")) {
        const email = JSON.parse(sessionStorage.getItem("userData")).email;
        likeData = {
          email: email,
          festData: festData,
          like: this.isClick
        };
      }
      this.http
        .post(
          `${this._organizationUrl}fest/liked/`,
          likeData,
          this.requestOptions
        )
        .subscribe();
    } else {
      alert("Login to like");
    }
  }

  getLikesBookedEvents() {
    let email: any;
    if (sessionStorage.getItem("userData")) {
      email = JSON.parse(sessionStorage.getItem("userData")).email;
    } else if (sessionStorage.getItem("currentUser")) {
      email = JSON.parse(sessionStorage.getItem("currentUser")).userid;
    }
    return this.http
      .get(`${this._organizationUrl}user/dislike/`, {
        params: { email: email }
      })
      .pipe(map(x => x.json()));
  }
}
