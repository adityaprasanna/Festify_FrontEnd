import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Http, Headers, RequestOptions, RequestMethod} from '@angular/http';


import {AuthService} from 'angularx-social-login';
import {FacebookLoginProvider, GoogleLoginProvider, LinkedInLoginProvider} from 'angularx-social-login';
import {map} from 'rxjs/operators';

import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs';

declare var $: any;


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  // private _organizationUrl = '';

  // private _organizationUrl = "http://localhost:8000/api/";
  isClick = false;
  orgExist: string;
  userExist: string;
  // private _organizationUrl = 'http://localhost:8000/api/';
  private _organizationUrl = 'https://www.festify.in/django/api/';
  constructor(private http: Http, private _router: Router, private authServiceConfig: AuthService) {
    if (window.location.host.includes('localhost')) {
      this._organizationUrl = 'http://localhost:8000/api/';
    } else {
      this._organizationUrl = 'https://www.festify.in/django/api/';
    }
    this._organizationUrl = 'https://www.festify.in/django/api/';
  }


  updateOrganization(members) {
    let object = [];
    object = eval(members);
    const loggedInValue = sessionStorage.getItem('currentUserId');
    const userName = (JSON.parse(loggedInValue)).email;
    const loggedInUser = [];
    loggedInUser.push({'userid': userName});
    let fiinalvalue = [];
    fiinalvalue = loggedInUser.concat(object);
    const headerOptions = new Headers({'Content-Type': 'application/json', 'Accept': 'application/json'});
    const requestOptions = new RequestOptions({method: RequestMethod.Post, headers: headerOptions});
    return this.http.post(`${this._organizationUrl}organization/update/`, fiinalvalue, requestOptions).pipe(map(x => x.json()));
  }

  updateFest(members) {
    let object = [];
    object = eval(members);
    const loggedInValue = sessionStorage.getItem('currentUserId');
    const userName = (JSON.parse(loggedInValue)).email;
    const loggedInUser = [];
    loggedInUser.push({'userid': userName});
    let fiinalvalue = [];
    fiinalvalue = loggedInUser.concat(object);
    const headerOptions = new Headers({'Content-Type': 'application/json', 'Accept': 'application/json'});
    const requestOptions = new RequestOptions({method: RequestMethod.Post, headers: headerOptions});
    return this.http.post(`${this._organizationUrl}fest/update/`, fiinalvalue, requestOptions).pipe(map(x => x.json()));
  }

  deleteFest(id) {
    return this.http.delete(`${this._organizationUrl}fest/delete/`, {params: {festid: id}}).pipe(map(x => x.json()));
  }

  deleteEvent(id) {
    return this.http.delete(`${this._organizationUrl}fest/event/delete/`, {params: {event_id: id}}).pipe(map(x => x.json()));
  }

  deleteSponsor(id) {
    return this.http.delete(`${this._organizationUrl}fest/sponsor/delete/`, {params: {sponsor_id: id}}).pipe(map(x => x.json()));
  }

  logout() {
    sessionStorage.removeItem('currentUser');
    sessionStorage.removeItem('userData');
    sessionStorage.removeItem('currentUserId');
    this.orgExist = undefined;
    this.userExist = undefined;
    localStorage.clear();
    // alert("Successfully logout")
    this._router.navigate(['home']);
  }

  socialmediaLogOut() {
    this.authServiceConfig.signOut();
    sessionStorage.removeItem('currentUser');
    sessionStorage.removeItem('userData');
    sessionStorage.removeItem('currentUserId');
    this.orgExist = undefined;
    this.userExist = undefined;
    localStorage.clear();
    // alert("Successfully logout")
    this._router.navigate(['home']);
  }

  festDetails() {
    return this.http.get(`${this._organizationUrl}fest/home/`).pipe(map(x => x.json()));
  }

  userLogin(fiinalvalue) {
    const headerOptions = new Headers({'Content-Type': 'application/json', 'Accept': 'application/json'});
    const requestOptions = new RequestOptions({method: RequestMethod.Post, headers: headerOptions});
    return this.http.post(`${this._organizationUrl}user/login/`, fiinalvalue, requestOptions).pipe(map(x => x.json()));
  }

  festSepecificDetails(id) {
    return this.http.get(`${this._organizationUrl}fest/details/`, {params: {festid: id}}).pipe(map(x => x.json()));
  }

  getIP(): Observable<any[]> {
    return this.http.get('https://jsonip.com').pipe(map(x => x.json()));
  }

  sendSMSAndEmail(txnid) {
    return this.http.get(`${this._organizationUrl}payment/thankyou/`, {params: {txnid: txnid}}).pipe(map(x => x.json()));
  }

  paymentDeatailsUser(finalvalue) {
    const ipData = JSON.parse(localStorage.getItem('ip'));
    const paymentRequireData = JSON.parse(localStorage.getItem('festPaymentDeatils'));
    const userLoginData = JSON.parse(sessionStorage.getItem('userData'));


    const user = {
      email: finalvalue.email,
      fest_id: localStorage.getItem('festID'),
      event_id: paymentRequireData.id,
      event_name: paymentRequireData.event_name,
      ticket_price: paymentRequireData.ticket_price,
      host: ipData.ip,
      mobile: finalvalue.mobile,
      firstname: finalvalue.firstName,
      lastname: finalvalue.lastName
    };
    const data = JSON.stringify(user);
    const headerOptions = new Headers({'Content-Type': 'application/json', 'Accept': 'application/json'});
    const requestOptions = new RequestOptions({method: RequestMethod.Post, headers: headerOptions});
    return this.http.post(`${this._organizationUrl}payment/create/`, data, requestOptions).pipe(map(x => x.json()));
  }

  getLikesNo(festData, e) {
    let likeData = {};

    if (sessionStorage.getItem('userData')) {
      const element = document.getElementById(e.srcElement.id);
      if (element.className == 'blast') {
        element.className = 'heart';
        this.isClick = false;
      } else if (element.className == 'heart') {
        element.className = 'blast';
        this.isClick = true;
      }
      if (sessionStorage.getItem('userData')) {
        const email = JSON.parse(sessionStorage.getItem('userData')).email;
        likeData = {
          email: email,
          festData: festData,
          like: this.isClick,
        };
      }

      const headerOptions = new Headers({'Content-Type': 'application/json', 'Accept': 'application/json'});
      const requestOptions = new RequestOptions({method: RequestMethod.Post, headers: headerOptions});
      this.http.post(`${this._organizationUrl}fest/liked/`, likeData, requestOptions).subscribe();

    } else {
      alert('Login to like');
    }
  }

  festDetailsWithspecific(id) {
    localStorage.setItem('festID', id);
    this._router.navigate(['/festDetails', id]);
  }

  getSuccessData() {
    return this.http.get(`${this._organizationUrl}user/dislike/`).pipe(map(x => x.json()));

  }

  getLikesBookedEvents() {
    let email: any;
    if (sessionStorage.getItem('userData')) {
      email = JSON.parse(sessionStorage.getItem('userData')).email;
    } else if (sessionStorage.getItem('currentUser')) {
      email = JSON.parse(sessionStorage.getItem('currentUser')).userid;
    }
    return this.http.get(`${this._organizationUrl}user/dislike/`, {params: {email: email}}).pipe(map(x => x.json()));
  }

}
