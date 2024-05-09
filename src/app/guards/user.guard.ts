import { inject } from '@angular/core';
import { Router, type CanActivateFn } from '@angular/router';
import { AuthHelper } from '../helpers/auth-helper';
import { Roles } from '../enums/roles.enum';
import { MatSnackBar } from '@angular/material/snack-bar';

export const UserGuard: CanActivateFn = (route, state) => {
  
  let _authHelper = inject(AuthHelper);
  let _snackbar = inject(MatSnackBar);
  let _router = inject(Router)

  if (_authHelper.hasRole(Roles.Customer)) {
    return true;
  }

  else if (_authHelper.isLoggedIn) {
    _snackbar.open("You are unauthorized to view this page.", 'ok', { duration: 10000 })
    _router.navigate(['/home'])
    return false;
  }
  
  else {
    _snackbar.open("You are not allowed to view this page, please login first.", 'ok', { duration: 10000 })
    _router.navigate(['/login'])
    return false;
  }
};
