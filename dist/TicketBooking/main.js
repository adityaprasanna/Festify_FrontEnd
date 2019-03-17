(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth-guard.service */ "./src/app/auth-guard.service.ts");
/* harmony import */ var _components_registration_registration_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/registration/registration.component */ "./src/app/components/registration/registration.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_organizations_organizations_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/organizations/organizations.component */ "./src/app/components/organizations/organizations.component.ts");
/* harmony import */ var _components_fest_upload_form_fest_upload_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/fest-upload-form/fest-upload-form.component */ "./src/app/components/fest-upload-form/fest-upload-form.component.ts");
/* harmony import */ var _components_organization_dashboard_organization_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/organization-dashboard/organization-dashboard.component */ "./src/app/components/organization-dashboard/organization-dashboard.component.ts");
/* harmony import */ var _components_fest_fest_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/fest/fest.component */ "./src/app/components/fest/fest.component.ts");
/* harmony import */ var _components_pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/pagenotfound/pagenotfound.component */ "./src/app/components/pagenotfound/pagenotfound.component.ts");
/* harmony import */ var _components_editorgdashboard_editorgdashboard_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/editorgdashboard/editorgdashboard.component */ "./src/app/components/editorgdashboard/editorgdashboard.component.ts");
/* harmony import */ var _components_editfest_editfest_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/editfest/editfest.component */ "./src/app/components/editfest/editfest.component.ts");
/* harmony import */ var _components_aftersuccess_aftersuccess_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/aftersuccess/aftersuccess.component */ "./src/app/components/aftersuccess/aftersuccess.component.ts");
/* harmony import */ var _components_failure_failure_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/failure/failure.component */ "./src/app/components/failure/failure.component.ts");
/* harmony import */ var _components_payment_payment_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/payment/payment.component */ "./src/app/components/payment/payment.component.ts");
/* harmony import */ var _components_festspecific_festspecific_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/festspecific/festspecific.component */ "./src/app/components/festspecific/festspecific.component.ts");
/* harmony import */ var _orgauth_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./orgauth.service */ "./src/app/orgauth.service.ts");



















var routes = [
    {
        path: '',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    },
    {
        path: 'home',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    },
    {
        path: 'signup',
        component: _components_registration_registration_component__WEBPACK_IMPORTED_MODULE_5__["RegistrationComponent"]
    },
    {
        path: 'userdashboard',
        component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"],
        canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]]
    },
    {
        path: 'organizations',
        component: _components_organizations_organizations_component__WEBPACK_IMPORTED_MODULE_7__["OrganizationsComponent"],
    },
    {
        path: 'fest-upload-form',
        component: _components_fest_upload_form_fest_upload_form_component__WEBPACK_IMPORTED_MODULE_8__["FestUploadFormComponent"],
        canActivate: [_orgauth_service__WEBPACK_IMPORTED_MODULE_18__["OrgauthService"]]
    },
    {
        path: 'orgdashboard',
        component: _components_organization_dashboard_organization_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["OrganizationDashboardComponent"],
        canActivate: [_orgauth_service__WEBPACK_IMPORTED_MODULE_18__["OrgauthService"]]
    },
    {
        path: 'edit',
        component: _components_editorgdashboard_editorgdashboard_component__WEBPACK_IMPORTED_MODULE_12__["EditorgdashboardComponent"],
        canActivate: [_orgauth_service__WEBPACK_IMPORTED_MODULE_18__["OrgauthService"]]
    },
    {
        path: 'editfest',
        component: _components_editfest_editfest_component__WEBPACK_IMPORTED_MODULE_13__["EditfestComponent"],
        canActivate: [_orgauth_service__WEBPACK_IMPORTED_MODULE_18__["OrgauthService"]]
    },
    {
        path: 'success/:&fname:&lname:&email:&phone:&fest:&event:&price:&tid',
        component: _components_aftersuccess_aftersuccess_component__WEBPACK_IMPORTED_MODULE_14__["AftersuccessComponent"],
    },
    {
        path: 'failure',
        component: _components_failure_failure_component__WEBPACK_IMPORTED_MODULE_15__["FailureComponent"],
        canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]]
    },
    {
        path: 'fest',
        component: _components_fest_fest_component__WEBPACK_IMPORTED_MODULE_10__["FestComponent"]
    },
    {
        path: 'festDetails/:id',
        component: _components_festspecific_festspecific_component__WEBPACK_IMPORTED_MODULE_17__["FestspecificComponent"],
    },
    {
        path: 'payment',
        component: _components_payment_payment_component__WEBPACK_IMPORTED_MODULE_16__["PaymentComponent"],
        canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]]
    },
    {
        path: 'festspecific',
        component: _components_festspecific_festspecific_component__WEBPACK_IMPORTED_MODULE_17__["FestspecificComponent"],
    },
    {
        path: '**',
        component: _components_pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_11__["PagenotfoundComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.sass":
/*!************************************!*\
  !*** ./src/app/app.component.sass ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2FzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'TicketBooking';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.sass */ "./src/app/app.component.sass")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: getAuthServiceConfigs, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAuthServiceConfigs", function() { return getAuthServiceConfigs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-slick-carousel */ "./node_modules/ngx-slick-carousel/fesm5/ngx-slick-carousel.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_registration_registration_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/registration/registration.component */ "./src/app/components/registration/registration.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/pagenotfound/pagenotfound.component */ "./src/app/components/pagenotfound/pagenotfound.component.ts");
/* harmony import */ var _components_organizations_organizations_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/organizations/organizations.component */ "./src/app/components/organizations/organizations.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_fest_upload_form_fest_upload_form_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/fest-upload-form/fest-upload-form.component */ "./src/app/components/fest-upload-form/fest-upload-form.component.ts");
/* harmony import */ var _components_organizations_grd_filter_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/organizations/grd-filter.pipe */ "./src/app/components/organizations/grd-filter.pipe.ts");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! angularx-social-login */ "./node_modules/angularx-social-login/angularx-social-login.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-recaptcha */ "./node_modules/ng-recaptcha/index.js");
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(ng_recaptcha__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var ng_recaptcha_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-recaptcha/forms */ "./node_modules/ng-recaptcha/forms.js");
/* harmony import */ var ng_recaptcha_forms__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(ng_recaptcha_forms__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm5/ngx-bootstrap-datepicker.js");
/* harmony import */ var ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-bootstrap/timepicker */ "./node_modules/ngx-bootstrap/timepicker/fesm5/ngx-bootstrap-timepicker.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./auth-guard.service */ "./src/app/auth-guard.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _components_organization_dashboard_organization_dashboard_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/organization-dashboard/organization-dashboard.component */ "./src/app/components/organization-dashboard/organization-dashboard.component.ts");
/* harmony import */ var _components_fest_fest_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/fest/fest.component */ "./src/app/components/fest/fest.component.ts");
/* harmony import */ var _userheader_userheader_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./userheader/userheader.component */ "./src/app/userheader/userheader.component.ts");
/* harmony import */ var _organizationheader_organizationheader_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./organizationheader/organizationheader.component */ "./src/app/organizationheader/organizationheader.component.ts");
/* harmony import */ var _components_editorgdashboard_editorgdashboard_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/editorgdashboard/editorgdashboard.component */ "./src/app/components/editorgdashboard/editorgdashboard.component.ts");
/* harmony import */ var _components_editfest_editfest_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/editfest/editfest.component */ "./src/app/components/editfest/editfest.component.ts");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./authentication.service */ "./src/app/authentication.service.ts");
/* harmony import */ var _components_payment_payment_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/payment/payment.component */ "./src/app/components/payment/payment.component.ts");
/* harmony import */ var _components_festspecific_festspecific_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/festspecific/festspecific.component */ "./src/app/components/festspecific/festspecific.component.ts");
/* harmony import */ var _components_failure_failure_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/failure/failure.component */ "./src/app/components/failure/failure.component.ts");
/* harmony import */ var _orgauth_service__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./orgauth.service */ "./src/app/orgauth.service.ts");
/* harmony import */ var _components_private_policy_private_policy_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/private-policy/private-policy.component */ "./src/app/components/private-policy/private-policy.component.ts");
/* harmony import */ var _components_aftersuccess_aftersuccess_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/aftersuccess/aftersuccess.component */ "./src/app/components/aftersuccess/aftersuccess.component.ts");















// import {SocialLoginModule,AuthServiceConfig,GoogleLoginProvider,FacebookLoginProvider,
// } from "angular-6-social-login-v2";







//service


















function getAuthServiceConfigs() {
    var config = new angularx_social_login__WEBPACK_IMPORTED_MODULE_15__["AuthServiceConfig"]([
        {
            id: angularx_social_login__WEBPACK_IMPORTED_MODULE_15__["FacebookLoginProvider"].PROVIDER_ID,
            provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_15__["FacebookLoginProvider"]("541589206326432")
        },
        {
            id: angularx_social_login__WEBPACK_IMPORTED_MODULE_15__["GoogleLoginProvider"].PROVIDER_ID,
            provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_15__["GoogleLoginProvider"]("394569857573-fl3pfejivfi6nvj2289u6s67o7ki3n1u.apps.googleusercontent.com")
        },
    ]);
    return config;
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _components_registration_registration_component__WEBPACK_IMPORTED_MODULE_7__["RegistrationComponent"],
                _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"],
                _components_pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_9__["PagenotfoundComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_25__["FileSelectDirective"],
                _components_fest_upload_form_fest_upload_form_component__WEBPACK_IMPORTED_MODULE_13__["FestUploadFormComponent"],
                _components_organizations_organizations_component__WEBPACK_IMPORTED_MODULE_10__["OrganizationsComponent"],
                _components_organizations_grd_filter_pipe__WEBPACK_IMPORTED_MODULE_14__["GrdFilterPipe"],
                _components_organization_dashboard_organization_dashboard_component__WEBPACK_IMPORTED_MODULE_26__["OrganizationDashboardComponent"],
                _components_fest_fest_component__WEBPACK_IMPORTED_MODULE_27__["FestComponent"],
                _userheader_userheader_component__WEBPACK_IMPORTED_MODULE_28__["UserheaderComponent"],
                _organizationheader_organizationheader_component__WEBPACK_IMPORTED_MODULE_29__["OrganizationheaderComponent"],
                _components_editorgdashboard_editorgdashboard_component__WEBPACK_IMPORTED_MODULE_30__["EditorgdashboardComponent"],
                _components_editfest_editfest_component__WEBPACK_IMPORTED_MODULE_31__["EditfestComponent"],
                _components_payment_payment_component__WEBPACK_IMPORTED_MODULE_33__["PaymentComponent"],
                _components_festspecific_festspecific_component__WEBPACK_IMPORTED_MODULE_34__["FestspecificComponent"],
                _components_failure_failure_component__WEBPACK_IMPORTED_MODULE_35__["FailureComponent"],
                _components_private_policy_private_policy_component__WEBPACK_IMPORTED_MODULE_37__["PrivatePolicyComponent"],
                _components_aftersuccess_aftersuccess_component__WEBPACK_IMPORTED_MODULE_38__["AftersuccessComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
                angularx_social_login__WEBPACK_IMPORTED_MODULE_15__["SocialLoginModule"],
                ng_recaptcha__WEBPACK_IMPORTED_MODULE_17__["RecaptchaModule"].forRoot(),
                ng_recaptcha_forms__WEBPACK_IMPORTED_MODULE_18__["RecaptchaFormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_23__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["HttpClientModule"],
                ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_3__["SlickCarouselModule"],
                ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_19__["BsDatepickerModule"].forRoot(),
                ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_20__["TimepickerModule"].forRoot(),
            ],
            providers: [{
                    provide: angularx_social_login__WEBPACK_IMPORTED_MODULE_15__["AuthServiceConfig"],
                    useFactory: getAuthServiceConfigs
                },
                {
                    provide: ng_recaptcha__WEBPACK_IMPORTED_MODULE_17__["RECAPTCHA_SETTINGS"],
                    useValue: {
                        siteKey: '6Lf5lY0UAAAAABK_UwwIo_CahKFI0mMSoB9ZcnXC',
                    },
                }, _app_service__WEBPACK_IMPORTED_MODULE_21__["AppService"], _auth_guard_service__WEBPACK_IMPORTED_MODULE_22__["AuthGuardService"], _authentication_service__WEBPACK_IMPORTED_MODULE_32__["AuthenticationService"], _orgauth_service__WEBPACK_IMPORTED_MODULE_36__["OrgauthService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");






var AppService = /** @class */ (function () {
    function AppService(http, _router) {
        this.http = http;
        this._router = _router;
        // private _organizationUrl = "http://www.festify.in:8000/api/";
        this._organizationUrl = "http://localhost:8000/api/";
    }
    AppService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])('Something bad happened; please try again later.');
    };
    ;
    AppService.prototype.createOrganization = function (members) {
        var object = {};
        object = JSON.stringify(members.value);
        var headerOptions = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({ 'Content-Type': 'application/json', 'Accept': 'application/json' });
        var requestOptions = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["RequestOptions"]({ method: _angular_http__WEBPACK_IMPORTED_MODULE_3__["RequestMethod"].Post, headers: headerOptions });
        return this.http.post(this._organizationUrl + "organization/create/", object, requestOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (x) { return x.json(); }));
    };
    AppService.prototype.organizationList = function () {
        //  let headerOptions = new Headers({ 'Content-Type': 'application/json'});
        //  let requestOptions = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });
        return this.http.get(this._organizationUrl + "organization/list/").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (x) { return x.json(); }));
        ;
    };
    AppService.prototype.specificOrganizationList = function () {
        // let headerOptions = new Headers({ 'Content-Type': 'application/json'});
        // let requestOptions = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });
        var loggedInValue = sessionStorage.getItem('currentUserId');
        var userName = (JSON.parse(loggedInValue)).email;
        return this.http.get(this._organizationUrl + "organization/dashboard/", { params: { userid: userName } }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (x) { return x.json(); }));
        ;
    };
    AppService.prototype.organizationLogin = function (logindata) {
        var body = JSON.stringify(logindata.value);
        var headerOptions = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({ 'Content-Type': 'application/json' });
        var requestOptions = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["RequestOptions"]({ method: _angular_http__WEBPACK_IMPORTED_MODULE_3__["RequestMethod"].Post, headers: headerOptions });
        return this.http.post(this._organizationUrl + "organization/auth/login/", body, requestOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (x) { return x.json(); }));
    };
    AppService.prototype.createFest = function (members) {
        var loggedInValue = sessionStorage.getItem('currentUserId');
        var userName = (JSON.parse(loggedInValue)).email;
        var value = [];
        value.push({ 'userid': userName });
        var member = [];
        member.push(members.value);
        var finalValue = value.concat(member);
        var object = JSON.stringify(finalValue);
        var headerOptions = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({ 'Content-Type': 'application/json', 'Accept': 'application/json' });
        var requestOptions = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["RequestOptions"]({ method: _angular_http__WEBPACK_IMPORTED_MODULE_3__["RequestMethod"].Post, headers: headerOptions });
        return this.http.post(this._organizationUrl + "fest/create/", object, requestOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (x) { return x.json(); }));
    };
    AppService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/auth-guard.service.ts":
/*!***************************************!*\
  !*** ./src/app/auth-guard.service.ts ***!
  \***************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



//import { AuthService } from './auth.service';
var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(_router) {
        this._router = _router;
    }
    AuthGuardService.prototype.canActivate = function (route, state) {
        if (sessionStorage.getItem('userData')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this._router.navigate(['/home'], { queryParams: { returnUrl: state.url } });
        alert('Please login with right Credentials ');
        return false;
    };
    AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/authentication.service.ts":
/*!*******************************************!*\
  !*** ./src/app/authentication.service.ts ***!
  \*******************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularx-social-login */ "./node_modules/angularx-social-login/angularx-social-login.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http, _router, authServiceConfig) {
        this.http = http;
        this._router = _router;
        this.authServiceConfig = authServiceConfig;
        // private _organizationUrl = "http://www.festify.in:8000/api/";
        this._organizationUrl = "http://localhost:8000/api/";
        this.isClick = false;
    }
    AuthenticationService.prototype.updateOrganization = function (members) {
        var object = [];
        object = eval(members);
        var loggedInValue = sessionStorage.getItem('currentUserId');
        var userName = (JSON.parse(loggedInValue)).email;
        var loggedInUser = [];
        loggedInUser.push({ 'userid': userName });
        var fiinalvalue = [];
        fiinalvalue = loggedInUser.concat(object);
        var headerOptions = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({ 'Content-Type': 'application/json', 'Accept': 'application/json' });
        var requestOptions = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["RequestOptions"]({ method: _angular_http__WEBPACK_IMPORTED_MODULE_3__["RequestMethod"].Post, headers: headerOptions });
        return this.http.post(this._organizationUrl + "organization/update/", fiinalvalue, requestOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (x) { return x.json(); }));
    };
    AuthenticationService.prototype.updateFest = function (members) {
        var object = [];
        object = eval(members);
        var loggedInValue = sessionStorage.getItem('currentUserId');
        var userName = (JSON.parse(loggedInValue)).email;
        var loggedInUser = [];
        loggedInUser.push({ 'userid': userName });
        var fiinalvalue = [];
        fiinalvalue = loggedInUser.concat(object);
        var headerOptions = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({ 'Content-Type': 'application/json', 'Accept': 'application/json' });
        var requestOptions = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["RequestOptions"]({ method: _angular_http__WEBPACK_IMPORTED_MODULE_3__["RequestMethod"].Post, headers: headerOptions });
        return this.http.post(this._organizationUrl + "fest/update/", fiinalvalue, requestOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (x) { return x.json(); }));
    };
    AuthenticationService.prototype.deleteFest = function (id) {
        return this.http.delete(this._organizationUrl + "fest/delete/", { params: { festid: id } }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (x) { return x.json(); }));
    };
    AuthenticationService.prototype.logout = function () {
        sessionStorage.removeItem('currentUser');
        sessionStorage.removeItem('userData');
        sessionStorage.removeItem('currentUserId');
        this.orgExist = undefined;
        this.userExist = undefined;
        localStorage.clear();
        // alert("Successfully logout")
        this._router.navigate(['home']);
    };
    AuthenticationService.prototype.socialmediaLogOut = function () {
        this.authServiceConfig.signOut();
        sessionStorage.removeItem('currentUser');
        sessionStorage.removeItem('userData');
        sessionStorage.removeItem('currentUserId');
        this.orgExist = undefined;
        this.userExist = undefined;
        localStorage.clear();
        // alert("Successfully logout")
        this._router.navigate(['home']);
    };
    AuthenticationService.prototype.festDetails = function () {
        return this.http.get(this._organizationUrl + "fest/home/").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (x) { return x.json(); }));
    };
    AuthenticationService.prototype.userLogin = function (fiinalvalue) {
        var headerOptions = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({ 'Content-Type': 'application/json', 'Accept': 'application/json' });
        var requestOptions = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["RequestOptions"]({ method: _angular_http__WEBPACK_IMPORTED_MODULE_3__["RequestMethod"].Post, headers: headerOptions });
        return this.http.post(this._organizationUrl + "user/login/", fiinalvalue, requestOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (x) { return x.json(); }));
    };
    AuthenticationService.prototype.festSepecificDetails = function (id) {
        return this.http.get(this._organizationUrl + "fest/details/", { params: { festid: id } }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (x) { return x.json(); }));
    };
    AuthenticationService.prototype.getIP = function () {
        return this.http.get('https://jsonip.com').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (x) { return x.json(); }));
    };
    AuthenticationService.prototype.paymentDeatailsUser = function (finalvalue) {
        var ipData = JSON.parse(localStorage.getItem('ip'));
        var paymentRequireData = JSON.parse(localStorage.getItem('festPaymentDeatils'));
        var userLoginData = JSON.parse(sessionStorage.getItem('userData'));
        var user = {
            email: finalvalue.email,
            fest_id: localStorage.getItem('festID'),
            event_id: paymentRequireData.id,
            ticket_price: paymentRequireData.ticket_price,
            host: ipData.ip,
            mobile: finalvalue.mobile,
            firstname: finalvalue.firstName,
            lastname: finalvalue.lastName
        };
        var data = JSON.stringify(user);
        var headerOptions = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({ 'Content-Type': 'application/json', 'Accept': 'application/json' });
        var requestOptions = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["RequestOptions"]({ method: _angular_http__WEBPACK_IMPORTED_MODULE_3__["RequestMethod"].Post, headers: headerOptions });
        return this.http.post(this._organizationUrl + "payment/create/", data, requestOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (x) { return x.json(); }));
    };
    AuthenticationService.prototype.getLikesNo = function (festData, e) {
        var likeData = {};
        if (sessionStorage.getItem('userData')) {
            var element = document.getElementById(e.srcElement.id);
            if (element.className == 'blast') {
                element.className = 'heart';
                this.isClick = false;
            }
            else if (element.className == 'heart') {
                element.className = 'blast';
                this.isClick = true;
            }
            if (sessionStorage.getItem('userData')) {
                var email = JSON.parse(sessionStorage.getItem('userData')).email;
                likeData = {
                    email: email,
                    festData: festData,
                    like: this.isClick,
                };
            }
            var headerOptions = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({ 'Content-Type': 'application/json', 'Accept': 'application/json' });
            var requestOptions = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["RequestOptions"]({ method: _angular_http__WEBPACK_IMPORTED_MODULE_3__["RequestMethod"].Post, headers: headerOptions });
            this.http.post(this._organizationUrl + "fest/liked/", likeData, requestOptions).subscribe();
        }
        else {
            alert("Login to like");
        }
    };
    AuthenticationService.prototype.festDetailsWithspecific = function (id) {
        localStorage.setItem('festID', id);
        this._router.navigate(['/festDetails', id]);
    };
    AuthenticationService.prototype.getSuccessData = function () {
        return this.http.get(this._organizationUrl + "user/login/").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (x) { return x.json(); }));
    };
    AuthenticationService.prototype.getLikesBookedEvents = function () {
        var email;
        if (sessionStorage.getItem('userData')) {
            email = JSON.parse(sessionStorage.getItem('userData')).email;
        }
        else if (sessionStorage.getItem('currentUser')) {
            email = JSON.parse(sessionStorage.getItem('currentUser')).userid;
        }
        return this.http.get(this._organizationUrl + "user/dislike/", { params: { email: email } }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (x) { return x.json(); }));
    };
    AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], angularx_social_login__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/components/aftersuccess/aftersuccess.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/aftersuccess/aftersuccess.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-userheader></app-userheader>\n<div class=\"inner-ban\">\n    <img src=\"assets/images/inner-ban.jpg\" alt=\"\">\n</div>\n\n<div>\n</div>\n\n <section class=\"success\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-12 text-center\">\n                <h4 class=\"alert alert-success\"> Thank You {{firstName}} {{lastName}}  for booking ticket at festify for fest  {{festName}} event {{eventName}}. \n                    We have received Rs {{ticketPrice}} from you.</h4>\n                <h5 class=\"alert alert-success\">Your ticket has been sent to your email  {{email}}  and by SMS to {{phoneNo}}</h5>\n            </div>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "./src/app/components/aftersuccess/aftersuccess.component.sass":
