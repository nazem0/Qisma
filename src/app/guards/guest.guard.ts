import { inject } from '@angular/core';
import { Router, type CanActivateFn } from '@angular/router';
import { AuthHelper } from '../helpers/auth-helper';

export const GuestGuard: CanActivateFn = (route, state) => {
  let _authHelper = inject(AuthHelper);
  let _router = inject(Router)

  if (_authHelper.checkLogin()) {
    _router.navigate(['/home'])
    return false;
  }
  else {
    return true;
  }
};
