import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";

@Injectable()
export class UserAuthService implements CanActivate {
  constructor() {}

  canActivate(): boolean {
    if (sessionStorage.getItem("userData")) {
      // logged in so return true
      return true;
    }
    // not logged in so open Sign In modal to login
    document.getElementById("signInButton").click();
    return false;
  }
}