/*!*********************************************************************!*\
  !*** ./src/app/components/aftersuccess/aftersuccess.component.sass ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWZ0ZXJzdWNjZXNzL2FmdGVyc3VjY2Vzcy5jb21wb25lbnQuc2FzcyJ9 */"

/***/ }),

/***/ "./src/app/components/aftersuccess/aftersuccess.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/aftersuccess/aftersuccess.component.ts ***!
  \*******************************************************************/
/*! exports provided: AftersuccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AftersuccessComponent", function() { return AftersuccessComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AftersuccessComponent = /** @class */ (function () {
    function AftersuccessComponent(route) {
        this.route = route;
        var url = window.location.href;
        var currentURL = url.split('&');
        this.firstName = currentURL[1];
        this.lastName = currentURL[2];
        this.email = currentURL[3];
        this.phoneNo = currentURL[4];
        this.festName = currentURL[5];
        this.eventName = currentURL[6];
        this.ticketPrice = currentURL[7];
        this.ticketId = currentURL[8];
    }
    AftersuccessComponent.prototype.ngOnInit = function () {
    };
    AftersuccessComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-aftersuccess',
            template: __webpack_require__(/*! ./aftersuccess.component.html */ "./src/app/components/aftersuccess/aftersuccess.component.html"),
            styles: [__webpack_require__(/*! ./aftersuccess.component.sass */ "./src/app/components/aftersuccess/aftersuccess.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], AftersuccessComponent);
    return AftersuccessComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-userheader></app-userheader>\n<div class=\"inner-ban\">\n    <img src=\"assets/images/inner-ban.jpg\" alt=\"\">\n</div>\n<section class=\"orgdashboard\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-12 text-center\">\n                <h2>dashboard</h2>\n            </div>\n            <div class=\"col-md-4\">\n                <div class=\"profile-sec\">\n                    <h3>your profile (Name)</h3>\n                    <img id=\"googleImg\" alt=\"\">\n                    <ul>\n                        <li>{{this.socialData.email}}</li>\n                        <li>{{this.socialData.firstName}}</li>\n                        <li>{{this.socialData.lastName}}</li>\n                        <!--<li><a href=\"#\">Edit</a></li>-->\n                    </ul>\n                </div>\n\n            </div>\n            <div class=\"col-md-8\">\n                <div class=\"profile-decp2\">\n                    <ul>\n                        <li class=\"active\"><a data-toggle=\"tab\" href=\"#pro-1\">Booked Tickets </a></li>\n                        <li><a data-toggle=\"tab\" href=\"#pro-2\">liked events</a></li>\n                    </ul>\n                    <div class=\"tab-content\">\n                        <div id=\"pro-1\" class=\"tab-pane fade in active\">\n                            <h3>your tickets</h3>\n                            <div *ngIf=\"bookedEvents\">\n                                <div *ngFor=\"let bookFest of bookedEvents\">\n                                    <div class=\"sec-1\">\n                                        <div class=\"col-md-3\">\n                                            <h2>event name</h2>\n                                            <h4>{{bookFest.name}} </h4>\n                                        </div>\n                                        <div class=\"col-md-3 text-center\">\n                                            <h2>Ticket Id </h2>\n                                            <h4>{{bookFest.ticket_id}}</h4>\n                                        </div>\n                                        <div class=\"col-md-3 text-right\">\n                                            <h2>date/time  </h2> <h4 >{{bookFest.booking_date}}  </h4>\n                                        </div>\n                                        <div class=\"col-md-3 text-right\">\n                                            <h2>price  </h2><h4 >{{bookFest.ticket_price}}</h4>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div id=\"pro-2\" class=\"tab-pane fade\">\n                            <h3>liked events</h3>\n                            <div *ngIf=\"likedFest\">\n                                <div *ngFor=\"let likeFest of likedFest\">\n                                    <div class=\"sec-1\">\n                                    <div class=\"col-md-4\">\n                                        <h2>Fest Name  </h2><h4>{{likeFest.name}} </h4>\n                                        </div>\n                                        <div class=\"col-md-4 text-right\">\n                                        <h2>Start Date  </h2> <h4> {{likeFest.date}}</h4>\n                                       </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n        </div>\n    </div>\n</section>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.sass":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.sass ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2FzcyJ9 */"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/authentication.service */ "./src/app/authentication.service.ts");



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(authenticationService) {
        var _this = this;
        this.authenticationService = authenticationService;
        this.authenticationService.getLikesBookedEvents().subscribe(function (data) {
            _this.bookedEvents = data.booked_events;
            _this.likedFest = data.liked_fests;
        });
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var data = sessionStorage.getItem('userData');
        this.socialData = JSON.parse(data);
        var imgae = document.getElementById("googleImg");
        imgae.setAttribute('src', this.socialData.photoUrl);
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.sass */ "./src/app/components/dashboard/dashboard.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/editfest/editfest.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/editfest/editfest.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-organizationheader></app-organizationheader>\n<div class=\"inner-ban\">\n    <img src=\"assets/images/inner-ban.jpg\" alt=\"\">\n</div>\n<div class=\"registraion-page\">\n    <div class=\"container\">\n        <div class=\"col-md-12 text-center\">\n            <h2>fest edit form</h2>\n        </div>\n        <div class=\"col-md-6\"></div>\n        <div class=\"col-md-6\"></div>\n        <div class=\"clearfix\"></div>\n        <form [formGroup]=\"festForm\" (ngSubmit)=\"onSubmitEditFest()\">\n            <div class=\"form-group\">\n                <div class=\"col-md-4\">\n                    <label>Name of Fest * </label>\n                </div>\n                <div class=\"col-md-8\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter Fest Name\" formControlName=\"name\" [ngClass]=\"{ 'is-invalid': submitted && e.name.errors }\" required />\n                    <div *ngIf=\"submitted && e.name.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"e.name.errors.required\">Name is required</div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"clearfix\"></div>\n            <div class=\"form-group\">\n                <div class=\"col-md-4\">\n                    <label>Display Picture * </label>\n                </div>\n                <div class=\"col-md-8\">\n                    <input type=\"file\" accept=\"image/x-png,image/gif,image/jpeg\" (change)=\"onChange($event)\" class=\"form-control\" name=\"image\" formControlName=\"image\" />\n                    <canvas width=\"300\" id=\"display\" height=\"300\" style=\"display: none;\"></canvas>\n\n                </div>\n            </div>\n            <div class=\"clearfix\"></div>\n            <div class=\"form-group\">\n                <div class=\"col-md-4\">\n                    <label>Date of Fest * </label>\n                </div>\n                <div class=\"col-md-3\">\n                    <input type=\"date\" class=\"form-control\" (keydown)=\"onKeydown($event)\" placeholder=\"\" formControlName=\"start_date\" [ngClass]=\"{ 'is-invalid': submitted && e.start_date.errors }\" required />\n                    <div *ngIf=\"submitted && e.start_date.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"e.start_date.errors.required\"> Start Date is Required</div>\n                    </div>\n                </div>\n                <div class=\"col-md-2 text-center\">\n                    <label>to * </label>\n                </div>\n                <div class=\"col-md-3\">\n                    <input type=\"date\" class=\"form-control\" (keydown)=\"onKeydown($event)\" placeholder=\"\" formControlName=\"end_date\" [ngClass]=\"{ 'is-invalid': submitted && e.end_date.errors }\" required />\n                    <div *ngIf=\"submitted && e.end_date.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"e.end_date.errors.required\"> End Date is Required</div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"clearfix\"></div>\n            <div class=\"form-group\">\n                <div class=\"col-md-4\">\n                    <label>Website (optional)</label>\n                </div>\n                <div class=\"col-md-8\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter Website\" formControlName=\"website\" />\n                </div>\n            </div>\n            <div class=\"clearfix\"></div>\n            <div class=\"form-group\">\n                <div class=\"col-md-4\">\n                    <label>Social Media Pages (optional)</label>\n                </div>\n                <div class=\"col-md-8\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter Media Link\" formControlName=\"social_media_pages\" />\n                </div>\n            </div>\n            <div class=\"clearfix\"></div>\n\n            <div class=\"col-md-12\">\n                <h5>add new field button</h5>\n            </div>\n            <div class=\"form-group\">\n                <div class=\"col-md-4\">\n                    <label for=\"\">Upload Promo Video (optional)</label>\n                </div>\n                <div class=\"col-md-8\">\n                    <input type=\"file\" accept=\"video/mp4,video/x-m4v,video/*\" (change)=\"onChange($event)\" class=\"form-control\" name=\"promo_video\" placeholder=\"Upload Video\" formControlName=\"promo_video\" />\n                    <canvas width=\"300\" height=\"300\" id=\"provideo\" style=\"display: none;\"></canvas>\n                </div>\n            </div>\n            <div class=\"clearfix\"></div>\n\n            <div class=\"form-group\">\n                <div class=\"col-md-4\">\n                    <label for=\"\">Upload thumbmail (optional)</label>\n                </div>\n                <div class=\"col-md-8\">\n                    <input type=\"file\" accept=\"image/x-png,image/gif,image/jpeg\" (change)=\"onChange($event)\" name=\"promo_video_thumbnail\" class=\"form-control\" placeholder=\"\" formControlName=\"promo_video_thumbnail\" />\n                    <canvas width=\"300\" height=\"300\" id=\"thumbmail\" style=\"display: none;\"></canvas>\n                </div>\n            </div>\n            <div class=\"clearfix\"></div>\n            <div class=\"form-group\" formArrayName=\"event\">\n                <div *ngFor=\"let ctrl of festForm.get('event').controls; let pointIndex=index\" [formGroupName]=\"pointIndex\">\n                    <div class=\"col-md-4\">\n                        <label>enter event , rules, tickt price *</label>\n                    </div>\n                    <div class=\"col-md-3\">\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Enter Event Name\" formControlName=\"eventName\" [ngClass]=\"{ 'is-invalid': submitted && e.eventName.errors }\" />\n                        <div *ngIf=\"submitted && e.eventName.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"e.eventName.errors.required\"> Event Name is required</div>\n                        </div>\n\n                    </div>\n                    <div class=\"col-md-3\">\n                        <input type=\"text\" class=\"form-control\" placeholder=\" Enter Event Rule\" formControlName=\"rule\" [ngClass]=\"{ 'is-invalid': submitted && e.rule.errors }\" />\n                        <div *ngIf=\"submitted && e.rule.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"e.rule.errors.required\"> Event Name is required</div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-2\">\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Enter Ticket Price \" formControlName=\"ticket_price\" [ngClass]=\"{ 'is-invalid': submitted && e.ticket_price.errors }\" />\n                        <div *ngIf=\"submitted && e.ticket_price.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"e.ticket_price.errors.required\"> Event Name is required</div>\n                        </div>\n                    </div>\n\n                </div>\n            </div>\n            <div class=\"clearfix\"></div>\n            <div class=\"form-group\" formArrayName=\"event_sponser\">\n                <div *ngFor=\"let ctrlspon of festForm.get('event_sponser').controls; let pointIndex=index ;\" [formGroupName]=\"pointIndex\">\n                \n                    <div class=\"col-md-4\">\n                        <label>Enter Sponsor Name, Picture,</label>\n                    </div>\n                    <div class=\"col-md-4\">\n                        <input type=\"text\" class=\"form-control\"  placeholder=\"Enter Event Sponser Name\" formControlName=\"evtSpnName\" />\n                        \n                    </div>\n                    <div class=\"col-md-4\" id=\"pic\">\n                      \n                        <input type=\"file\"  class=\"form-control\" name=\"picture\" (change)=\"onChange($event)\"  formControlName=\"picture\" />\n                        <canvas width=\"300\" height=\"300\" id={{pointIndex}} style=\"display: none;\"></canvas>\n                        \n                    </div>\n                    <div class=\"form-group\">\n                        <div class=\"col-md-4\">\n                            <label>Caption (optional)</label>\n                        </div>\n                        <div class=\"col-md-8\">\n                            <textarea name=\"caption\" formControlName=\"caption\"></textarea>\n                        </div>\n                    </div>\n                  <!--</div>-->\n                </div>\n            </div>\n            <div class=\"clearfix\"></div>\n            <div class=\"col-md-12\">\n                <h5>Fest Manager Details</h5>\n            </div>\n            <div class=\"form-group\">\n                <div class=\"col-md-4\">\n                    <label>Primary</label>\n                </div>\n                <div class=\"col-md-8\">\n                    <div class=\"col-md-2\">\n                        <label>Name * </label>\n                    </div>\n                    <div class=\"col-md-10\">\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Enter Manager Name\" formControlName=\"manager_name\" [ngClass]=\"{ 'is-invalid': submitted && e.manager_name.errors }\" required />\n                        <div *ngIf=\"submitted && e.manager_name.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"e.manager_name.errors.required\"> Manager Name is required</div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-2\">\n                        <label>Phone * </label>\n                    </div>\n                    <div class=\"col-md-10\">\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Enter Manager Phone\" formControlName=\"manager_phone\" [ngClass]=\"{ 'is-invalid': submitted && e.manager_phone.errors }\" required />\n                        <div *ngIf=\"submitted && e.manager_phone.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"e.manager_phone.errors.required\">Manager Mobileno is required</div>\n                        </div>\n\n                    </div>\n                    <div class=\"col-md-2\">\n                        <label>Email * </label>\n                    </div>\n                    <div class=\"col-md-10\">\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Enter Manager Email\" formControlName=\"manager_email\" [ngClass]=\"{ 'is-invalid': submitted && e.manager_email.errors }\" required />\n                        <div *ngIf=\"submitted && e.manager_email.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"e.manager_email.errors.required\">Email is required</div>\n                            <div *ngIf=\"e.manager_email.errors.email\">Email must be a valid email address</div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <div class=\"col-md-4\">\n                    <label>Secondary </label>\n                </div>\n                <div class=\"col-md-8\">\n                    <div class=\"col-md-2\">\n                        <label>Name * </label>\n                    </div>\n                    <div class=\"col-md-10\">\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Enter Secondary Manager Name\" formControlName=\"sec_manager_name\" [ngClass]=\"{ 'is-invalid': submitted && e.sec_manager_name.errors }\" required />\n                        <div *ngIf=\"submitted && e.sec_manager_name.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"e.sec_manager_name.errors.required\">Manager Name is required</div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-2\">\n                        <label>Phone * </label>\n                    </div>\n                    <div class=\"col-md-10\">\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Enter Secondary Manager Phone\" formControlName=\"sec_manager_phone\" [ngClass]=\"{ 'is-invalid': submitted && e.sec_manager_phone.errors }\" required />\n                        <div *ngIf=\"submitted && e.sec_manager_phone.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"e.sec_manager_phone.errors.required\">Manager Phone No is required</div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"clearfix\"></div>\n            <div class=\"col-md-12\">\n                <h5>account details of manager for payment</h5>\n            </div>\n\n            <div class=\"form-group\">\n                <div class=\"col-md-4\">\n                    <label>account holders name * </label>\n                </div>\n                <div class=\"col-md-8\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter Account Holder Name\" formControlName=\"account_holder_name\" [ngClass]=\"{ 'is-invalid': submitted && e.account_holder_name.errors }\" required />\n                    <div *ngIf=\"submitted && e.account_holder_name.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"e.account_holder_name.errors.required\">Account Holder Name is required</div>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"form-group\">\n                <div class=\"col-md-4\">\n                    <label>Account No * </label>\n                </div>\n                <div class=\"col-md-8\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter Account Number\" formControlName=\"account_number\" [ngClass]=\"{ 'is-invalid': submitted && e.account_number.errors }\" required />\n                    <div *ngIf=\"submitted && e.account_number.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"e.account_number.errors.required\">Account No is required</div>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"form-group\">\n                <div class=\"col-md-4\">\n                    <label>IFSC * </label>\n                </div>\n                <div class=\"col-md-8\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter IFSC Code\" formControlName=\"ifsc\" [ngClass]=\"{ 'is-invalid': submitted && e.ifsc.errors }\" required />\n                    <div *ngIf=\"submitted && e.ifsc.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"e.ifsc.errors.required\">IFSC is required</div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"clearfix\"></div>\n            <div class=\"form-group\">\n                <div class=\"col-md-12 tetx-center\">\n                    <button type=\"submit\">Submit</button>\n                    <button type=\"button\" (click)=\"cancelSave()\">Cancel</button>\n                </div>\n\n            </div>\n        </form>\n\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/editfest/editfest.component.sass":
/*!*************************************************************!*\
  !*** ./src/app/components/editfest/editfest.component.sass ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZWRpdGZlc3QvZWRpdGZlc3QuY29tcG9uZW50LnNhc3MifQ== */"

/***/ }),

/***/ "./src/app/components/editfest/editfest.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/editfest/editfest.component.ts ***!
  \***********************************************************/
/*! exports provided: EditfestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditfestComponent", function() { return EditfestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../authentication.service */ "./src/app/authentication.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var EditfestComponent = /** @class */ (function () {
    function EditfestComponent(authenticationService, router, formBuilder) {
        this.authenticationService = authenticationService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.can = 0;
    }
    EditfestComponent.prototype.ngOnInit = function () {
        var selectedFest = localStorage.getItem('festspecific');
        this.festEditData = JSON.parse(selectedFest);
        for (var item in this.festEditData) {
            if (this.festEditData[item] == null) {
                this.festEditData[item] = '';
            }
        }
        this.festForm = this.formBuilder.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.festEditData.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            start_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.festEditData.start_date, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            end_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.festEditData.end_date, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            website: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.festEditData.website),
            social_media_pages: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.festEditData.social_media_pages),
            promo_video: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            promo_video_thumbnail: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.festEditData.id),
            event: this.formBuilder.array([this.formBuilder.group({ id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''), eventName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]), rule: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]), ticket_price: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]) })]),
            manager_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.festEditData.manager_name, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            manager_phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.festEditData.manager_phone, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            manager_email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.festEditData.manager_email, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]),
            event_sponser: this.formBuilder.array([this.formBuilder.group({ id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''), evtSpnName: '', picture: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null), caption: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('') })]),
            sec_manager_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.festEditData.sec_manager_name, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            sec_manager_phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.festEditData.sec_manager_phone, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            account_holder_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.festEditData.account_holder_name, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            account_number: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.festEditData.account_number, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            ifsc: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.festEditData.IFSC, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
        });
        this.addEventPoint();
        this.addSponsorEventPoint();
    };
    Object.defineProperty(EditfestComponent.prototype, "e", {
        get: function () {
            return this.festForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    EditfestComponent.prototype.onChange = function (e) {
        switch (e.target.name) {
            case "image":
                var myCanvas = document.getElementById("display");
                break;
            case "promo_video":
                var myCanvas = document.getElementById("provideo");
                break;
            case "promo_video_thumbnail":
                var myCanvas = document.getElementById("thumbmail");
                break;
            case "picture":
                var myCanvas = document.getElementById(e.target.nextElementSibling.id.toString());
                break;
        }
        var ctx = myCanvas.getContext('2d');
        var img = new Image();
        img.onload = function () {
            myCanvas.width = img.width;
            myCanvas.height = img.height;
            ctx.drawImage(img, 0, 0);
        };
        img.src = URL.createObjectURL(e.target.files[0]);
        var dataURL = myCanvas.toDataURL('image/jpeg');
        dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
    };
    EditfestComponent.prototype.onSubmitEditFest = function () {
        var _this = this;
        if (this.festForm.status == "INVALID"
            || new Date(this.festForm.controls.start_date.value) > new Date(this.festForm.controls.end_date.value)) {
            alert('Please provide all the details correctly and start date value is less than end date');
            return;
        }
        var _loop_1 = function (item) {
            if (item == "image") {
                if (this_1.festForm.value[item] != null) {
                    myCanvas = document.getElementById("display");
                    var imageUrl = myCanvas.toDataURL('image/jpeg');
                    this_1.festForm.value[item] = imageUrl;
                }
                else if (this_1.festForm.value[item] == null) {
                    this_1.festForm.value[item] = this_1.festEditData.image;
                }
            }
            else if (item == "promo_video") {
                if (this_1.festForm.value[item] != null) {
                    myCanvas = document.getElementById("provideo");
                    var imageUrl = myCanvas.toDataURL('image/jpeg');
                    this_1.festForm.value[item] = imageUrl;
                }
                else if (this_1.festForm.value[item] == null) {
                    this_1.festForm.value[item] = this_1.festEditData.promo_video;
                }
            }
            else if (item == "promo_video_thumbnail") {
                if (this_1.festForm.value[item] != null) {
                    myCanvas = document.getElementById("thumbmail");
                    var imageUrl = myCanvas.toDataURL('image/jpeg');
                    this_1.festForm.value[item] = imageUrl;
                }
                else if (this_1.festForm.value[item] == null) {
                    this_1.festForm.value[item] = this_1.festEditData.promo_video_thumbnail;
                }
            }
            else if (item == "event_sponser") {
                var i_1 = 0;
                this_1.festForm.value[item].map(function (x) {
                    if (x.picture != null) {
                        var myCanvas = document.getElementById(i_1.toString());
                        var imageUrl = myCanvas.toDataURL('image/jpeg');
                        x.picture = imageUrl;
                    }
                    else if (x.picture == null) {
                        x.picture = _this.festEditData.sponsor[i_1].sponsor_picture;
                    }
                    i_1++;
                });
            }
        };
        var this_1 = this, myCanvas, myCanvas, myCanvas;
        for (var item in this.festForm.value) {
            _loop_1(item);
        }
        this.authenticationService.updateFest(this.festForm.value).subscribe(function (data) {
            if (data) {
                localStorage.removeItem('festspecific');
                _this.router.navigate(['orgdashboard']);
            }
        });
    };
    Object.defineProperty(EditfestComponent.prototype, "eventPoints", {
        get: function () {
            return this.festForm.get('event');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditfestComponent.prototype, "sponsorEventPoints", {
        get: function () {
            return this.festForm.get('event_sponser');
        },
        enumerable: true,
        configurable: true
    });
    EditfestComponent.prototype.addEventPoint = function () {
        for (var i = 0; i < this.festEditData.events.length; i++) {
            this.eventPoints.push(this.formBuilder.group({ id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.festEditData.events[i].id), eventName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.festEditData.events[i].event_name), rule: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.festEditData.events[i].event_rules), ticket_price: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.festEditData.events[i].ticket_price) }));
        }
        this.eventPoints.removeAt(0);
    };
    EditfestComponent.prototype.deleteEventPoint = function (index) {
        this.eventPoints.removeAt(index);
    };
    EditfestComponent.prototype.addSponsorEventPoint = function () {
        for (var i = 0; i < this.festEditData.sponsor.length; i++) {
            this.sponsorEventPoints.push(this.formBuilder.group({ id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.festEditData.sponsor[i].id), inputId: i, evtSpnName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.festEditData.sponsor[i].sponsor_name), picture: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null), caption: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.festEditData.sponsor[i].caption) }));
        }
        this.sponsorEventPoints.removeAt(0);
    };
    EditfestComponent.prototype.onKeyDown = function (e) {
        e.preventDefault();
    };
    EditfestComponent.prototype.cancelSave = function () {
        localStorage.removeItem('festspecific');
        this.router.navigate(['orgdashboard']);
    };
    EditfestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-editfest',
            template: __webpack_require__(/*! ./editfest.component.html */ "./src/app/components/editfest/editfest.component.html"),
            styles: [__webpack_require__(/*! ./editfest.component.sass */ "./src/app/components/editfest/editfest.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], EditfestComponent);
    return EditfestComponent;
}());



