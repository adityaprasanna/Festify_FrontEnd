import { Injectable }     from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class OrgauthService {

  constructor(private _router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    //console.log(this._router.url,state.url)
      if (sessionStorage.getItem('currentUser')) {
          // logged in so return true
          return true;
      }
      // not logged in so redirect to login page with the return url
      this._router.navigate(['/home'], 
      { queryParams: { returnUrl: state.url }});
      alert('Please login with right Credentials ');
      return false;
      }
}
