import {Injectable} from '@angular/core';
import {HttpClient} from 'selenium-webdriver/http';
import {Router} from '@angular/router';
import {HttpClientModule, HttpErrorResponse} from '@angular/common/http';
import {Http, Response, Headers, RequestOptions, RequestMethod} from '@angular/http';
import {catchError} from 'rxjs/operators';
import {map} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AppService {
// <<<<<<< HEAD
//   // private _organizationUrl = '';
//   // const path = window.location.host.split(':');
//   // if(path[0] === 'localhost') {
//     // this._organizationUrl = "http://localhost:8000/api/";
//   // } 
//   // else {
//   //   let _organizationUrl = "https://www.festify.in/django/api/";
//   // }
//   // private _organizationUrl = "http://localhost:8000/api/";
//   private _organizationUrl = "https://www.festify.in/django/api/";

//   constructor(private http: Http, private _router: Router) { }
// =======
//   private _organizationUrl = '';

//   constructor(private http: Http, private _router: Router) {
//     if (window.location.host.includes('localhost')) {
//       this._organizationUrl = 'http://localhost:8000/api/';
//     } else {
//       this._organizationUrl = 'https://www.festify.in/django/api/';
//     }
//   }
// >>>>>>> 18cf2efbecd8c73bfb06431500beca3f804bf23d
  // private _organizationUrl = "https://www.festify.in/django/api/";

  private _organizationUrl = 'http://localhost:8000/api/';
  
  constructor(private http: Http, private _router: Router) { }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }

  createOrganization(members) {
    let object = {};
    object = JSON.stringify(members.value);
    let headerOptions = new Headers({'Content-Type': 'application/json', 'Accept': 'application/json'});
    let requestOptions = new RequestOptions({method: RequestMethod.Post, headers: headerOptions});
    return this.http.post(`${this._organizationUrl}organization/create/`, object, requestOptions).pipe(map(x => x.json()));
  }

  organizationList() {
    //  let headerOptions = new Headers({ 'Content-Type': 'application/json'});
    //  let requestOptions = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });
    return this.http.get(`${this._organizationUrl}organization/list/`).pipe(map(x => x.json()));
  }

  paymentList() {
    //  let headerOptions = new Headers({ 'Content-Type': 'application/json'});
    //  let requestOptions = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });
    return this.http.get(`${this._organizationUrl}payment/list/`).pipe(map(x => x.json()));
  }

  specificOrganizationList() {
    // let headerOptions = new Headers({ 'Content-Type': 'application/json'});
    // let requestOptions = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });
    let loggedInValue = sessionStorage.getItem('currentUserId');
    let userName = (JSON.parse(loggedInValue)).email;
    return this.http.get(`${this._organizationUrl}organization/dashboard/`, {params: {userid: userName}}).pipe(map(x => x.json()));
    ;
  }

  organizationLogin(logindata) {
    let body = JSON.stringify(logindata.value);
    let headerOptions = new Headers({'Content-Type': 'application/json'});
    let requestOptions = new RequestOptions({method: RequestMethod.Post, headers: headerOptions});
    return this.http.post(`${this._organizationUrl}organization/auth/login/`, body, requestOptions).pipe(map(x => x.json()));
  }

  createFest(members) {
    let loggedInValue = sessionStorage.getItem('currentUserId');
    let userName = (JSON.parse(loggedInValue)).email;
    let value = [];
    value.push({'userid': userName});
    let member = [];
    member.push(members.value);
    let finalValue = value.concat(member);
    let object = JSON.stringify(finalValue);
    let headerOptions = new Headers({'Content-Type': 'application/json', 'Accept': 'application/json'});
    let requestOptions = new RequestOptions({method: RequestMethod.Post, headers: headerOptions});
    return this.http.post(`${this._organizationUrl}fest/create/`, object, requestOptions).pipe(map(x => x.json()));
  }
}