/***/ }),

/***/ "./src/app/components/editorgdashboard/editorgdashboard.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/editorgdashboard/editorgdashboard.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-organizationheader></app-organizationheader>\n<div class=\"inner-ban\">\n    <img src=\"assets/images/inner-ban.jpg\" alt=\"\">\n</div>\n<section class=\"registraion-page\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-12 text-center\">\n                <h2>your profile</h2>\n                <form #f=\"ngForm\" (ngSubmit)=\"onSubmitTemplateBased()\">\n                 <div *ngIf=\"editOrganizationList\">\n                    <div class=\"form-group\">\n                        <div class=\"col-md-4\">\n                            <label>Organization Name:</label>\n                        </div>\n                        <div class=\"col-md-8\">\n                            <input type=\"text\" [(ngModel)]=\"editOrganizationList.name\" name=\"name\" required>\n                        </div>\n                    </div>\n                    <div class=\"clearfix\"></div>\n                    <div class=\"form-group\">\n                        <div class=\"col-md-4\">\n                            <label>Website:</label>\n                        </div>\n                        <div class=\"col-md-8\">\n                            <input type=\"text\" [(ngModel)]=\"editOrganizationList.website\" name=\"website\" required>\n                        </div>\n                    </div>\n                    <div class=\"clearfix\"></div>\n                    <div class=\"form-group\">\n                        <div class=\"col-md-4\">\n                            <label>Address:</label>\n                        </div>\n                        <div class=\"col-md-8\">\n                            <textarea [(ngModel)]=\"editOrganizationList.address\" name=\"address\" required></textarea>\n                        </div>\n                    </div>\n                    <div class=\"clearfix\"></div>\n                    <div class=\"form-group\">\n                        <div class=\"col-md-12 tetx-center\">\n                            <button type=\"submit\" [disabled]=\"!f.valid\">Submit</button>\n                            <button type=\"button\" (click)=\"cancelSave()\">Cancel</button>\n                        </div>\n                    </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</section>\n\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/components/editorgdashboard/editorgdashboard.component.sass":
/*!*****************************************************************************!*\
  !*** ./src/app/components/editorgdashboard/editorgdashboard.component.sass ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZWRpdG9yZ2Rhc2hib2FyZC9lZGl0b3JnZGFzaGJvYXJkLmNvbXBvbmVudC5zYXNzIn0= */"

/***/ }),

/***/ "./src/app/components/editorgdashboard/editorgdashboard.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/editorgdashboard/editorgdashboard.component.ts ***!
  \***************************************************************************/
/*! exports provided: EditorgdashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorgdashboardComponent", function() { return EditorgdashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../authentication.service */ "./src/app/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var EditorgdashboardComponent = /** @class */ (function () {
    function EditorgdashboardComponent(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
    }
    EditorgdashboardComponent.prototype.ngOnInit = function () {
        var editOrganizationList = localStorage.getItem('organization');
        this.editOrganizationList = JSON.parse(editOrganizationList);
    };
    EditorgdashboardComponent.prototype.cancelSave = function () {
        this.router.navigate(['orgdashboard']);
    };
    EditorgdashboardComponent.prototype.onSubmitTemplateBased = function () {
        var _this = this;
        console.log(this.editOrganizationList);
        this.authenticationService.updateOrganization(this.editOrganizationList).subscribe(function (data) {
            if (data) {
                alert("data updated successfull");
                _this.router.navigate(['orgdashboard']);
            }
            else {
                alert("data updated unsuccessfull");
            }
        });
    };
    EditorgdashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-editorgdashboard',
            template: __webpack_require__(/*! ./editorgdashboard.component.html */ "./src/app/components/editorgdashboard/editorgdashboard.component.html"),
            styles: [__webpack_require__(/*! ./editorgdashboard.component.sass */ "./src/app/components/editorgdashboard/editorgdashboard.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], EditorgdashboardComponent);
    return EditorgdashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/failure/failure.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/failure/failure.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"orgdashboard\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-12 text-center\">\n                <h2>Success</h2>\n            </div>\n\n            <div class=\"col-md-8\">\n                <div class=\"profile-decp\">\n                   <h2>transaction failed</h2>\n                   <p>You will be redirected to a new page in 5 seconds</p>\n\n                </div>\n            </div>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "./src/app/components/failure/failure.component.sass":
/*!***********************************************************!*\
  !*** ./src/app/components/failure/failure.component.sass ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZmFpbHVyZS9mYWlsdXJlLmNvbXBvbmVudC5zYXNzIn0= */"

/***/ }),

/***/ "./src/app/components/failure/failure.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/failure/failure.component.ts ***!
  \*********************************************************/
/*! exports provided: FailureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FailureComponent", function() { return FailureComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FailureComponent = /** @class */ (function () {
    function FailureComponent() {
    }
    FailureComponent.prototype.ngOnInit = function () {
    };
    FailureComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-failure',
            template: __webpack_require__(/*! ./failure.component.html */ "./src/app/components/failure/failure.component.html"),
            styles: [__webpack_require__(/*! ./failure.component.sass */ "./src/app/components/failure/failure.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FailureComponent);
    return FailureComponent;
}());



/***/ }),

/***/ "./src/app/components/fest-upload-form/fest-upload-form.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/fest-upload-form/fest-upload-form.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-organizationheader></app-organizationheader>\n<div class=\"inner-ban\">\n    <img src=\"assets/images/inner-ban.jpg\" alt=\"\">\n</div>\n<div class=\"registraion-page\">\n    <div class=\"container\">\n        <div class=\"col-md-12 text-center\">\n            <h2>upload your fest</h2>\n        </div>\n        <div class=\"col-md-6\"></div>\n        <div class=\"col-md-6\"></div>\n        <div class=\"clearfix\"></div>\n        <form [formGroup]=\"festForm\" (ngSubmit)=\"onFestSubmit()\">\n                <div class=\"form-group\">\n                        <div class=\"col-md-4\">\n                            <label>Fest Type</label>\n                        </div>\n                        <div class=\"col-md-8\">\n                            <select placeholder=\"Select Fest Type\" formControlName=\"fest_type\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && e.fest_type.errors }\" required>\n                                <option value=\"\" disabled selected hidden>Select Fest Type</option>\n                                <option value=\"Annual\">Annual</option>\n                                <option value=\"Cultural\">Cultural</option>\n                                <option value=\"Commerce\">Commerce</option>\n                                <option value=\"Tech\">Tech</option>\n                                <option value=\"Dance\">Dance</option>\n                                <option value=\"Conference\">Conference</option>\n                                <option value=\"Entrepreneurship\">Entrepreneurship</option>\n                                <option value=\"Literary\">Literary</option>\n                                <option value=\"Media\">Media</option>\n                                <option value=\"Mun\">Mun</option>\n                            </select>\n                            <div *ngIf=\"submitted && e.fest_type.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"e.fest_type.errors.required\" class=\"alert alert-danger\">Fest type is required</div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"clearfix\"></div>\n            <div class=\"form-group\">\n                <div class=\"col-md-4\">\n                    <label>Name of Fest *</label>\n                </div>\n                <div class=\"col-md-8\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter Fest Name\" formControlName=\"name\" [ngClass]=\"{ 'is-invalid': submitted && e.name.errors }\"/>\n                    <div *ngIf=\"submitted && e.name.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"e.name.errors.required\" class=\"alert alert-danger\">Name is required</div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"clearfix\"></div>\n            <div class=\"form-group\">\n                <div class=\"col-md-4\">\n                    <label>Display Picture * </label>\n                </div>\n                <div class=\"col-md-8\">\n                <!-- <div class=\"fileUpload btn btn-default col-md-8\"> \n                    <span>Choose/Drag file</span>                           -->\n                    <input type=\"file\" accept=\"image/x-png,image/gif,image/jpeg\" (change)=\"onChange($event)\" class=\"form-control upload\"\n                        name=\"image\" formControlName=\"image\" [ngClass]=\"{ 'is-invalid': submitted && e.image.errors }\"\n                        required />                   \n                    <canvas width=\"300\" id=\"display\" height=\"300\" style=\"display: none;\"></canvas>\n                    <div *ngIf=\"submitted && e.image.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"e.image.errors.required\" class=\"alert alert-danger\">Fest Pic Upload is Required</div>\n                    </div>\n                </div>\n            </div>           \n            <div class=\"clearfix\"></div>\n            \n            <div class=\"form-group\">\n                <div class=\"col-md-4\">\n                    <label>Description *</label>\n                </div>\n                <div class=\"col-md-8\">\n                    <textarea rows=\"5\" class=\"form-control\" placeholder=\"Enter Description\" formControlName=\"description\"\n                        [ngClass]=\"{ 'is-invalid': submitted && e.description.errors }\" required ></textarea>\n                    <div *ngIf=\"submitted && e.description.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"e.description.errors.required\" class=\"alert alert-danger\">Description is required</div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"clearfix\"></div>\n            <div class=\"form-group\">\n                <div class=\"col-md-4\">\n                    <label>Date of Fest * </label>\n                </div>\n                <!-- <div class=\"col-md-3\">\n                    <input type=\"date\" class=\"form-control\" (keydown)=\"onKeydown($event)\" placeholder=\"\"\n                        formControlName=\"start_date\" [ngClass]=\"{ 'is-invalid': submitted && e.start_date.errors }\"\n                        required />\n                    <div *ngIf=\"submitted && e.start_date.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"e.start_date.errors.required\" class=\"alert alert-danger\"> Start Date is Required</div>\n                    </div>\n                </div> -->\n                <div class=\"col-md-3\">\n                    <input type=\"text\" class=\"form-control\" (keydown)=\"onKeydown($event)\" placeholder=\"Enter Date\" [(ngModel)]=\"model\" bsDatepicker [bsConfig]=\"bsConfig\"\n                        formControlName=\"start_date\" [ngClass]=\"{ 'is-invalid': submitted && e.start_date.errors }\"\n                        required />\n                    <div *ngIf=\"submitted && e.start_date.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"e.start_date.errors.required\" class=\"alert alert-danger\"> Start Date is Required</div>\n                    </div>\n                </div>\n                <div class=\"col-md-2 text-center\">\n                    <label>to * </label>\n                </div>\n                <div class=\"col-md-3\">\n                    <input type=\"text\" class=\"form-control\" (keydown)=\"onKeydown($event)\" placeholder=\"Enter Date\" [(ngModel)]=\"model\" bsDatepicker [bsConfig]=\"bsConfig\"\n                        formControlName=\"end_date\" [ngClass]=\"{ 'is-invalid': submitted && e.end_date.errors }\"\n                        required />\n                    <div *ngIf=\"submitted && e.end_date.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"e.end_date.errors.required\" class=\"alert alert-danger\"> End Date is Required</div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"clearfix\"></div>\n            <div class=\"form-group\">\n                <div class=\"col-md-4\">\n                    <label>Website (optional)</label>\n                </div>\n                <div class=\"col-md-8\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter Website\" formControlName=\"website\" />\n                </div>\n            </div>\n            <div class=\"clearfix\"></div>\n            <div class=\"form-group\">\n                <div class=\"col-md-4\">\n                    <label>Social Media Pages (optional)</label>\n                </div>\n                <div class=\"col-md-8\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter Media Link\" formControlName=\"social_media_pages\" />\n                </div>\n            </div>\n            <div class=\"clearfix\"></div>\n            <div class=\"form-group\">\n                <div class=\"col-md-4\">\n                    <label for=\"\">Upload Promo Video (optional)</label>\n                </div>\n                <div class=\"col-md-8\">\n                    <input type=\"file\" accept=\"video/mp4,video/x-m4v,video/*\" (change)=\"onChange($event)\" class=\"form-control\"\n                        name=\"promo_video\" placeholder=\"Upload Video\" formControlName=\"promo_video\" />\n                    <canvas width=\"300\" height=\"300\" id=\"provideo\" style=\"display: none;\"></canvas>\n                </div>\n            </div>\n            <div class=\"clearfix\"></div>\n            <div class=\"form-group\">\n                <div class=\"col-md-4\">\n                    <label for=\"\">Upload thumbnail (optional)</label>\n                </div>\n                <div class=\"col-md-8\">\n                    <input type=\"file\" accept=\"image/x-png,image/gif,image/jpeg\" (change)=\"onChange($event)\" name=\"promo_video_thumbnail\"\n                        class=\"form-control\" placeholder=\"\" formControlName=\"promo_video_thumbnail\" />\n                    <canvas width=\"300\" height=\"300\" id=\"thumbmail\" style=\"display: none;\"></canvas>\n                </div>\n            </div>\n            <div class=\"clearfix\"></div>\n            <div class=\"col-md-12\">\n                <h5>Events</h5>\n            </div>\n\n            <div class=\"form-group\" formArrayName=\"event\">\n                <div *ngFor=\"let ctrl of festForm.get('event').controls; let pointIndex=index\" [formGroupName]=\"pointIndex\">\n                    <div class=\"col-md-2 \" *ngIf=\"pointIndex>0\">\n                            <button class=\"eve\" type=\"button\" (click)=\"deleteEventPoint(pointIndex)\">-Remove Event</button>\n                            <h4> <span></span><span></span></h4>\n                            <hr>\n                    </div>\n                    <div class=\"col-md-12\">\n                            \n                                <div class=\"col-md-2\">\n                                    <label>Enter event details *</label>\n                                </div>\n                                \n                                <div class=\"col-md-2\">\n                                    <select placeholder=\"Select Event Type\" formControlName=\"event_type\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && e.event_type?.errors }\" required>\n                                        <option value=\"\" disabled selected hidden>Select Event Type</option>\n                                        <option value=\"Music\">Music</option>\n                                        <option value=\"Dance'\">Dance</option>\n                                        <option value=\"Theater\">Theater</option>\n                                        <option value=\"Mad Ads\">Mad Ads</option>\n                                        <option value=\"Debate\">Debate</option>\n                                        <option value=\"Hackathon\">Hackathon</option>\n                                        <option value=\"Ted Talk\">Ted Talk</option>\n                                        <option value=\"Quiz\">Quiz</option>\n                                        <option value=\"Treasure Hunt\">Treasure Hunt</option>\n                                        <option value=\"Literary\">Literary</option>\n                                        <option value=\"Art and Craft\">Art and Craft</option>\n                                        <option value=\"Cooking\">Cooking</option>\n                                        <option value=\"Conference\">Conference</option>\n                                        <option value=\"Fashion\">Fashion</option>\n                                        <option value=\"Singing\">Singing</option>\n                                        <option value=\"Entrepreneurship\">Entrepreneurship</option>\n                                        <option value=\"Coding\">Coding</option>\n                                        <option value=\"Photography\">Photography</option>\n                                        <option value=\"Air Crash\">Air Crash</option>\n                                        <option value=\"Personality\">Personality</option>\n                                        <option value=\"Commerce\">Commerce</option>\n                                        <option value=\"Gaming\">Gaming</option>\n                                        <option value=\"Other\">Other</option>\n                                    </select>\n                                    <div *ngIf=\"submitted && e.event_type?.errors\" class=\"invalid-feedback\">\n                                        <div *ngIf=\"e.event_type?.errors.required\" class=\"alert alert-danger\">Event type is required</div>\n                                    </div>\n                                </div>                    \n                                <div class=\"col-md-2\">\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter Event Name\" formControlName=\"eventName\"\n                                        [ngClass]=\"{ 'is-invalid': submitted && e.eventName?.errors }\" />\n                                    <div *ngIf=\"submitted && e.eventName?.errors\" class=\"invalid-feedback\">\n                                        <div *ngIf=\"e.eventName?.errors.required\" class=\"alert alert-danger\"> Event Name is required</div>\n                                    </div>\n\n                                </div>\n                                <div class=\"col-md-2\">\n                                        <input type=\"text\" class=\"form-control\" style=\"line-height: 1.4em;\" (keydown)=\"onKeydown($event)\"  placeholder=\"Enter Date\" formControlName=\"event_date\"  [(ngModel)]=\"model\" bsDatepicker [bsConfig]=\"bsConfig\"\n                                            [ngClass]=\"{ 'is-invalid': submitted && e.event_date?.errors }\" required/>\n                                        <div *ngIf=\"submitted && e.event_date?.errors\" class=\"invalid-feedback\">\n                                            <div *ngIf=\"e.event_date?.errors.required\" class=\"alert alert-danger\"> Event Date is required</div>\n                                        </div>\n                                </div>\n                                <div class=\"col-md-2\">\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"Enter Time\" formControlName=\"event_time\"\n                                            [ngClass]=\"{ 'is-invalid': submitted && e.event_time?.errors }\" />\n                                            <!-- <timepicker [formControlName]=\"event_time\"></timepicker> -->\n                                        <div *ngIf=\"submitted && e.event_time?.errors\" class=\"invalid-feedback\">\n                                            <div *ngIf=\"e.event_time?.errors.required\" class=\"alert alert-danger\"> Event Time is required</div>\n                                        </div>\n                                </div>\n                                <div class=\"col-md-2\">\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter Ticket Price \" formControlName=\"ticket_price\"\n                                        [ngClass]=\"{ 'is-invalid': submitted && e.ticket_price?.errors }\" />\n                                    <div *ngIf=\"submitted && e.ticket_price?.errors\" class=\"invalid-feedback\">\n                                        <div *ngIf=\"e.ticket_price?.errors.required\" class=\"alert alert-danger\"> Event Price is required</div>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-8 col-xs-12 pull-right\">\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter Coordinator's name and phone number\" formControlName=\"event_coordinator\"\n                                        [ngClass]=\"{ 'is-invalid': submitted && e.event_coordinator?.errors }\" />\n                                    <div *ngIf=\"submitted && e.event_coordinator?.errors\" class=\"invalid-feedback\">\n                                        <div *ngIf=\"e.event_coordinator?.errors.required\" class=\"alert alert-danger\"> Event Coordinator's name is required</div>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-8 col-xs-12 pull-right\">\n                                <textarea rows=\"5\" class=\"form-control\" placeholder=\"Enter Description and Rules\" formControlName=\"event_description\"\n                                    [ngClass]=\"{ 'is-invalid': submitted && e.event_description?.errors }\" ></textarea>\n                                <div *ngIf=\"submitted && e.event_description?.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"e.event_description?.errors.required\" class=\"alert alert-danger\"> Event Description is required</div>\n                                </div>\n                                </div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <div class=\"col-md-2\">\n                                            <button class=\"eve\" type=\"button\" (click)=\"addEventPoint()\">+Add Event</button>\n                                    </div>                                \n                                </div>\n                </div>\n            </div>\n                    \n                    \n                    \n\n                    \n                    \n                    <!-- <div class=\"col-md-6\">\n                            <input type=\"text\" class=\"form-control\" placeholder=\" Enter Event Rules\" formControlName=\"rule\"\n                                [ngClass]=\"{ 'is-invalid': submitted && e.rule.errors }\" />\n                            <div *ngIf=\"submitted && e.rule.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"e.rule.errors.required\"> Event Rule is required</div>\n                            </div>\n                        </div> -->\n                    \n                    \n                    \n                    \n\n            \n            <div class=\"clearfix\"></div>\n            <div class=\"col-md-12\">\n                <h5>Sponsors</h5>\n            </div>\n            <div class=\"form-group\" formArrayName=\"event_sponser\" style=\"padding:0 15px;\">\n                <div *ngFor=\"let ctrlspon of festForm.get('event_sponser').controls; let pointIndex=index\" [formGroupName]=\"pointIndex\">\n                    <div class=\"row\">\n                        <div class=\"col-md-4\">\n                            <label>Enter Sponsor Name and Picture</label>\n                        </div>\n                        \n                        \n                        <div class=\"col-md-4\">\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Enter Event Sponser Name\" formControlName=\"evtSpnName\" />\n                            <canvas width=\"300\" height=\"300\" id={{pointIndex}} style=\"display: none;\"></canvas>\n                        </div>\n                        <div class=\"col-md-4\" id=\"pic\">\n                            <input type=\"file\" class=\"form-control\" name=\"picture\" (change)=\"onChange($event)\" placeholder=\"\"\n                                formControlName=\"picture\" />\n                        </div>\n                    </div>\n                    <div class=\"row\">         \n                        <div class=\"col-md-4\">\n                                        <label>Caption (optional)</label>\n                        </div>\n                        \n                        <div class=\"col-md-8\">\n                                <input type=\"text\" class=\"form-control\" name=\"caption\" formControlName=\"caption\"/>\n                        </div>\n                    </div>\n                    <div class=\"row\"> \n                    <div class=\"col-md-2\">\n                            <button class=\"eve\" type=\"button\" (click)=\"addSponsorEventPoint()\">+Add Sponsor </button>\n                    </div>\n                    <div class=\"col-md-2\">\n                            <button class=\"eve\" type=\"button\" *ngIf=\"pointIndex>0\" (click)=\"deleteSponsorEventPoint(pointIndex)\">-Remove</button>\n                    </div>\n                    </div>\n                \n                </div>\n            </div>\n\n\n            <div class=\"clearfix\"></div>\n            <div class=\"col-md-12\">\n                <h5>Fest Manager</h5>\n            </div>\n            <div class=\"form-group\">\n                <div class=\"col-md-4\">\n                    <label>Primary</label>\n                </div>\n                <div class=\"col-md-8\">\n                    <div class=\"col-md-2\">\n                        <label>Name * </label>\n                    </div>\n                    <div class=\"col-md-10\">\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Enter Manager Name\" formControlName=\"manager_name\"\n                            [ngClass]=\"{ 'is-invalid': submitted && e.manager_name.errors }\" required />\n                        <div *ngIf=\"submitted && e.manager_name.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"e.manager_name.errors.required\" class=\"alert alert-danger\"> Manager Name is required</div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-2\">\n                        <label>Phone * </label>\n                    </div>\n                    <div class=\"col-md-10\">\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Enter Manager Phone\" formControlName=\"manager_phone\"\n                            [ngClass]=\"{ 'is-invalid': submitted && e.manager_phone.errors }\" required />\n                        <div *ngIf=\"submitted && e.manager_phone.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"e.manager_phone.errors.required\" class=\"alert alert-danger\">Manager Mobile No. is required</div>\n                        </div>\n\n                    </div>\n                    <div class=\"col-md-2\">\n                        <label>Email * </label>\n                    </div>\n                    <div class=\"col-md-10\">\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Enter Manager Email\" formControlName=\"manager_email\"\n                            [ngClass]=\"{ 'is-invalid': submitted && e.manager_email.errors }\" required />\n                        <div *ngIf=\"submitted && e.manager_email.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"e.manager_email.errors.required\" class=\"alert alert-danger\">Email is required</div>\n                            <div *ngIf=\"e.manager_email.errors.email\" class=\"alert alert-danger\">Email must be a valid email address</div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <div class=\"col-md-4\">\n                    <label>Secondary </label>\n                </div>\n                <div class=\"col-md-8\">\n                    <div class=\"col-md-2\">\n                        <label>Name * </label>\n                    </div>\n                    <div class=\"col-md-10\">\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Enter Secondary Manager Name\"\n                            formControlName=\"sec_manager_name\" [ngClass]=\"{ 'is-invalid': submitted && e.sec_manager_name.errors }\"\n                            required />\n                        <div *ngIf=\"submitted && e.sec_manager_name.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"e.sec_manager_name.errors.required\" class=\"alert alert-danger\">Manager Name is required</div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-2\">\n                        <label>Phone * </label>\n                    </div>\n                    <div class=\"col-md-10\">\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Enter Secondary Manager Phone\"\n                            formControlName=\"sec_manager_phone\" [ngClass]=\"{ 'is-invalid': submitted && e.sec_manager_phone.errors }\"\n                            required />\n                        <div *ngIf=\"submitted && e.sec_manager_phone.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"e.sec_manager_phone.errors.required\" class=\"alert alert-danger\">Manager Phone No. is required</div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"clearfix\"></div>\n            <div class=\"col-md-12\">\n                <h5>account details of manager</h5>\n            </div>\n\n            <div class=\"form-group\">\n                <div class=\"col-md-4\">\n                    <label>account holders name * </label>\n                </div>\n                <div class=\"col-md-8\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter Account Holder Name\" formControlName=\"account_holder_name\"\n                        [ngClass]=\"{ 'is-invalid': submitted && e.account_holder_name.errors }\" required />\n                    <div *ngIf=\"submitted && e.account_holder_name.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"e.account_holder_name.errors.required\" class=\"alert alert-danger\">Account Holder Name is required</div>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"form-group\">\n                <div class=\"col-md-4\">\n                    <label>Account No * </label>\n                </div>\n                <div class=\"col-md-8\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter Account Number\" formControlName=\"account_number\"\n                        [ngClass]=\"{ 'is-invalid': submitted && e.account_number.errors }\" required />\n                    <div *ngIf=\"submitted && e.account_number.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"e.account_number.errors.required\" class=\"alert alert-danger\">Account No. is required</div>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"form-group\">\n                <div class=\"col-md-4\">\n                    <label>IFSC * </label>\n                </div>\n                <div class=\"col-md-8\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter IFSC Code\" formControlName=\"ifsc\"\n                        [ngClass]=\"{ 'is-invalid': submitted && e.ifsc.errors }\" required />\n                    <div *ngIf=\"submitted && e.ifsc.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"e.ifsc.errors.required\" class=\"alert alert-danger\">IFSC is required</div>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"clearfix\"></div>\n            <div class=\"col-md-12\">\n                <h5>confirm account details</h5>\n            </div>\n\n            <div class=\"form-group\">\n                <div class=\"col-md-4\">\n                    <label>Account No * </label>\n                </div>\n                <div class=\"col-md-8\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter Confirm Account No\" formControlName=\"confirm_account\"\n                        [ngClass]=\"{ 'is-invalid': submitted && e.confirm_account.errors }\" required />\n                    <div *ngIf=\"submitted && e.confirm_account.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"e.confirm_account.errors.required\" class=\"alert alert-danger\">Account No is required</div>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"form-group\">\n                <div class=\"col-md-4\">\n                    <label>IFSC * </label>\n                </div>\n                <div class=\"col-md-8\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter Confirm IFSC Code\" formControlName=\"confirm_ifsc\"\n                        [ngClass]=\"{ 'is-invalid': submitted && e.confirm_ifsc.errors }\" required />\n                    <div *ngIf=\"submitted && e.confirm_ifsc.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"e.confirm_ifsc.errors.required\" class=\"alert alert-danger\">Account No is required</div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <div class=\"col-md-12\">\n                    <p>I have read and agreed to the <a href=\"#\">terms & conditions</a>\n                        <input class=\"form-control\" type=\"checkbox\" formControlName=\"checkbox\" [ngClass]=\"{ 'is-invalid': submitted && e.checkbox.errors }\"\n                            required>\n                    </p>\n                    <div *ngIf=\"submitted && e.checkbox.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"e.checkbox.errors.required\" class=\"alert alert-danger\">Please Click on Checkbox</div>\n                    </div>\n                    <!--<div *ngIf=\"checkbox?.errors.required\" class=\"invalid-feedback\">Please Click on Checkbox</div>-->\n\n                </div>\n                <div class=\"col-md-8\">\n                    <re-captcha formControlName=\"recaptchaReactive\" required></re-captcha>\n                    <div *ngIf=\"recaptchaReactive?.errors.required\" class=\"invalid-feedback\" class=\"alert alert-danger\">Please Check Capcha</div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <div class=\"col-md-12 text-center\">\n                    <button [disabled]=\"loading\" class=\"btn btn-primary\">submit</button>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/fest-upload-form/fest-upload-form.component.sass":
/*!*****************************************************************************!*\
  !*** ./src/app/components/fest-upload-form/fest-upload-form.component.sass ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZmVzdC11cGxvYWQtZm9ybS9mZXN0LXVwbG9hZC1mb3JtLmNvbXBvbmVudC5zYXNzIn0= */"

