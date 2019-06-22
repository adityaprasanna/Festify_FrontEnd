import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
import {
  Router,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from "@angular/router";
@Injectable({
  providedIn: "root"
})
export class OrgAuthService implements CanActivate {
  constructor(private _router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (sessionStorage.getItem("token")) {
      // logged in so return true
      return true;
    }
    // not logged in so redirect to login page with the return url
    this._router.navigate(["/home"], { queryParams: { returnUrl: state.url } });
    alert("Please login with right Credentials ");
    return false;
  }
}
