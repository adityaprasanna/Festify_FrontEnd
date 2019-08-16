import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions, RequestMethod } from "@angular/http";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
// import { LazyModule } from "../../lazy.module";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  baseUrl: string = environment.baseUrl;
  orgExist: string;
  userExist: string;

  constructor(private http: Http) {}

  // Organization APIs
  fileUpload(members) {
    return this.http.post(`${this.baseUrl}file/v1/`, members);
  }
  createOrgUser(members) {
    return this.http.post(`${this.baseUrl}user/create/v1/`, members);
  }
  createCoordinator(members) {
    return this.http.post(`${this.baseUrl}coordinator/v1/`, members);
  }
  createOrganization(members) {
    return this.http.post(`${this.baseUrl}organization/v1/`, members);
  }
  organizationLogin(logindata) {
    return this.http.post(`${this.baseUrl}user/login/v2/`, logindata);
  }

  // Fest APIs
  createEvent(members) {
    return this.http.post(`${this.baseUrl}event/v1/`, members);
  }
  createSponsor(members) {
    return this.http.post(`${this.baseUrl}sponsor/v1/`, members);
  }
  createAccount(members) {
    return this.http.post(`${this.baseUrl}accountDetails/v1/`, members);
  }
  createFest(members) {
    let value = [];
    let member = [];
    member.push(members.value);
    let finalValue = value.concat(member);
    let object = JSON.stringify(finalValue);
    return this.http.post(`${this.baseUrl}fest/v1/`, object);
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

    return this.http.post(`${this.baseUrl}organization/update/`, finalValue);
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

    return this.http.post(`${this.baseUrl}fest/update/`, finalValue);
  }

  deleteFest(id) {
    return this.http.delete(`${this.baseUrl}fest/delete/`, {
      params: { festid: id }
    });
  }

  deleteEvent(id) {
    return this.http.delete(`${this.baseUrl}fest/event/delete/`, {
      params: { event_id: id }
    });
  }

  deleteSponsor(id) {
    return this.http.delete(`${this.baseUrl}fest/sponsor/delete/`, {
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
    return this.http.get(`${this.baseUrl}user/logout/v2/`, options);
  }

  userLogin(finalValue) {
    return this.http.post(`${this.baseUrl}user/login/`, finalValue);
  }

  getIP(): Observable<any[]> {
    return this.http.get("https://jsonip.com").pipe(map(x => x.json()));
  }

  sendSMSAndEmail(txnid) {
    return this.http.get(`${this.baseUrl}payment/thankyou/`, {
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
    return this.http.post(`${this.baseUrl}payment/create/`, data);
  }

  // getSuccessData() {
  //   return this.http
  //     .get(`${this.baseUrl}user/dislike/`)
  //     .pipe(map(x => x.json()));
  // }
}