/***/ }),

/***/ "./src/app/components/fest-upload-form/fest-upload-form.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/fest-upload-form/fest-upload-form.component.ts ***!
  \***************************************************************************/
/*! exports provided: FestUploadFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FestUploadFormComponent", function() { return FestUploadFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm5/ngx-bootstrap-datepicker.js");






var FestUploadFormComponent = /** @class */ (function () {
    function FestUploadFormComponent(formBuilder, appService, router) {
        this.formBuilder = formBuilder;
        this.appService = appService;
        this.router = router;
        this.submitted = false;
        this.bsConfig = new ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_5__["BsDatepickerConfig"]();
        this.bsConfig.containerClass = 'theme-red';
    }
    FestUploadFormComponent.prototype.ngOnInit = function () {
        this.festForm = this.formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            image: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            fest_type: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            start_date: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            end_date: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            website: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            social_media_pages: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            promo_video: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            promo_video_thumbnail: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            event: this.formBuilder.array([this.formBuilder.group({ eventName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]), ticket_price: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]], event_description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]], event_coordinator: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]], event_date: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]], event_time: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]], event_type: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]] })]),
            manager_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            manager_phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            manager_email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            event_sponser: this.formBuilder.array([this.formBuilder.group({ evtSpnName: '', picture: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null), caption: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('') })]),
            sec_manager_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            sec_manager_phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            account_holder_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            account_number: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            ifsc: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            confirm_account: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            confirm_ifsc: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            checkbox: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            recaptchaReactive: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
    };
    Object.defineProperty(FestUploadFormComponent.prototype, "e", {
        get: function () {
            return this.festForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    FestUploadFormComponent.prototype.onFestSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.festForm.invalid
            || this.festForm.controls.account_number == this.festForm.controls.confirm_account
            || this.festForm.controls.ifsc == this.festForm.controls.confirm_ifsc
            || new Date(this.festForm.controls.start_date.value) > new Date(this.festForm.controls.end_date.value)) {
            // alert('Please provide all the details correctly and check the checkbox');
            return;
        }
        for (var item in this.festForm.value) {
            if (item == "image") {
                if (this.festForm.value[item] != null) {
                    var myCanvas = document.getElementById("display");
                    var imageUrl = myCanvas.toDataURL('image/jpeg');
                    this.festForm.value[item] = imageUrl;
                }
            }
            else if (item == "promo_video") {
                if (this.festForm.value[item] != null) {
                    var myCanvas = document.getElementById("provideo");
                    var imageUrl = myCanvas.toDataURL('image/jpeg');
                    this.festForm.value[item] = imageUrl;
                }
            }
            else if (item == "promo_video_thumbnail") {
                if (this.festForm.value[item] != null) {
                    var myCanvas = document.getElementById("thumbmail");
                    var imageUrl = myCanvas.toDataURL('image/jpeg');
                    this.festForm.value[item] = imageUrl;
                }
            }
            else if (item == "event_sponser") {
                // for (let pic in this.festForm.value[item]) {
                this.festForm.value[item].map(function (x) {
                    if (x.picture != null) {
                        var id = 0;
                        if (id <= _this.sponsorEventPoints.length - 1) {
                            var myCanvas = document.getElementById(id.toString());
                            var imageUrl = myCanvas.toDataURL('image/jpeg');
                            x.picture = imageUrl;
                            id++;
                        }
                    }
                });
                // }
            }
        }
        this.appService.createFest(this.festForm)
            .subscribe(function (data) {
            if (data == undefined) {
                _this.router.navigate(['home']);
            }
            else {
                // alert('Registration Successful');
                _this.router.navigate(['organization-dashboard']);
                _this.festForm.reset();
            }
        });
        //this.festFormData.push()
    };
    // createForm() {
    //   this.festForm = this.formBuilder.group({
    //     name: new FormControl('', [Validators.required]),
    //     image: new FormControl(null, [Validators.required]),
    //     fest_type: ['', [Validators.required]],
    //     description: new FormControl(null, [Validators.required]),
    //     start_date: new FormControl(Date, [Validators.required]),
    //     end_date: new FormControl(Date, [Validators.required]),
    //     website: new FormControl(null),
    //     social_media_pages: new FormControl(null),
    //     promo_video: new FormControl(null),
    //     promo_video_thumbnail: new FormControl(null),
    //     event: this.formBuilder.array([this.formBuilder.group({eventName: new FormControl('', [Validators.required]), 
    //     ticket_price: new FormControl('', [Validators.required]), 
    //     event_description: new FormControl('', [Validators.required]), 
    //     event_coordinator: new FormControl('', [Validators.required]), 
    //     event_date: new FormControl('', [Validators.required]), 
    //     event_time: new FormControl('', [Validators.required]), 
    //     event_type: ['', [Validators.required]] })]),
    //     manager_name: new FormControl('', [Validators.required]),
    //     manager_phone: new FormControl('', [Validators.required]),
    //     manager_email: new FormControl('', [Validators.required, Validators.email]),
    //     event_sponser: this.formBuilder.array([this.formBuilder.group({ evtSpnName: '', picture: new FormControl(null), caption: new FormControl('') })]),
    //     sec_manager_name: new FormControl('', [Validators.required]),
    //     sec_manager_phone: new FormControl('', [Validators.required]),
    //     account_holder_name: new FormControl('', [Validators.required]),
    //     account_number: new FormControl('', [Validators.required]),
    //     ifsc: new FormControl('', [Validators.required]),
    //     confirm_account: new FormControl('', [Validators.required]),
    //     confirm_ifsc: new FormControl('', [Validators.required]),
    //     checkbox: new FormControl(null, [Validators.required]),
    //     recaptchaReactive: new FormControl(null, [Validators.required])
    //   });
    // }
    FestUploadFormComponent.prototype.onChange = function (e) {
        switch (e.target.name) {
            case "image":
                var myCanvas = document.getElementById("display");
                break;
            case "promo_video":
                var myCanvas = document.getElementById("provideo");
                break;
            case "promo_video_thumbnail":
                var myCanvas = document.getElementById("thumbmail");
                break;
            case "picture":
                var id = this.sponsorEventPoints.length;
                id = id - 1;
                var myCanvas = document.getElementById(id.toString());
                break;
        }
        var ctx = myCanvas.getContext('2d');
        var img = new Image();
        img.onload = function () {
            myCanvas.width = img.width;
            myCanvas.height = img.height;
            ctx.drawImage(img, 0, 0);
            // console.log(myCanvas.toDataURL('image/jpeg'));
        };
        img.src = URL.createObjectURL(e.target.files[0]);
        var dataURL = myCanvas.toDataURL('image/jpeg');
        dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
    };
    Object.defineProperty(FestUploadFormComponent.prototype, "eventPoints", {
        // onKeydown(e) {
        //   e.preventDefault();
        // }
        get: function () {
            return this.festForm.get('event');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FestUploadFormComponent.prototype, "sponsorEventPoints", {
        get: function () {
            return this.festForm.get('event_sponser');
        },
        enumerable: true,
        configurable: true
    });
    FestUploadFormComponent.prototype.addEventPoint = function () {
        this.eventPoints.push(this.formBuilder.group({ eventName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''), ticket_price: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''), event_description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]), event_coordinator: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]), event_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]), event_time: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]), event_type: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]], }));
    };
    FestUploadFormComponent.prototype.deleteEventPoint = function (index) {
        this.eventPoints.removeAt(index);
    };
    FestUploadFormComponent.prototype.addSponsorEventPoint = function () {
        this.sponsorEventPoints.push(this.formBuilder.group({ evtSpnName: '', picture: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null), caption: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('') }));
    };
    FestUploadFormComponent.prototype.deleteSponsorEventPoint = function (index) {
        this.sponsorEventPoints.removeAt(index);
    };
    FestUploadFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-fest-upload-form',
            template: __webpack_require__(/*! ./fest-upload-form.component.html */ "./src/app/components/fest-upload-form/fest-upload-form.component.html"),
            styles: [__webpack_require__(/*! ./fest-upload-form.component.sass */ "./src/app/components/fest-upload-form/fest-upload-form.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], src_app_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], FestUploadFormComponent);
    return FestUploadFormComponent;
}());



/***/ }),

