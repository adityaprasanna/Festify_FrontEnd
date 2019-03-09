import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers, RequestOptions, RequestMethod } from '@angular/http';


import { AuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider, LinkedInLoginProvider } from "angularx-social-login";
import { map } from "rxjs/operators";

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

declare var $: any;


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  // private _organizationUrl = "https://www.festify.in:8000/api/";
  private _organizationUrl = "http://localhost:8000/api/";
  isClick = false;
  orgExist: string;
  userExist: string;
  constructor(private http: Http,
    private _router: Router, private authServiceConfig: AuthService) { }


  updateOrganization(members) {
    let object = [];
    object = eval(members);
    let loggedInValue = sessionStorage.getItem('currentUserId');
    let userName = (JSON.parse(loggedInValue)).email;
    let loggedInUser = [];
    loggedInUser.push({ 'userid': userName });
    let fiinalvalue = [];
    fiinalvalue = loggedInUser.concat(object);
    let headerOptions = new Headers({ 'Content-Type': 'application/json', 'Accept': 'application/json' });
    let requestOptions = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });
    return this.http.post(`${this._organizationUrl}organization/update/`, fiinalvalue, requestOptions).pipe(map(x => x.json()));
  }

  updateFest(members) {
    let object = [];
    object = eval(members);
    let loggedInValue = sessionStorage.getItem('currentUserId');
    let userName = (JSON.parse(loggedInValue)).email;
    let loggedInUser = [];
    loggedInUser.push({ 'userid': userName });
    let fiinalvalue = [];
    fiinalvalue = loggedInUser.concat(object);
    let headerOptions = new Headers({ 'Content-Type': 'application/json', 'Accept': 'application/json' });
    let requestOptions = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });
    return this.http.post(`${this._organizationUrl}fest/update/`, fiinalvalue, requestOptions).pipe(map(x => x.json()));
  }

  deleteFest(id) {
    return this.http.delete(`${this._organizationUrl}fest/delete/`, { params: { festid: id } }).pipe(map(x => x.json()));
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
    let headerOptions = new Headers({ 'Content-Type': 'application/json', 'Accept': 'application/json' });
    let requestOptions = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });
    return this.http.post(`${this._organizationUrl}user/login/`, fiinalvalue, requestOptions).pipe(map(x => x.json()));
  }

  festSepecificDetails(id) {
    return this.http.get(`${this._organizationUrl}fest/details/`, { params: { festid: id } }).pipe(map(x => x.json()));
  }

  getIP(): Observable<any[]> {
    return this.http.get('https://jsonip.com').pipe(map(x => x.json()));
  }

  paymentDeatailsUser(finalvalue) {
    let ipData = JSON.parse(localStorage.getItem('ip'));
    let paymentRequireData = JSON.parse(localStorage.getItem('festPaymentDeatils'));
    let userLoginData = JSON.parse(sessionStorage.getItem('userData'));


    let user = {
      email: finalvalue.email,
      fest_id: localStorage.getItem('festID'),
      event_id: paymentRequireData.id,
      ticket_price: paymentRequireData.ticket_price,
      host: ipData.ip,
      mobile: finalvalue.mobile,
      firstname:finalvalue.firstName,
      lastname:finalvalue.lastName
    }
    let data = JSON.stringify(user);
    let headerOptions = new Headers({ 'Content-Type': 'application/json', 'Accept': 'application/json' });
    let requestOptions = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });
    return this.http.post(`${this._organizationUrl}payment/create/`, data, requestOptions).pipe(map(x => x.json()));
  }
  
  getLikesNo(festData, e) {
    let likeData = {};
   
    if ( sessionStorage.getItem('userData')) {
      let element = document.getElementById(e.srcElement.id);
      if (element.className == 'blast') {
        element.className = 'heart';
        this.isClick = false;
      } else if (element.className == 'heart') {
        element.className = 'blast';
        this.isClick = true;
      }
      if (sessionStorage.getItem('userData')) {
        let email = JSON.parse(sessionStorage.getItem('userData')).email;
        likeData = {
          email: email,
          festData: festData,
          like: this.isClick,
        }
      }
     
      let headerOptions = new Headers({ 'Content-Type': 'application/json', 'Accept': 'application/json' });
      let requestOptions = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });
      this.http.post(`${this._organizationUrl}fest/liked/`, likeData, requestOptions).subscribe();

    } else {
      alert("Login to like");
    }
  }

  festDetailsWithspecific(id) {
    localStorage.setItem('festID', id);
    this._router.navigate(['/festDetails', id]);
  }

  getSuccessData() {
    return this.http.get(`${this._organizationUrl}user/login/`).pipe(map(x => x.json()));

  }
  getLikesBookedEvents(){
    let email:any;
    if (sessionStorage.getItem('userData')) {
      email = JSON.parse(sessionStorage.getItem('userData')).email;
    }else if (sessionStorage.getItem('currentUser')) {
       email = JSON.parse(sessionStorage.getItem('currentUser')).userid;
    }
    return this.http.get(`${this._organizationUrl}user/dislike/`, { params: { email: email } }).pipe(map(x => x.json()));
  }
  
}
