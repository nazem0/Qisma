import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthHelper } from '../services/auth-helper';
import { MatSnackBar } from '@angular/material/snack-bar';
@Injectable()
export class AdminAuthGuard implements CanActivate, CanActivateChild {
  constructor(
    private router:Router,
    private _authHelper:AuthHelper,
    private _snackbar:MatSnackBar) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this._authHelper.hasRole("Admin")) {
      return true;
    } 
    else if(this._authHelper.isLoggedIn){
        this._snackbar.open("You are unauthorized to view this page.", 'ok', {duration:10000})
        this.router.navigate(['/home'])
        return false;
    }
    else {
      this._snackbar.open("You are not allowed to view this page, please login first.", 'ok', {duration:10000})
      this.router.navigate(['/login'])
      return false;
    }
  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.canActivate(route, state);
  }
}