/***/ "./src/app/components/fest/fest.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/fest/fest.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"this.authenticationService.orgExist\">\n    <app-organizationheader></app-organizationheader>\n</div>\n<div *ngIf=\" this.authenticationService.userExist\">\n    <app-userheader></app-userheader>\n</div>\n\n<div *ngIf=\" this.authenticationService.userExist == undefined &&  this.authenticationService.orgExist == undefined\">\n    <app-header></app-header>\n</div>\n\n<div class=\"inner-ban\">\n    <img src=\"assets/images/inner-ban.jpg\" alt=\"\">\n</div>\n<section class=\"fest-page\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-12 text-center\">\n                <button class=\"filter-button\" data-filter=\"all\">All events</button>\n                <button class=\"filter-button\" data-filter=\"university\">University</button>\n                <button class=\"filter-button\" data-filter=\"pre-university\">Pre-University</button>\n                <button class=\"filter-button\" data-filter=\"youth\">Youth</button>\n                <button class=\"filter-button\" data-filter=\"science\">Science</button>\n                <button class=\"filter-button\" data-filter=\"arts\">Arts</button>\n                <button class=\"filter-button\" data-filter=\"commerce\">Commerce</button>\n                <button class=\"filter-button\" data-filter=\"engineering\">Engineering</button>\n                <button class=\"filter-button\" data-filter=\"arch\">Arch</button>\n            </div>\n            <div *ngIf=\"this.university\">\n                <div *ngFor=\"let universityList of  this.university ;let i=index\">\n                    <div class=\"gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-12 filter university\">\n                        <div class=\"item\">\n                            <div class=\"show-image\">\n                                <!-- <a role=\"button\" (click)=\"authenticationService.festDetailsWithspecific(universityList.fest_id)\">-->\n                                <div class=\"img-wrap\">\n                                    <img [src]=\"universityList.fest_image\" alt=\"\" style=\"position: relative;float: left;width:  100%;height: 200px;background-position: 50% 50%;background-repeat:   no-repeat;background-size:cover;\">\n                                    <div class=\"overlay\">\n                                        <input class=\"update\" type=\"button\" value=\"View Details\" (click)=\"authenticationService.festDetailsWithspecific(universityList.fest_id)\" />\n                                    </div>\n                                </div>\n                            </div>\n                            <h4> <span></span><span></span></h4>\n                            <div class=\"col-md-9\">\n                                <h4>{{universityList.org_name}}</h4>\n                                <h4>{{universityList.fest_start_date|date:'d-M-y' }}</h4>\n                                <h4 style=\"font-weight:900\">{{universityList.fest_name}}</h4>\n                                <!--</a>-->\n                            </div>\n                            <div class=\"col-md-1 like-sec\">\n                                <span>{{universityList.total_likes}}</span>\n                            </div>\n                            <div class=\"col-md-1 like-sec2 pull-right\">\n                                <a role=\"button\" class=\"heart\" id={{universityList.fest_id}} (click)=\"authenticationService.getLikesNo(universityList,$event)\"></a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div *ngIf=\"this.engineering\">\n                <div *ngFor=\"let engineeringList of  this.engineering ;let i=index\">\n                    <div class=\"gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-12 filter engineering\">\n                        <div class=\"item\">\n                            <div class=\"show-image\">\n                                <!--<a role=\"button\" (click)=\"authenticationService.festDetailsWithspecific(engineeringList.fest_id)\">-->\n                                <div class=\"img-wrap\">\n                                    <img [src]=\"engineeringList.fest_image\" alt=\"\" style=\"position: relative;float: left;width:  100%;height: 200px;background-position: 50% 50%;background-repeat:   no-repeat;background-size:cover;\">\n                                    <div class=\"overlay\">\n\n                                        <input class=\"update\" type=\"button\" value=\"View Details\" (click)=\"authenticationService.festDetailsWithspecific(engineeringList.fest_id)\" />\n                                    </div>\n                                </div>\n\n                                <h4> <span></span><span></span></h4>\n                                <div class=\"col-md-9\">\n                                <h4>{{engineeringList.org_name}}</h4>\n                                <h4>{{engineeringList.fest_start_date}}</h4>\n                                <h4 style=\"font-weight:900\">{{engineeringList.fest_name}}</h4>\n                                <!--</a> -->\n                                </div>\n                            </div>\n                            <div class=\"col-md-1 like-sec\">\n                                <span>{{engineeringList.total_likes}}</span>\n                            </div>\n                            <div class=\"col-md-1 like-sec2 pull-right\">\n                                <a role=\"button\" class=\"heart\" id={{engineeringList.fest_id}} (click)=\"authenticationService.getLikesNo(engineeringList,$event)\"></a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div *ngIf=\"this.commerce\">\n                <div *ngFor=\"let commerceList of  this.commerce;let i=index\">\n                    <div class=\"gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-12 filter commerce\">\n                        <div class=\"item\">\n                            <div class=\"show-image\">\n                                <!-- <a role=\"button\" (click)=\"authenticationService.festDetailsWithspecific(engineeringList.fest_id)\">-->\n                                <div class=\"img-wrap\">\n                                    <img [src]=\"commerceList.fest_image\" alt=\"\" style=\"position: relative;float: left;width: 100%;height: 200px;background-position: 50% 50%;background-repeat:   no-repeat;background-size:cover;\">\n                                    <div class=\"overlay\">\n\n                                        <input class=\"update\" type=\"button\" value=\"View Details\" (click)=\"authenticationService.festDetailsWithspecific(commerceList.fest_id)\" />\n                                    </div>\n                                </div>\n\n                                <h4> <span></span><span></span></h4>\n                                <div class=\"col-md-9\">\n                                <h4>{{commerceList.org_name}}</h4>\n                                <h4>{{commerceList.fest_name}}</h4>\n                                <h4 style=\"font-weight:900\">{{commerceList.fest_start_date}}</h4>\n                                <!--</a> -->\n                                </div>\n                            </div>\n                            <div class=\"col-md-1 like-sec\">\n                                <span>{{commerceList.total_likes}}</span>\n                            </div>\n                            <div class=\"col-md-1 like-sec2 pull-right\">\n                                <a role=\"button\" class=\"heart\" id={{engineeringList.fest_id}} (click)=\"authenticationService.getLikesNo(commerceList,$event)\"></a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div *ngIf=\"this.arch\">\n                <div *ngFor=\"let archList of  this.arch;let i=index\">\n                    <div class=\"gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-12 filter arch\">\n                        <div class=\"item\">\n                            <div class=\"show-image\">\n                                <!-- <a role=\"button\" (click)=\"authenticationService.festDetailsWithspecific(archList.fest_id)\"> -->\n                                <div class=\"img-wrap\">\n                                    <img [src]=\"archList.fest_image\" alt=\"\" style=\"position: relative;float: left;width:  100%;height: 200px;background-position: 50% 50%;background-repeat:   no-repeat;background-size:cover;\">\n                                    <div class=\"overlay\">\n                                        <input class=\"update\" type=\"button\" value=\"View Details\" (click)=\"authenticationService.festDetailsWithspecific(archList.fest_id)\" />\n                                    </div>\n                                </div>\n\n                                <h4> <span></span><span></span></h4>\n                                <div class=\"col-md-9\">\n                                <h4>{{archList.org_name}}</h4>\n                                <h4>{{archList.fest_name}}</h4>\n                                <h4 style=\"font-weight:900\">{{archList.fest_start_date}}</h4>\n                                <!--</a> -->\n                            </div>\n                            </div>\n                            <div class=\"col-md-2 like-sec\">\n                                <span>{{archList.total_likes}}</span>\n                            </div>\n                            <div class=\"col-md-1 like-sec2 pull-right\">\n                                <a role=\"button\" class=\"heart\" id={{archList.fest_id}} (click)=\"authenticationService.getLikesNo(archList,$event)\"></a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div *ngIf=\"this.preuniversity\">\n                <div *ngFor=\"let preuniversityList of  this.preuniversity;let i=index\">\n                    <div class=\"gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-12 filter pre-university\">\n                        <div class=\"item\">\n                            <div class=\"show-image\">\n                                <!--<a role=\"button\" (click)=\"authenticationService.festDetailsWithspecific(preuniversityList.fest_id)\"> -->\n                                <div class=\"img-wrap\">\n                                    <img [src]=\"preuniversityList.fest_image\" alt=\"\" style=\"position: relative;float: left;width:  100%;height: 200px;background-position: 50% 50%;background-repeat:   no-repeat;background-size:cover;\">\n                                    <div class=\"overlay\">\n                                        <input class=\"update\" type=\"button\" value=\"View Details\" (click)=\"authenticationService.festDetailsWithspecific(preuniversityList.fest_id)\" />\n                                    </div>\n                                </div>\n\n                                <h4> <span></span><span></span></h4>\n                                <div class=\"col-md-9\">\n                                <h4>{{preuniversityList.org_name}}</h4>\n                                <h4>{{preuniversityList.fest_start_date}}</h4>\n                                <h4 style=\"font-weight:900\">{{preuniversityList.fest_name}}</h4>\n                                <!--</a> -->\n                            </div>\n                            </div>\n                            <div class=\"col-md-1 like-sec\">\n                                <span> {{preuniversityList.total_likes}}</span>\n                            </div>\n                            <div class=\"col-md-1 like-sec2 pull-right\">\n                                <a role=\"button\" class=\"heart\" id={{preuniversityList.fest_id}} (click)=\"authenticationService.getLikesNo(preuniversityList,$event)\"></a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div *ngIf=\"this.arts\">\n                <div *ngFor=\"let artsList of  this.arts ;let i=index\">\n                    <div class=\"gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-12 filter arts\">\n                        <div class=\"item\">\n                            <div class=\"show-image\">\n                                <!--<a role=\"button\" (click)=\"authenticationService.festDetailsWithspecific(artsList.fest_id)\">-->\n                                <div class=\"img-wrap\">\n                                    <img [src]=\"artsList.fest_image\" alt=\"\" style=\"position: relative;float: left;width:  100%;height: 200px;background-position: 50% 50%;background-repeat:   no-repeat;background-size:cover;\">\n                                    <div class=\"overlay\">\n                                        <input class=\"update\" type=\"button\" value=\"View Details\" (click)=\"authenticationService.festDetailsWithspecific(artsList.fest_id)\" />\n                                    </div>\n                                </div>\n\n                                <h4> <span></span><span></span></h4>\n                                <div class=\"col-md-9\">\n                                <h4>{{artsList.org_name}}</h4>\n                                <h4>{{artsList.fest_start_date}}</h4>\n                                <h4 style=\"font-weight:900\">{{artsList.fest_name}}</h4>\n                                <!--</a> -->\n                            </div>\n                            </div>\n                            <div class=\"col-md-1 like-sec\">\n                                <span>{{artsList.total_likes}}</span>\n                            </div>\n                            <div class=\"col-md-1 like-sec2 pull-right\">\n                                <a role=\"button\" class=\"heart\" id={{artsList.fest_id}} (click)=\"authenticationService.getLikesNo(artsList,$event)\"></a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div *ngIf=\"this.science\">\n                <div *ngFor=\"let scienceList of  this.science ;let i=index\">\n                    <div class=\"gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-12 filter science\">\n                        <div class=\"item\">\n                            <div class=\"show-image\">\n                                <!--<a role=\"button\" (click)=\"authenticationService.festDetailsWithspecific(scienceList.fest_id)\"> -->\n                                <div class=\"img-wrap\">\n                                    <img [src]=\"scienceList.fest_image\" alt=\"\" style=\"position: relative;float: left;width:  100%;height: 200px;background-position: 50% 50%;background-repeat:   no-repeat;background-size: cover;\">\n                                    <div class=\"overlay\">\n                                        <h4> <span></span><span></span></h4>\n                                        <input class=\"update\" type=\"button\" value=\"View Details\" (click)=\"authenticationService.festDetailsWithspecific(scienceList.fest_id)\" />\n                                    </div>\n                                </div>\n                                <div class=\"col-md-9\">\n                                <h4>{{scienceList.org_name}}</h4>\n                                <h4>{{scienceList.fest_name}}</h4>\n                                <h4 style=\"font-weight:900\">{{scienceList.fest_start_date}}</h4>\n                                <!--</a> -->\n                                </div>\n                            </div>\n                            <div class=\"col-md-1 like-sec\">\n                                <span>{{scienceList.total_likes}}</span>\n                            </div>\n                            <div class=\"col-md-1 like-sec2 pull-right\">\n                                <a role=\"button\" class=\"heart\" id={{scienceList.fest_id}} (click)=\"authenticationService.getLikesNo(scienceList,$event)\"></a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div *ngIf=\"this.youth\">\n                <div *ngFor=\"let youthList of  this.youth ;let i=index\">\n                    <div class=\"gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-12 filter youth\">\n                        <div class=\"item\">\n                            <div class=\"show-image\">\n                                <!-- <a role=\"button\" (click)=\"authenticationService.festDetailsWithspecific(youthList.fest_id)\"> -->\n                                <div class=\"img-wrap\">\n                                    <img [src]=\"youthList.fest_image\" alt=\"\" style=\"position: relative;float: left;width:  100%;height: 200px;background-position: 50% 50%;background-repeat:   no-repeat;background-size:cover;\">\n                                    <div class=\"overlay\">\n                                        <input class=\"update\" type=\"button\" value=\"View Details\" (click)=\"authenticationService.festDetailsWithspecific(youthList.fest_id)\" />\n                                    </div>\n                                </div>\n\n                                <h4> <span></span><span></span></h4>\n                                <div class=\"col-md-9\">\n                                    <h4>{{youthList.org_name}}</h4>\n                                    <h4>{{youthList.fest_name}}</h4>\n                                    <h4 style=\"font-weight:900\">{{youthList.fest_start_date}}</h4>\n                                    <!--</a> -->\n                                </div>\n                            </div>\n                            <div class=\"col-md-1 like-sec\">\n                                <span>{{youthList.total_likes}}</span>\n                            </div>\n                            <div class=\"col-md-1 like-sec2 pull-right\">\n                                <a role=\"button\" class=\"heart\" id={{youthList.fest_id}} (click)=\"authenticationService.getLikesNo(youthList,$event)\"></a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/components/fest/fest.component.sass":
/*!*****************************************************!*\
  !*** ./src/app/components/fest/fest.component.sass ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZmVzdC9mZXN0LmNvbXBvbmVudC5zYXNzIn0= */"

/***/ }),

/***/ "./src/app/components/fest/fest.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/fest/fest.component.ts ***!
  \***************************************************/
/*! exports provided: FestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FestComponent", function() { return FestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/authentication.service */ "./src/app/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var FestComponent = /** @class */ (function () {
    function FestComponent(authenticationService, router) {
        var _this = this;
        this.authenticationService = authenticationService;
        this.router = router;
        this.university = [];
        this.preuniversity = [];
        this.youth = [];
        this.medical = [];
        this.arts = [];
        this.science = [];
        this.engineering = [];
        this.arch = [];
        this.commerse = [];
        this.authenticationService.festDetails().subscribe(function (data) {
            if (data) {
                data.map(function (x) {
                    if (x.org_type == "youth") {
                        _this.youth.push(x);
                    }
                    else if (x.org_type == "pre-university") {
                        _this.preuniversity.push(x);
                    }
                    else if (x.org_type == "university") {
                        _this.university.push(x);
                    }
                    else if (x.org_category == "medical") {
                        _this.medical.push(x);
                    }
                    else if (x.org_category == "arts") {
                        _this.arts.push(x);
                    }
                    else if (x.org_category == "Science") {
                        _this.science.push(x);
                    }
                    else if (x.org_category == "arch") {
                        _this.arch.push(x);
                    }
                    else if (x.org_category == "engineering") {
                        _this.engineering.push(x);
                    }
                    else if (x.org_category == "commerce") {
                        _this.commerse.push(x);
                    }
                });
            }
        });
    }
    FestComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authenticationService.orgExist = sessionStorage.getItem('currentUser');
        this.authenticationService.userExist = sessionStorage.getItem('userData');
        if (this.authenticationService.userExist) {
            this.authenticationService.getLikesBookedEvents().subscribe(function (data) {
                _this.likedFest = data.liked_fests;
            });
            setTimeout(function () {
                if (_this.likedFest) {
                    _this.likedFest.map(function (x) {
                        var element = document.getElementById(x.id);
                        if (element != undefined) {
                            element.className = 'blast';
                        }
                    });
                }
            }, 5000);
        }
    };
    FestComponent.prototype.ngAfterViewInit = function () {
        $(document).ready(function () {
            $(".filter-button").click(function () {
                var value = $(this).attr('data-filter');
                if (value == "all") {
                    //$('.filter').removeClass('hidden');
                    $('.filter').show('1000');
                }
                else {
                    //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
                    //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
                    $(".filter").not('.' + value).hide('3000');
                    $('.filter').filter('.' + value).show('3000');
                }
            });
            if ($(".filter-button").removeClass("active")) {
                $(this).removeClass("active");
            }
            $(this).addClass("active");
        });
    };
    FestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-fest',
            template: __webpack_require__(/*! ./fest.component.html */ "./src/app/components/fest/fest.component.html"),
            styles: [__webpack_require__(/*! ./fest.component.sass */ "./src/app/components/fest/fest.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], FestComponent);
    return FestComponent;
}());



/***/ }),

/***/ "./src/app/components/festspecific/festspecific.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/festspecific/festspecific.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"this.authenticationService.orgExist\">\n    <app-organizationheader></app-organizationheader>\n</div>\n<div *ngIf=\" this.authenticationService.userExist\">\n    <app-userheader></app-userheader>\n</div>\n\n<div *ngIf=\" this.authenticationService.userExist == undefined &&  this.authenticationService.orgExist == undefined\">\n    <app-header></app-header>\n</div>\n<div class=\"inner-ban\">\n    <img src=\"assets/images/inner-ban.jpg\" alt=\"\">\n</div>\n\n<section class=\"festspecific-page\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-3\">\n                <div class=\"left-sec\">\n                    <!--<img src=\"https://festevents.org/files/cache/c8c82a059994675fc46fb69d5ffbd02e_f3570.jpg\" alt=\"\">-->\n                    <img id=\"festImg\" alt=\"\">\n                    <div *ngIf=\"this.festDetails\">\n                        <ul>\n                            <li>Date: {{this.festDetails.start_date}}</li>\n                            <li>name: {{this.festDetails.name}}</li>\n                            <li>website:{{this.festDetails.website}}</li>\n                        </ul>\n                        <h3>sponsors</h3>\n                        <div class=\"spon-img\">\n                            <div *ngFor=\"let sponsorDetails of this.festDetails.sponsor\">\n                                <ul>\n                                    <li *ngIf=\"sponsorDetails.sponsor_name\" >\n                                        <h5>Name: <span>{{sponsorDetails.sponsor_name}}</span></h5></li>\n                                    <img [src]=\"sponsorDetails.sponsor_picture\" alt=\"\">\n                                </ul>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-9\" *ngIf=\"this.festDetails\">\n                <div class=\"fest-decp\">\n                    <h2>{{this.festDetails.name}}</h2>\n                    <!-- <h3>venue: </h3>\n                   <div class=\"sec1\">\n            <h4>description</h4>\n            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi illum reprehenderit, placeat perferendis ipsum architecto numquam dolores sit mollitia incidunt impedit iusto harum similique, laborum iure delectus vero voluptatum repellendus?</p>\n          </div>-->\n                    <!--<div class=\"sec2\">\n            <h4>update</h4>\n          </div>-->\n                    <!-- <div class=\"sec3\">\n            <img src=\"http://sckana.net/New%20Images/events.jpg\" alt=\"\">\n            <h4>Name</h4>\n            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, necessitatibus quos. Impedit quae harum, omnis, ut, ex hic cupiditate voluptatem ab esse eaque eum libero asperiores dolorum et distinctio molestias.</p>\n          </div>-->\n                    <div class=\"sec4\">\n                        <h4>events</h4>\n                        <div *ngFor=\"let eventDetails of this.festDetails.events\">\n                            <div class=\"col-md-6 col-sm-6\">\n                                <div class=\"pricingTable\">\n                                    <div class=\"pricingTable-header\">\n                                        <span class=\"heading\">\n                                            <h3>name :{{eventDetails.event_name}} </h3>\n                                        </span>\n                                    </div>\n                                    <div class=\"pricingContent\">\n                                        <h5>Rules:</h5>\n                                        <ul>\n                                            <li>{{eventDetails.event_rules}}</li>\n                                        </ul>\n                                        <h5>Price:</h5>\n                                        <ul>\n                                            <li>{{eventDetails.ticket_price}}</li>\n                                        </ul>\n                                    </div>\n                                    <div class=\"pricingTable-sign-up\">\n                                        <a role=\"button\" (click)=\"festDeatils(eventDetails)\" class=\"btn btn-block btn-default\">book\n                                            now</a>\n                                    </div>\n                                    <!-- BUTTON BOX-->\n                                </div>\n                            </div>\n                            <!-- <div class=\"clearfix\"></div> -->\n                        </div>\n                    </div>\n                    <!--end event-->\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/components/festspecific/festspecific.component.sass":
/*!*********************************************************************!*\
  !*** ./src/app/components/festspecific/festspecific.component.sass ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZmVzdHNwZWNpZmljL2Zlc3RzcGVjaWZpYy5jb21wb25lbnQuc2FzcyJ9 */"

/***/ }),

/***/ "./src/app/components/festspecific/festspecific.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/festspecific/festspecific.component.ts ***!
  \*******************************************************************/
/*! exports provided: FestspecificComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FestspecificComponent", function() { return FestspecificComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/authentication.service */ "./src/app/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var FestspecificComponent = /** @class */ (function () {
    function FestspecificComponent(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
        this.festID = localStorage.getItem('festID');
        this.authenticationService.orgExist = sessionStorage.getItem('currentUser');
        this.authenticationService.userExist = sessionStorage.getItem('userData');
    }
    FestspecificComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authenticationService.festSepecificDetails(this.festID).subscribe(function (data) {
            _this.festDetails = (data[0]);
            if (_this.festDetails.image) {
                var imgae = document.getElementById("festImg");
                imgae.setAttribute('src', _this.festDetails.image);
            }
            if (_this.festDetails.events.length >= 1) {
                _this.festDetails.events.map(function (x) {
                    if (x.ticket_price) {
                        x.ticket_price = parseFloat(x.ticket_price).toFixed(2);
                    }
                });
            }
        });
    };
    FestspecificComponent.prototype.festDeatils = function (e) {
        var data = JSON.stringify(e);
        localStorage.setItem('festPaymentDeatils', data);
        this.router.navigate(['/payment']);
    };
    FestspecificComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-festspecific',
            template: __webpack_require__(/*! ./festspecific.component.html */ "./src/app/components/festspecific/festspecific.component.html"),
            styles: [__webpack_require__(/*! ./festspecific.component.sass */ "./src/app/components/festspecific/festspecific.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], FestspecificComponent);
    return FestspecificComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"copy text-center\">\n\t<p>Copyright &copy; 2019 </p>\n</div>"

/***/ }),

/***/ "./src/app/components/footer/footer.component.sass":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.sass ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2FzcyJ9 */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.sass */ "./src/app/components/footer/footer.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\n    .current-clikable-item {\n        color: #f71769!important;\n    }\n</style>\n<div class=\"modal fade log-in-pop\" id=\"myModal2\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"login-form\">\n                    <div class=\"main-div\">\n                        <ul>\n                            <li class=\"active\"><a data-toggle=\"tab\" href=\"#home\">USER</a></li>\n                            <li><a data-toggle=\"tab\" href=\"#menu1\">ORGANIZATIONS</a></li>\n                        </ul>\n                        <div class=\"tab-content\">\n                            <div id=\"home\" class=\"tab-pane fade in active\">\n                                <div class=\"col-md-6 col-xs-6\">\n                                    <button (click)=\"socialSignIn('facebook')\" class=\"fb-lig\"><i class=\"fab fa-facebook-f\"></i> &nbsp;&nbsp;Log In</button>\n                                </div>\n                                <div class=\"col-md-6 col-xs-6\">\n                                    <button (click)=\"socialSignIn('google')\" class=\"goo-lig\"><i class=\"fab fa-google-plus-g\"></i> &nbsp;Log In</button>\n                                </div>\n                            </div>\n                            <div id=\"menu1\" class=\"tab-pane fade\">\n                                <form id=\"Login\" [formGroup]=\"loginForm\" (ngSubmit)=\"onLoginSubmit()\">\n                                    <div class=\"form-group\">\n                                        <label>User Id</label>\n                                        <input type=\"text\" formControlName=\"email\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" />\n                                        <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n                                            <div *ngIf=\"f.email.errors.required\">User Id is required</div>\n                                        </div>\n                                    </div>\n                                    <div class=\"form-group\">\n                                        <label>Password</label>\n                                        <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n                                        <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n                                            <div *ngIf=\"f.password.errors.required\">Password is required</div>\n                                            <div *ngIf=\"f.password.errors.minlength\">Password must be at least 6 characters</div>\n                                        </div>\n                                    </div>\n\n                                    <div class=\"form-group\">\n                                        <button type=\"submit\" class=\"btn btn-primary\">Login</button>\n                                    </div>\n                                </form>\n                                <button type=\"button\" class=\"btn btn-primary btn-block btn-flat\" (click)=\"organizationSignUp()\">Sign Up</button>\n\n                            </div>\n                        </div>\n\n                    </div>\n                    <!--</div>-->\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- Modal End -->\n\n<header>\n    <div class=\"top-part\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-6 col-xs-6\">\n                    <ul class=\"top-socila\">\n                        <li><a href=\"javascript:void(0);\"><i class=\"fab fa-facebook-f\"></i></a></li>\n                        <li><a href=\"javascript:void(0);\"><i class=\"fab fa-twitter\"></i></a></li>\n                        <li><a href=\"javascript:void(0);\"><i class=\"fab fa-instagram\"></i></a></li>\n                    </ul>\n                </div>\n                <div class=\"col-md-6 col-xs-6 log-in text-right\">\n                    <div *ngIf=\" this.authenticationService.userExist == undefined &&  this.authenticationService.orgExist == undefined\" data-toggle=\"modal\" data-target=\"#myModal2\">Sign In</div>\n                    <div *ngIf=\" this.authenticationService.userExist ||  this.authenticationService.orgExist\" (click)=\"this.authenticationService.logout()\">Log Out</div>\n                </div>\n\n            </div>\n        </div>\n    </div>\n    <div class=\"logo-sec\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-3 col-xs-4 col-sm-2 logo-part\">\n                    <a href=\"javascript:void(0);\"><img src=\"assets/images/logo2.png\" alt=\"\"></a>\n                </div>\n                <div class=\"col-md-9 text-right\">\n                    <div id=\"navigation\">\n                        <nav>\n                            <div class=\"navbar-collapse justify-content-end\" id=\"nav-content\">\n                                <ul class=\"navbar-nav navbar-right\" id=\"nav\">\n                                    <li class=\"nav-item\">\n                                        <a class=\"nav-link\" routerLink=\"/\" routerLinkActive=\"current-clikable-item\" [routerLinkActiveOptions]=\"{exact:true}\">Home</a>\n                                    </li>\n                                    <li class=\"nav-item\">\n                                        <a class=\"nav-link\" routerLink=\"/fest/\" routerLinkActive=\"current-clikable-item\" [routerLinkActiveOptions]=\"{exact:true}\">Fests</a>\n                                    </li>\n                                    <li class=\"nav-item\">\n                                        <a class=\"nav-link\" routerLink=\"/organizations/\" routerLinkActive=\"current-clikable-item\" [routerLinkActiveOptions]=\"{exact:true}\">organizations</a>\n                                    </li>\n                                    <li class=\"nav-item\"><a href=\"#contact\">contact us</a></li>\n                                    <li class=\"nav-item\"><a href=\"#map-sec\">location</a></li>\n                                    </ul>\n                                    </div>\n                                </nav>\n\n                            </div>\n                            </div>\n                            <!--<div class=\"col-md-1 text-right\">\n                    <ul>\n                        <ul class=\"serc\">\n                            <li><a href=\"#\" data-toggle=\"modal\" data-target=\"#myModal\"><i class=\"fas fa-search\"></i></a></li>\n                        </ul>\n                    </ul>\n                </div>-->\n\n                    </div>\n                </div>\n            </div>\n</header>\n"

