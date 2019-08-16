import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions, RequestMethod } from "@angular/http";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { rootRenderNodes } from "@angular/core/src/view";
// import { LazyModule } from "../../lazy.module";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private _organizationUrl = "";
  orgExist: string;
  userExist: string;

  constructor(private http: Http) {
    if (window.location.host.includes("localhost")) {
      this._organizationUrl = "http://localhost:8000/api/";
    } else {
      this._organizationUrl = "https://www.festify.in/django/api/";
    }
    this._organizationUrl = "http://632cc11b.ngrok.io/api/";
  }

  // Organization APIs
  fileUpload(members) {
    return this.http.post(`${this._organizationUrl}file/v1/`, members);
  }
  createOrgUser(members) {
    return this.http.post(`${this._organizationUrl}user/create/v1/`, members);
  }
  createCoordinator(members) {
    return this.http.post(`${this._organizationUrl}coordinator/v1/`, members);
  }
  createOrganization(members) {
    return this.http.post(`${this._organizationUrl}organization/v1/`, members);
  }
  organizationLogin(logindata) {
    return this.http.post(`${this._organizationUrl}user/login/v2/`, logindata);
  }

  // Fest APIs
  createEvent(members) {
    return this.http.post(`${this._organizationUrl}event/v1/`, members);
  }
  createSponsor(members) {
    return this.http.post(`${this._organizationUrl}sponsor/v1/`, members);
  }
  createAccount(members) {
    return this.http.post(
      `${this._organizationUrl}accountDetails/v1/`,
      members
    );
  }
  createFest(members) {
    let value = [];
    let member = [];
    member.push(members.value);
    let finalValue = value.concat(member);
    let object = JSON.stringify(finalValue);
    return this.http.post(`${this._organizationUrl}fest/v1/`, object);
  }

  // Ends Here

  updateOrganization(members) {
    let object = [];
    const loggedInUser = [];
    let finalValue = [];

    object = eval(members);
    const loggedInValue = sessionStorage.getItem("currentUserId");
    const userName = JSON.parse(loggedInValue).email;
    loggedInUser.push({ userid: userName });
    finalValue = loggedInUser.concat(object);

    return this.http.post(
      `${this._organizationUrl}organization/update/`,
      finalValue
    );
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

    return this.http.post(`${this._organizationUrl}fest/update/`, finalValue);
  }

  deleteFest(id) {
    return this.http.delete(`${this._organizationUrl}fest/delete/`, {
      params: { festid: id }
    });
  }

  deleteEvent(id) {
    return this.http.delete(`${this._organizationUrl}fest/event/delete/`, {
      params: { event_id: id }
    });
  }

  deleteSponsor(id) {
    return this.http.delete(`${this._organizationUrl}fest/sponsor/delete/`, {
      params: { sponsor_id: id }
    });
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
    return this.http.post(`${this._organizationUrl}user/login/`, finalValue);
  }

  getIP(): Observable<any[]> {
    return this.http.get("https://jsonip.com").pipe(map(x => x.json()));
  }

  sendSMSAndEmail(txnid) {
    return this.http.get(`${this._organizationUrl}payment/thankyou/`, {
      params: { txnid: txnid }
    });
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
    return this.http.post(`${this._organizationUrl}payment/create/`, data);
  }

  // getSuccessData() {
  //   return this.http
  //     .get(`${this._organizationUrl}user/dislike/`)
  //     .pipe(map(x => x.json()));
  // }
}

// <<<<<< HEAD [code from branch pulling from ]
// ... code
// ========== [code on your local]
// /... code
// >>>>>> <commitid>
