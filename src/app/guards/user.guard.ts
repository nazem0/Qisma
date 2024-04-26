import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthHelper } from '../helpers/auth-helper';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IndexableObject } from 'ng-zorro-antd/core/types';
@Injectable()
export class UserAuthGuard implements CanActivate, CanActivateChild {
  constructor(
    private router: Router,
    private _authHelper: AuthHelper,
    private _snackbar: MatSnackBar) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    console.log(route, state);

    if (this._authHelper.getAuth()) {
      return true;
    } else {
      this._snackbar.open("You are not allowed to view this page, please login first.", 'ok', { duration: 10000 })
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