/***/ }),

/***/ "./src/app/components/header/header.component.sass":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.sass ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2FzcyJ9 */"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularx-social-login */ "./node_modules/angularx-social-login/angularx-social-login.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/app.service */ "./src/app/app.service.ts");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../authentication.service */ "./src/app/authentication.service.ts");








var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(formBuilder, socialAuthService, router, appService, authenticationService) {
        this.formBuilder = formBuilder;
        this.socialAuthService = socialAuthService;
        this.router = router;
        this.appService = appService;
        this.authenticationService = authenticationService;
        this.loginForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]]
        });
        this.authenticationService.orgExist = sessionStorage.getItem('currentUser');
        this.authenticationService.userExist = sessionStorage.getItem('userData');
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(HeaderComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () {
            return this.loginForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    HeaderComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            alert("Please Enter All values Properly");
            return;
        }
        else {
            this.appService.organizationLogin(this.loginForm).subscribe(function (data) {
                if (data) {
                    $('#myModal2').modal('hide');
                    sessionStorage.setItem('currentUserId', JSON.stringify(_this.loginForm.value));
                    sessionStorage.setItem('currentUser', JSON.stringify(data));
                    // alert('login Successful');
                    _this.router.navigate(['orgdashboard']);
                }
                else {
                    alert('login UnSuccessful');
                    _this.router.navigate(['home']);
                }
            });
        }
    };
    HeaderComponent.prototype.organizationSignUp = function () {
        $('#myModal2').modal('hide');
        this.router.navigate(['signup']);
    };
    HeaderComponent.prototype.socialSignIn = function (socialPlatform) {
        var _this = this;
        var socialPlatformProvider;
        if (socialPlatform == "facebook") {
            socialPlatformProvider = angularx_social_login__WEBPACK_IMPORTED_MODULE_3__["FacebookLoginProvider"].PROVIDER_ID;
        }
        else if (socialPlatform == "google") {
            socialPlatformProvider = angularx_social_login__WEBPACK_IMPORTED_MODULE_3__["GoogleLoginProvider"].PROVIDER_ID;
        }
        this.socialAuthService.signIn(socialPlatformProvider).then(function (userData) {
            if (userData) {
                sessionStorage.setItem('userData', JSON.stringify(userData));
                _this.authenticationService.userLogin(JSON.stringify(userData)).subscribe(function (data) {
                    if (data) {
                        $('#myModal2').modal('hide');
                        // localStorage.setItem('userDashboardData',JSON.stringify(data));
                        _this.router.navigate(['userdashboard']);
                    }
                    else {
                        _this.router.navigate(['home']);
                    }
                });
            }
            else {
                _this.router.navigate(['home']);
            }
        });
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.sass */ "./src/app/components/header/header.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], angularx_social_login__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"], _authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\" this.authenticationService.orgExist !=undefined\">\n    <app-organizationheader></app-organizationheader>\n</div>\n<div *ngIf=\" this.authenticationService.userExist !=undefined\">\n    <app-userheader></app-userheader>\n</div>\n\n<div *ngIf=\" this.authenticationService.userExist == undefined &&  this.authenticationService.orgExist == undefined\">\n    <app-header></app-header>\n</div>\n\n<div class=\"banner-part\">\n    <div class=\"slider\">\n        <div class=\"item\">\n            <img src=\"assets/images/banner1.jpeg\" alt=\"\">\n            <div class=\"banner_text\">\n                <div class=\"container\">\n                    <div class=\"row\">\n                        <div class=\"col-md-12 text-center\">\n                            <!-- <h2> India's only platform for all of your festing needs. </h2> -->\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"item\">\n            <img src=\"assets/images/banner2.jpeg\" alt=\"\">\n            <div class=\"banner_text\">\n                <div class=\"container\">\n                    <div class=\"row\">\n                        <div class=\"col-md-12 text-center\">\n                            <!-- <h2> all fests simplified</h2> -->\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"item\">\n            <img src=\"assets/images/banner3.jpeg\" alt=\"\">\n            <div class=\"banner_text\">\n                <div class=\"container\">\n                    <div class=\"row\">\n                        <div class=\"col-md-12 text-center\">\n                            <!-- <h2> all fests simplified</h2> -->\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<section class=\"body-cont2\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-12 text-center\">\n                <ul>\n                    <li class=\"active\"><a data-toggle=\"tab\" href=\"#tab\">University </a></li>\n                    <li><a data-toggle=\"tab\" href=\"#tab2\">Pre-University</a></li>\n                </ul>\n            </div>\n        </div>\n        <div class=\"tab-content\">\n            <div id=\"tab\" class=\"tab-pane fade in active\">\n                <div class=\"row\">\n                    <div class=\"clearfix\"></div>\n                    <div *ngIf=\"university\">\n                        <ngx-slick-carousel class=\"carousel\" #slickModal=\"slick-carousel\" [config]=\"slideConfig\">\n                            <div ngxSlickItem *ngFor=\"let slide of university ;let i=index\"   class=\"slide\">\n                             <div class=\"show-image\">\n                                    <div class=\"img-wrap\">\n                                            <img src=\"{{slide.fest_image}}\" alt=\"\" width=\"100%\">\n                                            <div class=\"overlay\">\n                                                    <input class=\"update\" type=\"button\" value=\"View Details\"  (click)=\"authenticationService.festDetailsWithspecific(slide.fest_id)\"/>\n                                            </div>\n                                        </div>\n                                </div>\n                                 <h4> <span></span><span></span></h4>\n                                 <div class=\"col-md-9 col-xs-9\">\n                                 <h4>{{slide.org_name}}</h4>\n                                 <h4>{{ slide.fest_start_date|date:'d-M-y' }}</h4>\n                                 <h4 style=\"font-weight:900\">{{slide.fest_name}}</h4>\n                                </div>\n                                \n                                <div class=\"col-md-2 col-xs-2 like-sec\">\n                                     <span>{{slide.total_likes}}</span>\n                                </div>\n                                <div class=\"col-md-1 col-xs-1 like-sec2\">\n                                    <a role=\"button\" class=\"heart\" id={{i}} (click)=\"authenticationService.getLikesNo(slide,$event)\"></a>\n                                </div>\n                                \n                            </div>\n                        </ngx-slick-carousel>\n                    </div>\n                </div>\n            </div>\n            <div id=\"tab2\" class=\"tab-pane fade\">\n                <div class=\"row\">\n                    <div class=\"clearfix\"></div>\n                    <div *ngIf=\"preuniversity\">\n                        <ngx-slick-carousel class=\"carousel\" #slickModal=\"slick-carousel\" [config]=\"slideConfig\">\n                            <div ngxSlickItem *ngFor=\"let preuniversityslide of preuniversity;let i=index\" class=\"slide\">\n                              <div class=\"show-image\">\n                                <img src=\"{{ preuniversityslide.fest_image }}\" alt=\"\" width=\"100%\">\n                                 <input class=\"update\" type=\"button\" value=\"View Details\"  (click)=\"authenticationService.festDetailsWithspecific(preuniversityslide.fest_id)\"/>\n                                </div>\n                                <h4> <span></span><span></span></h4>\n                                <div class=\"col-md-9 col-cs-9\">\n                                 <h4>{{preuniversityslide.org_name}}</h4>\n                                 <h4>{{preuniversityslide.fest_start_date|date:'d-M-y' }}</h4>\n                                 <h4  style=\"font-weight:900\">{{preuniversityslide.fest_name}}</h4>\n                                </div>\n                                <div class=\"col-md-2 like-sec\">\n                                     <span>{{preuniversityslide.total_likes}}</span>\n                                </div>\n                                <div class=\"col-md-1 like-sec2 text-right\">\n                                    <a role=\"button\" class=\"heart\" id={{i}} (click)=\"authenticationService.getLikesNo(slide,$event)\"></a>\n                                </div>\n                            </div>\n                        </ngx-slick-carousel>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n\n<section class=\"body-cont3\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-offset-3 col-md-6 text-center\">\n                <h2>About Us</h2>\n                <p>Festify recognises the massive festing culture that exists in our country and the talent, stellar experiences and buzz it has been creating all over the nation. </p>\n\n                <!-- <h3>Takeaways:</h3>\n                <ul>\n                    <li>Students miss important classes hence academically falling behind. </li>\n                    <li>A lot of petrol is wasted in this effort.</li>\n                    <li>The method is inefficient as interested candidates may not be reached.</li>\n                    <li>College teams (dance, fashion, singing) are manually contacted and not always aware of all the fests.\n                    </li>\n                </ul>\n                <h3>Why do universities need this?</h3>\n                <ul>\n                    <li>To ensure that their efforts aren't wasted after days of planning through inefficient \"campaigning\".\n                    </li>\n                </ul> -->\n                <p>Festify is an ambassador for that very emotion, thrilling experience and never dying excitement that you associate with a fest or college event. We want to grow and cultivate the talent that springs up in fests by helping you take your fest up a notch and cultivating the very emotion that you have come to associate with fests.</p>\n            </div>\n        </div>\n    </div>\n</section>\n\n<!--><div class=\"map\" id=\"map-sec\">\n    <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d471220.56304568046!2d88.0495352874353!3d22.675752091875815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sKolkata%2C+West+Bengal%2C+India!5e0!3m2!1sen!2sus!4v1548785795093\" width=\"100%\" height=\"350\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>\n</div>\n\n<section class=\"body-cont7\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-offset-3 col-md-6 text-center\">\n                <h2>Sponsors</h2>\n            </div>\n            <div class=\"col-md-12\">\n                <div class=\"partner\">\n                    <div class=\"item\">\n                        <img src=\"assets/images/logo2.png\" alt=\"\">\n                    </div>\n                    <div class=\"item\">\n                        <img src=\"assets/images/logo2.png\" alt=\"\">\n                    </div>\n                    <div class=\"item\">\n                        <img src=\"assets/images/logo2.png\" alt=\"\">\n                    </div>\n                    <div class=\"item\">\n                        <img src=\"assets/images/logo2.png\" alt=\"\">\n                    </div>\n                    <div class=\"item\">\n                        <img src=\"assets/images/logo2.png\" alt=\"\">\n                    </div>\n                    <div class=\"item\">\n                        <img src=\"assets/images/logo2.png\" alt=\"\">\n                    </div>\n                    <div class=\"item\">\n                        <img src=\"assets/images/logo2.png\" alt=\"\">\n                    </div>\n                    <div class=\"item\">\n                        <img src=\"assets/images/logo2.png\" alt=\"\">\n                    </div>\n\n                </div>\n            </div>\n        </div>\n    </div>\n</section>-->\n\n<section id=\"contact\">\n    <div class=\"container\">\n        <!-- <h3 class=\"text-center text-uppercase\">Contact Us</h3>\n        <p class=\"text-center w-75 m-auto\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris interdum purus at sem ornare sodales. Morbi leo nulla, pharetra vel felis nec, ullamcorper condimentum quam.</p> -->\n        <div class=\"row\">\n            <div class=\"col-sm-12 col-md-6 col-lg-4 my-5\">\n                <div class=\"card border-0\">\n                    <div class=\"card-body text-center\">\n                        <i class=\"fa fa-phone fa-5x mb-3\" aria-hidden=\"true\"></i>\n                        <h4 class=\"text-uppercase mb-5\">Get more eyes on your fest</h4>\n                        <p>Take a seat back and enjoy the overwhelming response your event gets</p>                       \n                    </div>\n                </div>\n            </div>\n            <div class=\"col-sm-12 col-md-6 col-lg-4 my-5\">\n                <div class=\"card border-0\">\n                    <div class=\"card-body text-center\">\n                        <i class=\"fa fa-map-marker fa-5x mb-3\" aria-hidden=\"true\"></i>\n                        <h4 class=\"text-uppercase mb-5\">Reach out to more sponsors</h4>\n                        <p>Forget about running around looking for sponsors. Watch sponsors come to you.</p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-sm-12 col-md-6 col-lg-4 my-5\">\n                <div class=\"card border-0\">\n                    <div class=\"card-body text-center\">\n                        <i class=\"fa fa-map-marker fa-5x mb-3\" aria-hidden=\"true\"></i>\n                        <h4 class=\"text-uppercase mb-5\">Merch that stands out!!</h4>\n                        <p>Want to glam up your fest with fest tees or hoodies? \n                                No, problem. High quality merch at the lowest prices. </p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-sm-12 col-md-6 col-lg-4 my-5\">\n                <div class=\"card border-0\">\n                    <div class=\"card-body text-center\">\n                        <i class=\"fa fa-globe fa-5x mb-3\" aria-hidden=\"true\"></i>\n                        <h4 class=\"text-uppercase mb-5\">Hassle free management</h4>\n                        <p>Losing count? Don't worry. Track people coming and no of tickets sold. Revenue in one platform.</p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-sm-12 col-md-6 col-lg-4 my-5\">\n                    <div class=\"card border-0\">\n                        <div class=\"card-body text-center\">\n                            <i class=\"fa fa-globe fa-5x mb-3\" aria-hidden=\"true\"></i>\n                            <h4 class=\"text-uppercase mb-5\">Ease of registration and Paperless ticketing</h4>\n                            <p>Clear break down of all necessary event details to contestants to reduce confusion giving a wholesome experience.</p>\n                        </div>\n                    </div>\n                </div>\n        </div>\n    </div>\n</section>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/components/home/home.component.sass":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.sass ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zYXNzIn0= */"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/authentication.service */ "./src/app/authentication.service.ts");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(authenticationService, platformId) {
        var _this = this;
        this.authenticationService = authenticationService;
        this.platformId = platformId;
        this.university = [];
        this.preuniversity = [];
        this.youth = [];
        this.isHovering = false;
        this.slideConfig = {
            "slidesToShow": 3,
            "slidesToScroll": 1,
            "dots": true,
            "infinite": true,
            "autoplay": true,
            "autoplaySpeed": 1000,
            "arrows": true,
            "itemsMobile": [568, 1],
            "itemsTablet": [768, 1],
            "navigation": true,
            "touchMove": true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 568,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                    }
                }
            ]
        };
        this.authenticationService.orgExist = sessionStorage.getItem('currentUser');
        this.authenticationService.userExist = sessionStorage.getItem('userData');
        this.authenticationService.festDetails().subscribe(function (data) {
            if (data) {
                data.filter(function (x) {
                    if (x.org_type == "youth") {
                        _this.youth.push(x);
                    }
                    else if (x.org_type == "pre-university") {
                        _this.preuniversity.push(x);
                    }
                    else { //if (x.org_type == "university") 
                        _this.university.push(x);
                    }
                });
                localStorage.setItem('festDetails', data);
            }
        });
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.runCaraosalHeader();
        this.authenticationService.orgExist = sessionStorage.getItem('currentUser');
        this.authenticationService.userExist = sessionStorage.getItem('userData');
        if (this.authenticationService.userExist) {
            this.authenticationService.getLikesBookedEvents().subscribe(function (data) {
                _this.likedFest = data.liked_fests;
            });
            setTimeout(function () {
                if (_this.likedFest) {
                    _this.likedFest.map(function (x) {
                        var element = document.getElementById(x.id);
                        if (element != undefined) {
                            element.className = 'blast';
                        }
                    });
                }
            }, 2000);
        }
    };
    HomeComponent.prototype.mouseHovering = function () {
        this.isHovering = true;
    };
    HomeComponent.prototype.mouseLeaving = function () {
        this.isHovering = false;
    };
    HomeComponent.prototype.ngAfterViewInit = function () {
        this.runCaraosalHeader();
    };
    HomeComponent.prototype.runCaraosalHeader = function () {
        $(document).ready(function () {
            var owl = $('.slider');
            owl.owlCarousel({
                autoPlay: 4000,
                items: 1,
                itemsMobile: [568, 1],
                itemsTablet: [768, 1],
                // navigation:true,
                loop: true,
                autoplay: true,
                autoplayTimeout: 1000,
                autoplayHoverPause: true
            });
            var owl1 = $('.tab-cara');
            owl1.owlCarousel({
                autoPlay: 4000,
                items: 3,
                itemsMobile: [568, 1],
                itemsTablet: [768, 1],
                navigation: true,
                loop: true,
                autoplay: true,
                autoplayTimeout: 1000,
                autoplayHoverPause: true
            });
            var owl2 = $('.partner');
            owl2.owlCarousel({
                autoPlay: 4000,
                items: 5,
                itemsMobile: [568, 1],
                itemsTablet: [768, 1],
                // navigation:true,
                loop: true,
                autoplay: true,
                autoplayTimeout: 1000,
                autoplayHoverPause: true
            });
            var owl3 = $('.team');
            owl3.owlCarousel({
                autoPlay: 4000,
                items: 5,
                itemsMobile: [568, 1],
                itemsTablet: [768, 1],
                // navigation:true,
                loop: true,
                autoplay: true,
                autoplayTimeout: 1000,
                autoplayHoverPause: true
            });
        });
        $('a[href^="#"]').on('click', function (event) {
            var target = $(this.getAttribute('href'));
            if (target.length) {
                event.preventDefault();
                $('html, body').stop().animate({
                    scrollTop: target.offset().top
                }, 1000);
            }
        });
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.sass */ "./src/app/components/home/home.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], Object])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/organization-dashboard/organization-dashboard.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/organization-dashboard/organization-dashboard.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-organizationheader></app-organizationheader>\n<div class=\"inner-ban\">\n    <img src=\"assets/images/inner-ban.jpg\" alt=\"\">\n</div>\n<section class=\"orgdashboard\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-12 text-center\">\n                <h2>dashboard</h2>\n            </div>\n            <div class=\"col-md-4\">\n                <div class=\"profile-sec\">\n                    <h3>your profile</h3>\n                    <img id=\"imgElem\" alt=\"\">\n                    <ul *ngIf=\"organizationList\">\n                        <li>{{organizationList.name}}</li>\n                        <li>{{organizationList.website}}</li>\n                        <li>{{organizationList.address}}</li>\n                        <li><a routerLink=\"/edit/\">Edit</a></li>\n                    </ul>\n                </div>\n\n            </div>\n            <div class=\"col-md-8\">\n                <div class=\"profile-decp\">\n                    <ul>\n                        <li class=\"active\"><a data-toggle=\"tab\" href=\"#pro-1\">Fest Dashboard</a></li>\n                        <li><a data-toggle=\"tab\" href=\"#pro-2\">Participants</a></li>\n                    </ul>\n                    <div class=\"tab-content\">\n                        <div id=\"pro-1\" class=\"tab-pane fade in active\">\n                            <h3>your events</h3>\n                            <h4>select Fest to edit <span><a routerLink=\"/fest-upload-form/\">+create new fest</a></span></h4>\n                            <table>\n                                <thead>\n                                    <tr>\n                                        <th>no</th>\n                                        <th>fest</th>\n                                        <th>start date</th>\n                                        <th>end date</th>\n                                        <th>select</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr *ngFor=\"let data of  organizationFestList ; let i=index;\" (click)=\"setClickedRow(i)\" [class.active]=\"i == selectedRow\">\n                                        <td> {{i+1}}</td>\n                                        <td> {{data.name}}</td>\n                                        <td> {{data.start_date}}</td>\n                                        <td> {{data.end_date}}</td>\n                                        <td>\n                                            <input type=\"checkbox\" class=\"chk\" (change)=\"gettingSelectedValue($event)\">\n                                        </td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        <!--<div class=\"well well-lg\">\n                                Selected Row : <strong>{{selectedRow}}</strong>\n                            </div>--> \n                            <button (click)=\"delete()\" class=\"del\">delete</button>\n                            <button (click)=\"edit()\" class=\"edit\">edit</button>\n                        </div>\n                        <div id=\"pro-2\" class=\"tab-pane fade\">\n                        </div>\n                    </div>\n                    \n                </div>\n\n            </div>\n        </div>\n    </div>\n</section>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/components/organization-dashboard/organization-dashboard.component.sass":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/organization-dashboard/organization-dashboard.component.sass ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvb3JnYW5pemF0aW9uLWRhc2hib2FyZC9vcmdhbml6YXRpb24tZGFzaGJvYXJkLmNvbXBvbmVudC5zYXNzIn0= */"

/***/ }),

/***/ "./src/app/components/organization-dashboard/organization-dashboard.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/organization-dashboard/organization-dashboard.component.ts ***!
  \***************************************************************************************/
/*! exports provided: OrganizationDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationDashboardComponent", function() { return OrganizationDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../authentication.service */ "./src/app/authentication.service.ts");





var OrganizationDashboardComponent = /** @class */ (function () {
    function OrganizationDashboardComponent(appService, router, authenticationService) {
        this.appService = appService;
        this.router = router;
        this.authenticationService = authenticationService;
        this.setClickedRow = function (index) {
            this.selectedRow = index;
        };
    }
    OrganizationDashboardComponent.prototype.ngOnInit = function () {
        this.gettingFestData();
    };
    OrganizationDashboardComponent.prototype.gettingFestData = function () {
        var _this = this;
        this.appService.specificOrganizationList().subscribe(function (data) {
            if (data == undefined) {
                // this.router.navigate(['home']);
            }
            else {
                _this.organizationList = data["organization"];
                _this.organizationFestList = data["fest"];
                localStorage.setItem('organization', JSON.stringify(_this.organizationList));
                localStorage.setItem('fest', JSON.stringify(_this.organizationFestList));
                var imgae = document.getElementById("imgElem");
                imgae.setAttribute('src', _this.organizationList.image);
            }
        });
    };
    OrganizationDashboardComponent.prototype.gettingSelectedValue = function (e) {
        $('input.chk').on('change', function () {
            $('input.chk').not(this).prop('checked', false);
        });
        //console.log(this.organizationFestList[this.selectedRow.toString()]);
        if (this.selectedRow != undefined) {
            localStorage.setItem('festspecific', JSON.stringify(this.organizationFestList[this.selectedRow.toString()]));
        }
    };
    OrganizationDashboardComponent.prototype.edit = function () {
        if (this.selectedRow != undefined) {
            this.router.navigate(['editfest']);
        }
        else {
            alert('Please Select One Row');
        }
    };
    // delete(){
    //   if(this.selectedRow){
    //     this.organizationFestList.splice(this.selectedRow, 1);
    //   }
    //   else{
    //     alert('Please Select One Row');
    //   }
    // }
    OrganizationDashboardComponent.prototype.delete = function () {
        var _this = this;
        if (this.selectedRow != undefined) {
            var festId = localStorage.getItem('festspecific');
            this.authenticationService.deleteFest(JSON.parse(festId).id).subscribe(function (x) {
                // if (x) {
                alert("deleted Successfully");
                _this.gettingFestData();
                // }
            });
        }
        else {
            alert('Please Select One Row');
        }
    };
    OrganizationDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-organization-dashboard',
            template: __webpack_require__(/*! ./organization-dashboard.component.html */ "./src/app/components/organization-dashboard/organization-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./organization-dashboard.component.sass */ "./src/app/components/organization-dashboard/organization-dashboard.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]])
    ], OrganizationDashboardComponent);
    return OrganizationDashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/organizations/grd-filter.pipe.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/organizations/grd-filter.pipe.ts ***!
  \*************************************************************/
