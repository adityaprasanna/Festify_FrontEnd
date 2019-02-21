import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';

import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class AppService {

  private _organizationUrl = "http://www.festify.in:8000/api/";
  //private _organizationUrl = "http://localhost:8000/api/";

  constructor(private http: Http,
    private _router: Router) { }

  createOrganization(members) {
    let object = {};
    object = JSON.stringify(members.value);
    let headerOptions = new Headers({ 'Content-Type': 'application/json', 'Accept': 'application/json' });
    let requestOptions = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });
    return this.http.post(`${this._organizationUrl}organization/create/`, object, requestOptions).pipe(map(x => x.json()));
  }

  organizationList() {
    //  let headerOptions = new Headers({ 'Content-Type': 'application/json'});
    //  let requestOptions = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });
    return this.http.get(`${this._organizationUrl}organization/list/`).pipe(map(x => x.json()));;
  }
  specificOrganizationList() {
    // let headerOptions = new Headers({ 'Content-Type': 'application/json'});
    // let requestOptions = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });
    let loggedInValue = sessionStorage.getItem('currentUserId');
    let userName = (JSON.parse(loggedInValue)).email;
    return this.http.get(`${this._organizationUrl}organization/dashboard/`, { params: { userid: userName } }).pipe(map(x => x.json()));;
  }
  organizationLogin(logindata) {
    let body = JSON.stringify(logindata.value);
    let headerOptions = new Headers({ 'Content-Type': 'application/json' });
    let requestOptions = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });
    return this.http.post(`${this._organizationUrl}organization/auth/login/`, body, requestOptions).pipe(map(x => x.json()));
  }
  createFest(members) {
    let loggedInValue = sessionStorage.getItem('currentUserId');
    let userName = (JSON.parse(loggedInValue)).email;
    let value = [];
    value.push({ 'userid': userName });
    let member = [];
    member.push(members.value);
    let finalValue = value.concat(member);
    let object = JSON.stringify(finalValue);
    let headerOptions = new Headers({ 'Content-Type': 'application/json', 'Accept': 'application/json' });
    let requestOptions = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });
    return this.http.post(`${this._organizationUrl}fest/create/`, object, requestOptions).pipe(map(x => x.json()));
  }
}