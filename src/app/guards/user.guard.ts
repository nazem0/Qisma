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
import { MessageService } from 'primeng/api';
@Injectable()
export class UserAuthGuard implements CanActivate, CanActivateChild {
  constructor(private router:Router, private _authHelper:AuthHelper, private messageService:MessageService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this._authHelper.getAuth()) {
      return true;
    } else {
      this.messageService.add(
        { severity: 'error', summary:"Unauthorized", detail: "You are not allowed to view this page, please login first.", life: 10000 },
      )
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