/*! exports provided: GrdFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrdFilterPipe", function() { return GrdFilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GrdFilterPipe = /** @class */ (function () {
    function GrdFilterPipe() {
    }
    GrdFilterPipe.prototype.transform = function (items, filter, defaultFilter) {
        if (!filter) {
            return items;
        }
        if (!Array.isArray(items)) {
            return items;
        }
        if (filter && Array.isArray(items)) {
            var filterKeys_1 = Object.keys(filter);
            if (defaultFilter) {
                return items.filter(function (item) {
                    return filterKeys_1.reduce(function (x, keyName) {
                        return (x && new RegExp(filter[keyName], 'gi').test(item[keyName])) || filter[keyName] == "";
                    }, true);
                });
            }
            else {
                return items.filter(function (item) {
                    return filterKeys_1.some(function (keyName) {
                        return new RegExp(filter[keyName], 'gi').test(item[keyName]) || filter[keyName] == "";
                    });
                });
            }
        }
    };
    GrdFilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'grdFilter'
        })
    ], GrdFilterPipe);
    return GrdFilterPipe;
}());



/***/ }),

/***/ "./src/app/components/organizations/organizations.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/organizations/organizations.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\" this.authenticationService.orgExist\">\n    <app-organizationheader></app-organizationheader>\n</div>\n<div *ngIf=\" this.authenticationService.userExist\">\n    <app-userheader></app-userheader>\n</div>\n\n<div *ngIf=\" this.authenticationService.userExist == undefined &&  this.authenticationService.orgExist == undefined\">\n    <app-header></app-header>\n</div>\n\n<div class=\"inner-ban\">\n    <img src=\"assets/images/inner-ban.jpg\" alt=\"\">\n</div>\n\n<section class=\"registraion-page\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-12 text-center\">\n                <h2>organizations</h2>\n                <input type=\"text\" [(ngModel)]=\"searchText\" placeholder=\"Search..\" autofocus>\n                <table id=\"table\">\n                    <thead>\n                        <tr>\n                            <th>name</th>\n                            <th>type</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let data of  organizationList | grdFilter: {name: searchText, type:searchText,  blog: searchText}; let i=index;\">\n                            <td> {{data.name}}</td>\n                            <td> {{data.type}}</td>\n                        </tr>\n\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n</section>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/components/organizations/organizations.component.sass":
/*!***********************************************************************!*\
  !*** ./src/app/components/organizations/organizations.component.sass ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvb3JnYW5pemF0aW9ucy9vcmdhbml6YXRpb25zLmNvbXBvbmVudC5zYXNzIn0= */"

/***/ }),

/***/ "./src/app/components/organizations/organizations.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/organizations/organizations.component.ts ***!
  \*********************************************************************/
/*! exports provided: OrganizationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationsComponent", function() { return OrganizationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.service */ "./src/app/app.service.ts");
/* harmony import */ var src_app_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/authentication.service */ "./src/app/authentication.service.ts");




var OrganizationsComponent = /** @class */ (function () {
    function OrganizationsComponent(appService, authenticationService) {
        this.appService = appService;
        this.authenticationService = authenticationService;
        this.organizationList = [];
        this.authenticationService.orgExist = sessionStorage.getItem('currentUser');
        this.authenticationService.userExist = sessionStorage.getItem('userData');
    }
    OrganizationsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appService.organizationList().subscribe(function (data) {
            if (data == undefined) {
                // this.router.navigate(['home']);
            }
            else {
                _this.organizationList = data;
            }
        });
    };
    OrganizationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-organizations',
            template: __webpack_require__(/*! ./organizations.component.html */ "./src/app/components/organizations/organizations.component.html"),
            styles: [__webpack_require__(/*! ./organizations.component.sass */ "./src/app/components/organizations/organizations.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"], src_app_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
    ], OrganizationsComponent);
    return OrganizationsComponent;
}());



/***/ }),

/***/ "./src/app/components/pagenotfound/pagenotfound.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/pagenotfound/pagenotfound.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-header bg-transparent border-0\">\n  <h2 class=\"error-code text-center mb-2\">404</h2>\n  <h3 class=\"text-uppercase text-center\">Page Not Found !</h3>\n</div>\n"

/***/ }),

/***/ "./src/app/components/pagenotfound/pagenotfound.component.sass":
/*!*********************************************************************!*\
  !*** ./src/app/components/pagenotfound/pagenotfound.component.sass ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZW5vdGZvdW5kL3BhZ2Vub3Rmb3VuZC5jb21wb25lbnQuc2FzcyJ9 */"

/***/ }),

/***/ "./src/app/components/pagenotfound/pagenotfound.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/pagenotfound/pagenotfound.component.ts ***!
  \*******************************************************************/
/*! exports provided: PagenotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagenotfoundComponent", function() { return PagenotfoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PagenotfoundComponent = /** @class */ (function () {
    function PagenotfoundComponent() {
    }
    PagenotfoundComponent.prototype.ngOnInit = function () {
    };
    PagenotfoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pagenotfound',
            template: __webpack_require__(/*! ./pagenotfound.component.html */ "./src/app/components/pagenotfound/pagenotfound.component.html"),
            styles: [__webpack_require__(/*! ./pagenotfound.component.sass */ "./src/app/components/pagenotfound/pagenotfound.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PagenotfoundComponent);
    return PagenotfoundComponent;
}());



/***/ }),

/***/ "./src/app/components/payment/payment.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/payment/payment.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-userheader></app-userheader>\n<div class=\"inner-ban\">\n    <img src=\"assets/images/inner-ban.jpg\" alt=\"\">\n</div>\n<section class=\"registraion-page\" style=\"padding-bottom: 0px;\">\n    <div class=\"container\">\n        <div class=\"row\">\n         <h2 style=\"text-align: center;\">Order Summary</h2>\n            <div class=\"col-md-offset-3 col-md-6 payment-page\">\n                <table class=\"table table-bordered\" id=\"table\">\n                    <thead>\n                        <tr>\n                            <th>Event Name</th>\n                            <th>Price</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>{{eventData.event_name}}</td>\n                            <td>{{eventData.ticket_price}}</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n</section>\n<section class=\"festspecific-page\">\n    <div class=\"container\">\n        <div class=\"row\">\n\n            <div class=\"col-md-offset-3 col-md-6 payment-page\">\n                <label>Enter Mobile No: </label>\n                <input type=\"text\" [(ngModel)]=\"mobile\" (keypress)=\"onKeyDown($event)\">\n                <label>Enter Email Id: </label>\n                <input type=\"text\" [(ngModel)]=\"email\">\n                 <label>Enter First Name : </label>\n                <input type=\"text\" [(ngModel)]=\"firstName\">\n                 <label>Enter Last Name: </label>\n                <input type=\"text\" [(ngModel)]=\"lastName\">\n                <button (click)=\"confirm()\">Confirm</button>\n                <button (click)=\"cancel()\">Cancel</button>\n            </div>\n        </div>\n    </div>\n</section>\n\n\n\n\n<form *ngIf=\"this.posted.amount\" #form ngNoForm action=\"https://sandboxsecure.payu.in/_payment\" method=\"post\">\n     <input type=\"hidden\" name=\"key\" value=\"{{ MERCHANT_KEY }}\" />\n      <input type=\"hidden\" name=\"hash_string\" value=\"{{ hash_string }}\" />\n      <input type=\"hidden\" name=\"hash\" value=\"{{ hash }}\"/>\n       <input type=\"hidden\" name=\"posted\" value=\"{{ posted }}\"/>\n      <input type=\"hidden\" name=\"txnid\" value=\"{{ txnid }}\" />\n      <table>\n        <tr>\n          <td><b>Mandatory Parameters</b></td>\n        </tr>\n        <tr>\n         <td>Amount: </td>\n          <td><input name=\"amount\" value=\"{{ posted.amount}}\" /></td>\n          <td>First Name: </td>\n          <td><input name=\"firstname\" id=\"firstname\" value=\"{{ posted.firstname}}\" /></td>\n        </tr>\n        <tr>\n          <td>Email: </td>\n          <td><input name=\"email\" id=\"email\" value=\"{{ posted.email}}\" /></td>\n          <td>Phone: </td>\n          <td><input name=\"phone\" value=\"{{ posted.phone}}\" /></td>\n        </tr>\n        <tr>\n          <td>Product Info: </td>\n          <td colspan=\"3\"><textarea name=\"productinfo\">{{ posted.productinfo}}</textarea></td>\n        </tr>\n        <tr>\n          <td>Success URI: </td>\n          <td colspan=\"3\"><input name=\"surl\" value=\"{{ posted.surl }}\" size=\"64\" /></td>\n        </tr>\n        <tr>\n          <td>Failure URI: </td>\n          <td colspan=\"3\"><input name=\"furl\" value=\"{{ posted.furl }}\" size=\"64\" /></td>\n        </tr>\n\n        <tr>\n          <td colspan=\"3\"><input type=\"hidden\" name=\"service_provider\" value=\"payu_paisa\" size=\"64\" /></td>\n        </tr>\n             <tr>\n          <td><b>Optional Parameters</b></td>\n        </tr>\n        <tr>\n          <td>Last Name: </td>\n          <td><input name=\"lastname\" id=\"lastname\" value=\"{{ posted.lastname }}\" /></td>\n          <td>Cancel URI: </td>\n          <td><input name=\"curl\" value=\"\" /></td>\n        </tr>\n        <tr>\n          <td>Address1: </td>\n          <td><input name=\"address1\" value=\"{{ posted.address1 }}\" /></td>\n          <td>Address2: </td>\n          <td><input name=\"address2\" value=\"{{ posted.address2 }}\" /></td>\n        </tr>\n        <tr>\n          <td>City: </td>\n          <td><input name=\"city\" value=\"{{ posted.city }}\" /></td>\n          <td>State: </td>\n          <td><input name=\"state\" value=\"{{ posted.state }}\" /></td>\n        </tr>\n        <tr>\n          <td>Country: </td>\n          <td><input name=\"country\" value=\"{{ posted.country }}\" /></td>\n          <td>Zipcode: </td>\n          <td><input name=\"zipcode\" value=\"{{ posted.zipcode }}\" /></td>\n        </tr>\n        <tr>\n          <td>UDF1: </td>\n          <td><input name=\"udf1\" value=\"{{ posted.udf1 }}\" /></td>\n          <td>UDF2: </td>\n          <td><input name=\"udf2\" value=\"{{ posted.udf2 }}\" /></td>\n        </tr>\n        <tr>\n          <td>UDF3: </td>\n          <td><input name=\"udf3\" value=\"{{ posted.udf3 }}\" /></td>\n          <td>UDF4: </td>\n          <td><input name=\"udf4\" value=\"{{ posted.udf4 }}\" /></td>\n        </tr>\n        <tr>\n          <td>UDF5: </td>\n          <td><input name=\"udf5\" value=\"{{ posted.udf5 }}\" /></td>\n          <td>PG: </td>\n          <td><input name=\"pg\" value=\"{{ posted.PG }}\" /></td>\n        </tr>\n        \n     <td colspan=\"4\"><input type=\"submit\" value=\"Submit\" /></td>\n      \n    \n      </table>\n\n\n  \n </form>\n               "

/***/ }),

/***/ "./src/app/components/payment/payment.component.sass":
/*!***********************************************************!*\
  !*** ./src/app/components/payment/payment.component.sass ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGF5bWVudC9wYXltZW50LmNvbXBvbmVudC5zYXNzIn0= */"

/***/ }),

/***/ "./src/app/components/payment/payment.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/payment/payment.component.ts ***!
  \*********************************************************/
/*! exports provided: PaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentComponent", function() { return PaymentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/authentication.service */ "./src/app/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var PaymentComponent = /** @class */ (function () {
    function PaymentComponent(authenticationService, router, formBuilder) {
        this.authenticationService = authenticationService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.posted = {
            amount: 0,
            firstname: '',
            email: '',
            phone: '',
            productinfo: '',
            surl: '',
            furl: '',
            lastname: '',
            address1: '',
            address2: '',
            city: '',
            state: '',
            country: '',
            zipcode: '',
            udf1: '',
            udf2: '',
            udf3: '',
            udf4: '',
            udf5: '',
            PG: ''
        };
        var ipData;
        debugger;
        this.eventData = JSON.parse(localStorage.getItem('festPaymentDeatils'));
        this.authenticationService.getIP()
            .subscribe(function (data) {
            ipData = JSON.stringify(data);
            localStorage.setItem('ip', ipData);
        });
    }
    PaymentComponent.prototype.ngOnInit = function () {
    };
    PaymentComponent.prototype.onKeyDown = function (e) {
        var charCode = (e.which) ? e.which : e.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        else {
            if (this.mobile != undefined && (this.mobile.trim()).length > 9) {
                return false;
            }
            else {
                return true;
            }
        }
    };
    PaymentComponent.prototype.validateEmail = function () {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(String(this.email).toLowerCase())) {
            return true;
        }
        else {
            return false;
        }
    };
    PaymentComponent.prototype.confirm = function () {
        var _this = this;
        if (this.mobile != undefined && this.email != undefined && this.firstName != undefined && this.lastName != undefined) {
            var credentials = {
                mobile: this.mobile,
                email: this.email,
                firstName: this.firstName,
                lastName: this.lastName
            };
            if (this.validateEmail()) {
                this.authenticationService.paymentDeatailsUser(credentials).subscribe(function (data) {
                    if (data[0]) {
                        _this.MERCHANT_KEY = data[0].MERCHANT_KEY,
                            _this.hash_string = data[0].hash_string,
                            _this.hash = data[0].hashh,
                            _this.posted = data[0].posted,
                            _this.txnid = data[0].txnid,
                            _this.posted.amount = data[0].posted.amount,
                            _this.posted.firstname = data[0].posted.firstname,
                            _this.posted.email = data[0].posted.email,
                            _this.posted.phone = data[0].posted.contact,
                            _this.posted.productinfo = data[0].posted.productinfo,
                            _this.posted.surl = data[0].posted.surl,
                            _this.posted.furl = data[0].posted.furl,
                            _this.posted.lastname = data[0].posted.lastname,
                            _this.posted.address1 = data[0].posted.address1,
                            _this.posted.address2 = data[0].posted.address2,
                            _this.posted.city = data[0].posted.city,
                            _this.posted.state = data[0].posted.state,
                            _this.posted.country = data[0].posted.country,
                            _this.posted.zipcode = data[0].posted.zipcode,
                            _this.posted.udf1 = data[0].posted.udf1,
                            _this.posted.udf2 = data[0].posted.udf2,
                            _this.posted.udf3 = data[0].posted.udf3,
                            _this.posted.udf4 = data[0].posted.udf4,
                            _this.posted.udf5 = data[0].posted.udf5,
                            _this.posted.PG = data[0].posted.PG,
                            setTimeout(function () {
                                _this.submitForm();
                            }, 1000);
                    }
                    else {
                        alert('payment is unSuccessfull');
                    }
                });
            }
            else {
                alert("Please give right email Address");
            }
        }
        else {
            alert("Please give  proper value");
        }
    };
    PaymentComponent.prototype.cancel = function () {
        this.router.navigate(['userdashboard']);
    };
    PaymentComponent.prototype.submitForm = function () {
        this.form.nativeElement.submit();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('form'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], PaymentComponent.prototype, "form", void 0);
    PaymentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-payment',
            template: __webpack_require__(/*! ./payment.component.html */ "./src/app/components/payment/payment.component.html"),
            styles: [__webpack_require__(/*! ./payment.component.sass */ "./src/app/components/payment/payment.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], PaymentComponent);
    return PaymentComponent;
}());



/***/ }),

/***/ "./src/app/components/private-policy/private-policy.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/private-policy/private-policy.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  private-policy works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/private-policy/private-policy.component.sass":
/*!*************************************************************************!*\
  !*** ./src/app/components/private-policy/private-policy.component.sass ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJpdmF0ZS1wb2xpY3kvcHJpdmF0ZS1wb2xpY3kuY29tcG9uZW50LnNhc3MifQ== */"

/***/ }),

/***/ "./src/app/components/private-policy/private-policy.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/private-policy/private-policy.component.ts ***!
  \***********************************************************************/
/*! exports provided: PrivatePolicyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivatePolicyComponent", function() { return PrivatePolicyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PrivatePolicyComponent = /** @class */ (function () {
    function PrivatePolicyComponent() {
    }
    PrivatePolicyComponent.prototype.ngOnInit = function () {
    };
    PrivatePolicyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-private-policy',
            template: __webpack_require__(/*! ./private-policy.component.html */ "./src/app/components/private-policy/private-policy.component.html"),
            styles: [__webpack_require__(/*! ./private-policy.component.sass */ "./src/app/components/private-policy/private-policy.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PrivatePolicyComponent);
    return PrivatePolicyComponent;
}());



/***/ }),

