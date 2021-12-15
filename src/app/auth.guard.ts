import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router:Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    // let roles = route.data['roles'] as string[];

    // if (localstorage.getItem('user') or roles.indexOf(user.role) <= -1) {
    //   return true;
    // }

    let returnUrl = state.url;
    return this.router.createUrlTree(['/not-authorized'], {
      queryParams: {
        returnUrl: returnUrl
      }
    });

    //return true;
  }

}
