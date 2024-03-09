import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Helper } from '../../../services/helper';
import { AuthHelper } from '../../../services/auth-helper';
import { DialogService } from '../../../services/dialog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  form: FormGroup;
  hidePassword: boolean = true;
  helper = Helper;
  loginErrors : string[]=[];
  constructor(
    private _formbuilder: FormBuilder,
    private _authHelper : AuthHelper,
    private _dialog:DialogService,
    private _router:Router
  ) {

    _authHelper.isLoggedIn.subscribe({
      next:next=>{
        if(next)
        this._router.navigate(['home'])
      }
    })
    this.form = this._formbuilder.group({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required]),
    })

  }

  login(): void {
    if (this.form.invalid) {
      this.loginErrors = [];
      Object.keys(this.form.controls).forEach(controlName => {
        const control = this.form.get(controlName);
        if (control && control.errors) {
          this.loginErrors.push(`${controlName[0].toUpperCase() + controlName.slice(1)} is invalid`);
        }
      });
      this._dialog.open("Login Errors",[this.loginErrors])
      return;
    }
  }

  toggleHidePassword(): void {
    this.hidePassword = !this.hidePassword;
  }
}