/***/ "./src/app/components/registration/registration.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/registration/registration.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"inner-ban\">\n    <img src=\"assets/images/inner-ban.jpg\" alt=\"\">\n</div>\n<div class=\"registraion-page\">\n    <div class=\"container\">\n        <div class=\"col-md-12 text-center\">\n            <h2>organization form</h2>\n        </div>\n        <div class=\"col-md-6\"></div>\n        <div class=\"col-md-6\"></div>\n        <div class=\"clearfix\"></div>\n        <form [formGroup]=\"registerForm\" (ngSubmit)=\"onRegistrationSubmit()\">\n         \n            <div class=\"form-group\">\n                <div class=\"col-md-4\">\n                    <label>Type</label>\n                </div>\n                <div class=\"col-md-8\">\n                    <select placeholder=\"Select Type\" formControlName=\"type\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && r.type.errors }\" required>\n                        <option value=\"\" disabled selected hidden>Select Your Organization Type</option>\n                        <option value=\"university\">University</option>\n                        <option value=\"pre-university\">Pre-University</option>\n                       \n                            <option value=\"youth\">Youth</option>\n\n                    </select>\n                    <div *ngIf=\"submitted && r.type.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"r.type.errors.required\" class=\"alert alert-danger\">Organization Type is required</div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"clearfix\"></div>\n            <div class=\"form-group\">\n                <div class=\"col-md-4\">\n                    <label>Category</label>\n                </div>\n                <div class=\"col-md-8\">\n                    <select placeholder=\"Select Category\" formControlName=\"org_category\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && r.org_category.errors }\" required>\n                        <option value=\"\" disabled selected hidden>Select Your Organization Category</option>\n                        <option value=\"arts\">Arts</option>\n                        <optgroup label=\"Science\">\n                            <option value=\"engineering\">Engg</option>\n                            <option value=\"medical\">Medical</option>\n                            <option value=\"arch\">Arch</option>\n                        </optgroup>\n                        <option value=\"commerce\">Commerce</option>\n                        <option value=\"youth\">Architecture</option>\n                        <option value=\"youth\">Commerce</option>\n                        <option value=\"youth\">Law</option>\n                        <option value=\"youth\">Liberal Arts</option>\n                    </select>\n                    <div *ngIf=\"submitted && r.type.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"r.org_category.errors.required\" class=\"alert alert-danger\">Organization Category is required</div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"clearfix\"></div>\n            <div class=\"form-group\">\n                <div class=\"col-md-4\">\n                    <label>Organization User ID</label>\n                </div>\n                <div class=\"col-md-8\">\n                    <input type=\"text\" formControlName=\"org_id\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && r.org_id.errors }\" />\n                    <div *ngIf=\"submitted && r.org_id.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"r.org_id.errors.required\" class=\"alert alert-danger\">Organization User ID is required</div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"clearfix\"></div>\n            <div class=\"form-group\">\n                <div class=\"col-md-4\">\n                    <label>Organization User Password</label>\n                </div>\n                <div class=\"col-md-8\">\n                    <input type=\"password\" formControlName=\"org_password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && r.org_password.errors }\" />\n                    <div *ngIf=\"submitted && r.org_password.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"r.org_password.errors.required\" class=\"alert alert-danger\">Organization User Password is required</div>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"clearfix\"></div>\n            <div class=\"form-group\">\n                <div class=\"col-md-4\">\n                    <label>Name of College</label>\n                </div>\n                <div class=\"col-md-8\">\n                    <input type=\"text\" formControlName=\"name\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && r.name.errors }\" />\n                    <div *ngIf=\"submitted && r.name.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"r.name.errors.required\" class=\"alert alert-danger\">Organization Name is required</div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"clearfix\"></div>\n            <div class=\"form-group\">\n                <div class=\"col-md-4\">\n                    <label>Address</label>\n                </div>\n                <div class=\"col-md-8\">\n                    <input type=\"text\" formControlName=\"address\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && r.address.errors }\" />\n                    <div *ngIf=\"submitted && r.address.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"r.address.errors.required\" class=\"alert alert-danger\">Address is required</div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"clearfix\"></div>\n            <div class=\"form-group\">\n                <div class=\"col-md-4\">\n                    <label>Upload College/Organization Photo</label>\n                </div>\n                <div class=\"col-md-8\">\n                    <input type=\"file\" accept=\"image/x-png,image/gif,image/jpeg\" formControlName=\"image\"  name=\"image\" (change)=\"fileChange($event)\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && r.image.errors }\" />\n                    <canvas width=\"300\" height=\"300\" id=\"mycanvas\" style=\"display: none;\"></canvas>\n                    <div *ngIf=\"submitted && r.image.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"r.image.errors.required\" class=\"alert alert-danger\">College Picture is required</div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"clearfix\"></div>\n            <div class=\"form-group\">\n                <div class=\"col-md-4\">\n                    <label>Description</label>\n                </div>\n                <div class=\"col-md-8\">\n                    <input type=\"text\" formControlName=\"description\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && r.description.errors }\" />\n                    <div *ngIf=\"submitted && r.description.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"r.description.errors.required\" class=\"alert alert-danger\">Description is required</div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"clearfix\"></div>\n            <div class=\"form-group\">\n                <div class=\"col-md-4\">\n                    <label>Website</label>\n                </div>\n                <div class=\"col-md-8\">\n                    <input type=\"text\" formControlName=\"website\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && r.website.errors }\" />\n                    <div *ngIf=\"submitted && r.website.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"r.website.errors.required\" class=\"alert alert-danger\">Website is required</div>\n                        <div *ngIf=\"r.website.errors.email\" class=\"alert alert-danger\">Website must be a valid email address</div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"clearfix\"></div>\n\n            <div class=\"col-md-12\">\n                <h5>Contact Details</h5>\n\n            </div>\n            <div class=\"form-group\" style=\"height: 60px;\">\n                <div class=\"col-md-4\">\n                    <label for=\"\"> Main Coordinator: </label>\n                </div>\n                <div class=\"col-md-8\">\n                    <div class=\"col-md-2\">\n                        <label>Name</label>\n                    </div>\n                    <div class=\"col-md-4\">\n                        <input type=\"text\" formControlName=\"main_coordinator_name\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && r.main_coordinator_name.errors }\" />\n                        <div *ngIf=\"submitted && r.main_coordinator_name.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"r.main_coordinator_name.errors.required\" class=\"alert alert-danger\">Name is required</div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-2\">\n                        <label>Phone</label>\n                    </div>\n                    <div class=\"col-md-4\">\n                        <input type=\"text\" formControlName=\"main_coordinator_phone\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && r.main_coordinator_phone.errors }\" />\n                        <div *ngIf=\"submitted && r.main_coordinator_phone.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"r.main_coordinator_phone.errors.required\" class=\"alert alert-danger\">Mobile No. is required</div>\n                            <div *ngIf=\"r.main_coordinator_phone.errors.phone\" class=\"alert alert-danger\">Mobile No Must be a valid Mobile No</div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-2\">\n                        <label>Email</label>\n                    </div>\n                    <div class=\"col-md-10\">\n                        <input type=\"text\" formControlName=\"main_coordinator_email\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && r.main_coordinator_email.errors }\" />\n                        <div *ngIf=\"submitted && r.main_coordinator_email.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"r.main_coordinator_email.errors.required\" class=\"alert alert-danger\">Email is required</div>\n                            <div *ngIf=\"r.main_coordinator_email.errors.email\">Email must be a valid email address</div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"clearfix\"></div>\n            <div class=\"form-group\">\n                <div class=\"col-md-4\">\n                    <label for=\"\"> Secondary Coordinator:</label>\n                </div>\n                <div class=\"col-md-8\">\n                    <div class=\"col-md-2\">\n                        <label>Name</label>\n                    </div>\n                    <div class=\"col-md-4\">\n                        <input type=\"text\" formControlName=\"sub_coordinator_name\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && r.sub_coordinator_name.errors }\" />\n                        <div *ngIf=\"submitted && r.sub_coordinator_name.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"r.sub_coordinator_name.errors.required\" class=\"alert alert-danger\">Name is required</div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-2\">\n                        <label>Phone</label>\n                    </div>\n                    <div class=\"col-md-4\">\n                        <input type=\"text\" formControlName=\"sub_coordinator_phone\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && r.sub_coordinator_phone.errors }\" />\n                        <div *ngIf=\"submitted && r.sub_coordinator_phone.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"r.sub_coordinator_phone.errors.required\"class=\"alert alert-danger\">Mobile No. is required</div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-2\">\n                        <label>Email</label>\n                    </div>\n                    <div class=\"col-md-10\">\n                        <input type=\"text\" formControlName=\"sub_coordinator_email\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && r.sub_coordinator_email.errors }\" />\n                        <div *ngIf=\"submitted && r.sub_coordinator_email.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"r.sub_coordinator_email.errors.required\" class=\"alert alert-danger\">Email is required</div>\n                            <div *ngIf=\"r.sub_coordinator_email.errors.email\">Email must be a valid email address</div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"clearfix\"></div>\n            <!-- <div class=\"col-md-12\">\n                <h5>Event\\Team Manager</h5>\n            </div>\n            <div class=\"form-group\">\n                <div class=\"col-md-4\">\n                    <label>Team</label>\n                </div>\n                <div class=\"col-md-8\">\n                    <input type=\"text\" formControlName=\"team\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && r.team.errors }\" />\n                    <div *ngIf=\"submitted && r.team.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"r.team.errors.required\">Team is required</div>\n                    </div>\n                </div>\n\n            </div>\n            <div class=\"clearfix\"></div>\n            <div class=\"form-group\">\n                <div class=\"col-md-4\">\n                    <label>Name</label>\n                </div>\n                <div class=\"col-md-8\">\n                    <input type=\"text\" formControlName=\"manager_name\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && r.manager_name.errors }\" />\n                    <div *ngIf=\"submitted && r.manager_name.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"r.manager_name.errors.required\">Team Name is required</div>\n                    </div>\n                </div>\n\n            </div>\n            <div class=\"form-group\">\n                <div class=\"col-md-4\">\n                    <label>Phone</label>\n                </div>\n                <div class=\"col-md-8\">\n                    <input type=\"text\" formControlName=\"manager_phone\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && r.manager_phone.errors }\" />\n                    <div *ngIf=\"submitted && r.manager_phone.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"r.manager_phone.errors.required\">Team Name is required</div>\n                    </div>\n                </div>\n\n            </div>-->\n\n            <div class=\"col-md-8\">\n                <re-captcha formControlName=\"recaptchaReactive\"></re-captcha>\n            </div>\n\n            <div class=\"form-group\">\n                <div class=\"col-md-12 text-center\">\n                    <button [disabled]=\"loading\" class=\"btn btn-primary\">Register</button>\n                </div>\n\n            </div>\n\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/registration/registration.component.sass":
/*!*********************************************************************!*\
  !*** ./src/app/components/registration/registration.component.sass ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQuc2FzcyJ9 */"

/***/ }),

/***/ "./src/app/components/registration/registration.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/registration/registration.component.ts ***!
  \*******************************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent(formBuilder, appService, router) {
        this.formBuilder = formBuilder;
        this.appService = appService;
        this.router = router;
        this.submitted = false;
        this.version = _angular_core__WEBPACK_IMPORTED_MODULE_1__["VERSION"].full;
    }
    RegistrationComponent.prototype.ngOnInit = function () {
        this.registerForm = this.formBuilder.group({
            type: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            org_category: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            org_id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            org_password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            address: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            website: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            main_coordinator_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            main_coordinator_phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)]],
            // main_coordinator_phone: ['', [Validators.required]],
            main_coordinator_email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            sub_coordinator_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            sub_coordinator_phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)]],
            // sub_coordinator_phone: ['', [Validators.required]],
            sub_coordinator_email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            // team: ['', [Validators.required]],
            // manager_name: ['', [Validators.required]],
            // manager_phone: ['', [Validators.required,Validators.pattern( /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)]],
            recaptchaReactive: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
    };
    Object.defineProperty(RegistrationComponent.prototype, "r", {
        // convenience getter for easy access to form fields
        get: function () {
            return this.registerForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    RegistrationComponent.prototype.onPaymentSubmit = function () { };
    RegistrationComponent.prototype.fileChange = function (e) {
        var myCanvas = document.getElementById('mycanvas');
        var ctx = myCanvas.getContext('2d');
        var img = new Image();
        img.onload = function () {
            myCanvas.width = img.width;
            myCanvas.height = img.height;
            ctx.drawImage(img, 0, 0);
            //console.log(myCanvas.toDataURL('image/jpeg'));
        };
        img.src = URL.createObjectURL(e.target.files[0]);
        var dataURL = myCanvas.toDataURL('image/jpeg');
        dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
    };
    RegistrationComponent.prototype.onRegistrationSubmit = function () {
        var _this = this;
        this.submitted = true;
        var myCanvas = document.getElementById('mycanvas');
        this.mydataURL = myCanvas.toDataURL('image/jpeg');
        for (var item in this.registerForm.value) {
            if (item == "image") {
                this.registerForm.value[item] = this.mydataURL;
            }
        }
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            // alert("Please enter 10 digit mobile no and Filled all values properly");
            return;
        }
        else {
            this.appService.createOrganization(this.registerForm)
                .subscribe(function (data) {
                if (data == undefined) {
                    _this.router.navigate(['home']);
                }
                else {
                    // alert('Registration Successful');
                    _this.router.navigate(['organization-dashboard']);
                    _this.registerForm.reset();
                }
            });
        }
    };
    RegistrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-registration',
            template: __webpack_require__(/*! ./registration.component.html */ "./src/app/components/registration/registration.component.html"),
            styles: [__webpack_require__(/*! ./registration.component.sass */ "./src/app/components/registration/registration.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], src_app_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], RegistrationComponent);
    return RegistrationComponent;
}());



/***/ }),

/***/ "./src/app/organizationheader/organizationheader.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/organizationheader/organizationheader.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\n    .current-clikable-item {\n        color: #f71769!important;\n    }\n</style>\n<header>\n    <div class=\"top-part\">\n        <div class=\"container\">\n            <div class=\"row\">\n                    <div class=\"col-md-6 col-xs-6\">\n                            <ul class=\"top-socila\">\n                                <li><a href=\"javascript:void(0);\"><i class=\"fab fa-facebook-f\"></i></a></li>\n                                <li><a href=\"javascript:void(0);\"><i class=\"fab fa-twitter\"></i></a></li>\n                                <li><a href=\"javascript:void(0);\"><i class=\"fab fa-instagram\"></i></a></li>\n                            </ul>\n                        </div>\n                        <div class=\"col-md-6 col-xs-6 log-in text-right\">\n                                <div class=\"dropdown\">\n                                        <span><i class=\"fa fa-user-circle\" style=\"font-size:24px;\" *ngIf=\"organizationList\"><span style=\"font-size:20px;vertical-align:middle;font-family:Arial, Helvetica, sans-serif;\"><b>&nbsp;&nbsp;Hi, {{ organizationList.name }}</b></span></i></span>\n                                        <div class=\"dropdown-content dropdown-menu-right\">\n                                                <li class=\"dd-item\">\n                                                    <a class=\"nav-link\" routerLink=\"/orgdashboard/\" routerLinkActive=\"current-clikable-item\" [routerLinkActiveOptions]=\"{exact:true}\">Dashboard</a>\n                                                </li>\n                                                <li class=\"dd-item\">\n                                                    <a class=\"nav-link\" routerLink=\"/fest-upload-form/\" routerLinkActive=\"current-clikable-item\" [routerLinkActiveOptions]=\"{exact:true}\">Create Fest</a>\n                                                </li>\n                                                <li class=\"dd-item\">\n                                                    <a href=\"javascript:void(0);\" class=\"nav-link\"  routerLinkActive=\"current-clikable-item\" [routerLinkActiveOptions]=\"{exact:true}\" (click)=\"this.authenticationService.logout()\">Logout</a>\n                                                </li>\n                                        </div>\n                                      </div>\n                        </div>\n        \n            </div>\n        </div>\n    </div>\n    <div class=\"logo-sec\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-3 col-xs-4 col-sm-2 logo-part\">\n                    <a routerLink=\"/\"><img src=\"assets/images/logo2.png\" alt=\"\"></a>\n                </div>\n                <div class=\"col-md-9 text-right\">\n                    <div id=\"navigation\">\n                        <nav>\n                            <div class=\"collapse navbar-collapse justify-content-end\" id=\"nav-content\">\n                                <ul class=\"navbar-nav navbar-right\" id=\"nav\">\n                                    <li class=\"nav-item\">\n                                        <a class=\"nav-link\" routerLink=\"/\" routerLinkActive=\"current-clikable-item\" [routerLinkActiveOptions]=\"{exact:true}\">Home</a>\n                                    </li>\n                                     <!-- <li class=\"nav-item\">\n                                        <a class=\"nav-link\" routerLink=\"/orgdashboard/\" routerLinkActive=\"current-clikable-item\" [routerLinkActiveOptions]=\"{exact:true}\">Dashboard</a>\n                                    </li>\n                                    <li class=\"nav-item\">\n                                        <a class=\"nav-link\" routerLink=\"/fest-upload-form/\" routerLinkActive=\"current-clikable-item\" [routerLinkActiveOptions]=\"{exact:true}\">Create Fest</a>\n                                    </li> -->\n                                    <li class=\"nav-item\">\n                                        <a class=\"nav-link\" routerLink=\"/fest/\" routerLinkActive=\"current-clikable-item\" [routerLinkActiveOptions]=\"{exact:true}\">Fests</a>\n                                    </li>\n                                    <li class=\"nav-item\">\n                                        <a class=\"nav-link\" routerLink=\"/organizations/\" routerLinkActive=\"current-clikable-item\" [routerLinkActiveOptions]=\"{exact:true}\">organizations</a>\n                                    </li>\n                                    <li class=\"nav-item\"><a href=\"#contact\">contact us</a></li>\n                                    <li class=\"nav-item\"><a href=\"#map-sec\">location</a></li>\n                                     <!-- <li class=\"nav-item\"><a href=\"javascript:void(0);\" class=\"nav-link\"  routerLinkActive=\"current-clikable-item\" [routerLinkActiveOptions]=\"{exact:true}\" (click)=\"this.authenticationService.logout()\">Logout</a></li> -->\n                                    </ul>\n                                    </div>\n                                </nav>\n                    </div>\n                </div>\n               \n            </div>\n        </div>\n    </div>\n</header>"

/***/ }),

/***/ "./src/app/organizationheader/organizationheader.component.sass":
/*!**********************************************************************!*\
  !*** ./src/app/organizationheader/organizationheader.component.sass ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZ2FuaXphdGlvbmhlYWRlci9vcmdhbml6YXRpb25oZWFkZXIuY29tcG9uZW50LnNhc3MifQ== */"

/***/ }),

/***/ "./src/app/organizationheader/organizationheader.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/organizationheader/organizationheader.component.ts ***!
  \********************************************************************/
/*! exports provided: OrganizationheaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationheaderComponent", function() { return OrganizationheaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.service */ "./src/app/app.service.ts");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../authentication.service */ "./src/app/authentication.service.ts");




var OrganizationheaderComponent = /** @class */ (function () {
    function OrganizationheaderComponent(appService, authenticationService) {
        this.appService = appService;
        this.authenticationService = authenticationService;
    }
    OrganizationheaderComponent.prototype.ngOnInit = function () {
        this.gettingFestData();
    };
    OrganizationheaderComponent.prototype.gettingFestData = function () {
        var _this = this;
        this.appService.specificOrganizationList().subscribe(function (data) {
            if (data == undefined) {
                // this.router.navigate(['home']);
            }
            else {
                _this.organizationList = data["organization"];
                localStorage.setItem('organization', JSON.stringify(_this.organizationList));
            }
        });
    };
    OrganizationheaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-organizationheader',
            template: __webpack_require__(/*! ./organizationheader.component.html */ "./src/app/organizationheader/organizationheader.component.html"),
            styles: [__webpack_require__(/*! ./organizationheader.component.sass */ "./src/app/organizationheader/organizationheader.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"], _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
    ], OrganizationheaderComponent);
    return OrganizationheaderComponent;
}());



/***/ }),

/***/ "./src/app/orgauth.service.ts":
/*!************************************!*\
  !*** ./src/app/orgauth.service.ts ***!
  \************************************/
/*! exports provided: OrgauthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrgauthService", function() { return OrgauthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var OrgauthService = /** @class */ (function () {
    function OrgauthService(_router) {
        this._router = _router;
    }
    OrgauthService.prototype.canActivate = function (route, state) {
        //console.log(this._router.url,state.url)
        if (sessionStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this._router.navigate(['/home'], { queryParams: { returnUrl: state.url } });
        alert('Please login with right Credentials ');
        return false;
    };
    OrgauthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], OrgauthService);
    return OrgauthService;
}());



/***/ }),

/***/ "./src/app/userheader/userheader.component.html":
/*!******************************************************!*\
  !*** ./src/app/userheader/userheader.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\n    .current-clikable-item {\n        color: #f71769!important;\n    }\n</style>\n<header>\n  <div class=\"top-part\">\n      <div class=\"container\">\n          <div class=\"row\">\n                <div class=\"col-md-6 col-xs-6\">\n                        <ul class=\"top-socila\">\n                            <li><a href=\"javascript:void(0);\"><i class=\"fab fa-facebook-f\"></i></a></li>\n                            <li><a href=\"javascript:void(0);\"><i class=\"fab fa-twitter\"></i></a></li>\n                            <li><a href=\"javascript:void(0);\"><i class=\"fab fa-instagram\"></i></a></li>\n                        </ul>\n                    </div>\n                    <div class=\"col-md-6 col-xs-6 log-in text-right\">\n                            <div class=\"dropdown\">\n                                    <span><i class=\"fa fa-user-circle\" style=\"font-size:24px\"></i></span>\n                                    <div class=\"dropdown-content dropdown-menu-right\">\n                                            <li class=\"dd-item\">\n                                                    <a class=\"nav-link\" routerLink=\"/userdashboard/\" routerLinkActive=\"current-clikable-item\" [routerLinkActiveOptions]=\"{exact:true}\">Dashboard</a>\n                                            </li>\n                                            <li class=\"dd-item\">\n                                                <a class=\"nav-link\" routerLink=\"/fest-upload-form/\" routerLinkActive=\"current-clikable-item\" [routerLinkActiveOptions]=\"{exact:true}\">Create Fest</a>\n                                            </li>\n                                            <li class=\"dd-item\">\n                                                <a href=\"javascript:void(0);\" class=\"nav-link\"  routerLinkActive=\"current-clikable-item\" [routerLinkActiveOptions]=\"{exact:true}\" (click)=\"this.authenticationService.logout()\">Logout</a>\n                                            </li>\n                                    </div>\n                                  </div>\n                    </div>\n    \n          </div>\n      </div>\n  </div>\n  <div class=\"logo-sec\">\n      <div class=\"container\">\n          <div class=\"row\">\n              <div class=\"col-md-3 col-xs-4 col-sm-2 logo-part\">\n                  <a routerLink=\"/\"><img src=\"assets/images/logo2.png\" alt=\"\"></a>\n              </div>\n              <div class=\"col-md-9 text-right\">\n                  <div id=\"navigation\">\n                       <nav>\n                            <div class=\"collapse navbar-collapse justify-content-end\" id=\"nav-content\">\n                                <ul class=\"navbar-nav navbar-right\" id=\"nav\">\n                                    <li class=\"nav-item\">\n                                        <a class=\"nav-link\" routerLink=\"/\" routerLinkActive=\"current-clikable-item\" [routerLinkActiveOptions]=\"{exact:true}\">Home</a>\n                                    </li>\n                                     <li class=\"nav-item\">\n                                        <!-- <a class=\"nav-link\" routerLink=\"/userdashboard/\" routerLinkActive=\"current-clikable-item\" [routerLinkActiveOptions]=\"{exact:true}\">Dashboard</a> -->\n                                    </li>\n                                    <li class=\"nav-item\">\n                                        <a class=\"nav-link\" routerLink=\"/fest/\" routerLinkActive=\"current-clikable-item\" [routerLinkActiveOptions]=\"{exact:true}\">Fests</a>\n                                    </li>\n                                    <li class=\"nav-item\">\n                                        <a class=\"nav-link\" routerLink=\"/organizations/\" routerLinkActive=\"current-clikable-item\" [routerLinkActiveOptions]=\"{exact:true}\">organizations</a>\n                                    </li>\n                                    <li class=\"nav-item\"><a href=\"#contact\">contact us</a></li>\n                                    <li class=\"nav-item\"><a href=\"#map-sec\">location</a></li>\n                                     <!-- <li class=\"nav-item\"><a href=\"javascript:void(0);\" class=\"nav-link\"  routerLinkActive=\"current-clikable-item\" [routerLinkActiveOptions]=\"{exact:true}\" (click)=\"this.authenticationService.logout()\">Logout</a></li> -->\n                                    </ul>\n                                    </div>\n                                </nav>\n                  </div>\n              </div>\n             \n          </div>\n      </div>\n  </div>\n</header>"

/***/ }),

/***/ "./src/app/userheader/userheader.component.sass":
/*!******************************************************!*\
  !*** ./src/app/userheader/userheader.component.sass ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJoZWFkZXIvdXNlcmhlYWRlci5jb21wb25lbnQuc2FzcyJ9 */"

/***/ }),

/***/ "./src/app/userheader/userheader.component.ts":
/*!****************************************************!*\
  !*** ./src/app/userheader/userheader.component.ts ***!
  \****************************************************/
/*! exports provided: UserheaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserheaderComponent", function() { return UserheaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../authentication.service */ "./src/app/authentication.service.ts");



var UserheaderComponent = /** @class */ (function () {
    function UserheaderComponent(authenticationService) {
        this.authenticationService = authenticationService;
    }
    UserheaderComponent.prototype.ngOnInit = function () {
    };
    UserheaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-userheader',
            template: __webpack_require__(/*! ./userheader.component.html */ "./src/app/userheader/userheader.component.html"),
            styles: [__webpack_require__(/*! ./userheader.component.sass */ "./src/app/userheader/userheader.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], UserheaderComponent);
    return UserheaderComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/300057491/Documents/learn/Festify_FrontEnd/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map