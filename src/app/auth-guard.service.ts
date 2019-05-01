import { Injectable }     from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
//import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private _router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      if (sessionStorage.getItem('userData')) {
          // logged in so return true
          return true;
      }
      // not logged in so open Sign In modal to login
      document.getElementById("signInButton").click();
      return false;
      }
}