import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions, RequestMethod } from "@angular/http";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private _organizationUrl = "";
  private headerOptions = new Headers({
    "Content-Type": "application/json"
  });
  private fileHeaderOptions = new Headers({
    "Content-Type": "application/x-www-form-urlencoded",
    Accept: "application/json"
  });
  private requestOptions = new RequestOptions({
    method: RequestMethod.Post,
    headers: this.headerOptions
  });
  private fileRequestOptions = new RequestOptions({
    method: RequestMethod.Post,
    headers: this.fileHeaderOptions
  });
  orgExist: string;
  userExist: string;

  constructor(private http: Http) {
    if (window.location.host.includes("localhost")) {
      this._organizationUrl = "http://localhost:8000/api/";
    } else {
      this._organizationUrl = "https://www.festify.in/django/api/";
    }
    this._organizationUrl = "http://d8381f91.ngrok.io/api/";
  }

  createOrganization(members) {
    let object = {};
    object = JSON.stringify(members.value);
    return this.http
      .post(
        `${this._organizationUrl}user/login/v2/`,
        object,
        this.requestOptions
      )
      .pipe(map(x => x.json()));
  }
  createFest(members) {
    let value = [];
    let member = [];
    member.push(members.value);
    let finalValue = value.concat(member);
    let object = JSON.stringify(finalValue);
    return this.http
      .post(`${this._organizationUrl}file/v1/`, object, this.fileRequestOptions)
      .pipe(map(x => x.json()));
  }

  organizationLogin(logindata) {
    let body = JSON.stringify(logindata.value);
    return this.http
      .post(`${this._organizationUrl}user/login/v2/`, body, this.requestOptions)
      .pipe(map(x => x.json()));
  }

  updateOrganization(members) {
    let object = [];
    const loggedInUser = [];
    let finalValue = [];

    object = eval(members);
    const loggedInValue = sessionStorage.getItem("currentUserId");
    const userName = JSON.parse(loggedInValue).email;
    loggedInUser.push({ userid: userName });
    finalValue = loggedInUser.concat(object);

    return this.http
      .post(
        `${this._organizationUrl}organization/update/`,
        finalValue,
        this.requestOptions
      )
      .pipe(map(x => x.json()));
  }

  updateFest(members) {
    let object = [];
    const loggedInUser = [];
    let finalValue = [];

    object = eval(members);
    const loggedInValue = sessionStorage.getItem("currentUserId");
    const userName = JSON.parse(loggedInValue).email;
    loggedInUser.push({ userid: userName });
    finalValue = loggedInUser.concat(object);

    return this.http
      .post(
        `${this._organizationUrl}fest/update/`,
        finalValue,
        this.requestOptions
      )
      .pipe(map(x => x.json()));
  }

  deleteFest(id) {
    return this.http
      .delete(`${this._organizationUrl}fest/delete/`, {
        params: { festid: id }
      })
      .pipe(map(x => x.json()));
  }

  deleteEvent(id) {
    return this.http
      .delete(`${this._organizationUrl}fest/event/delete/`, {
        params: { event_id: id }
      })
      .pipe(map(x => x.json()));
  }

  deleteSponsor(id) {
    return this.http
      .delete(`${this._organizationUrl}fest/sponsor/delete/`, {
        params: { sponsor_id: id }
      })
      .pipe(map(x => x.json()));
  }

  logout() {
    // sessionStorage.removeItem("currentUser");
    // sessionStorage.removeItem("userData");
    // sessionStorage.removeItem("currentUserId");
    // this.orgExist = undefined;
    // this.userExist = undefined;
    // localStorage.clear();
    // this._router.navigate(["home"]);
    this.orgExist = undefined;
    this.userExist = undefined;
    const authToken = sessionStorage.getItem("token");
    let headers = new Headers();
    headers.set("Authorization", authToken);
    let options = new RequestOptions({ headers: headers });
    return this.http.get(`${this._organizationUrl}user/logout/v2/`, options);
  }

  userLogin(finalValue) {
    return this.http
      .post(
        `${this._organizationUrl}user/login/`,
        finalValue,
        this.requestOptions
      )
      .pipe(map(x => x.json()));
  }

  getIP(): Observable<any[]> {
    return this.http.get("https://jsonip.com").pipe(map(x => x.json()));
  }

  sendSMSAndEmail(txnid) {
    return this.http
      .get(`${this._organizationUrl}payment/thankyou/`, {
        params: { txnid: txnid }
      })
      .pipe(map(x => x.json()));
  }

  makePayment(finalvalue) {
    const ipData = JSON.parse(localStorage.getItem("ip"));
    const paymentRequireData = JSON.parse(
      localStorage.getItem("festPaymentDeatils")
    );
    const user = {
      email: finalvalue.email,
      fest_id: localStorage.getItem("festID"),
      event_id: paymentRequireData.id,
      event_name: paymentRequireData.event_name,
      ticket_price: paymentRequireData.ticket_price,
      host: ipData.ip,
      mobile: finalvalue.mobile,
      firstname: finalvalue.firstName,
      lastname: finalvalue.lastName
    };
    const data = JSON.stringify(user);
    return this.http
      .post(
        `${this._organizationUrl}payment/create/`,
        data,
        this.requestOptions
      )
      .pipe(map(x => x.json()));
  }

  // getSuccessData() {
  //   return this.http
  //     .get(`${this._organizationUrl}user/dislike/`)
  //     .pipe(map(x => x.json()));
  // }
}
