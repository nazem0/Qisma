import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Helper } from '../../../services/helper';
import { DialogService } from '../../../services/dialog.service';
import { UserAccountService } from '../../../api/services';
import { AuthHelper } from '../../../services/auth-helper';
import { NgIf } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { Router, RouterModule } from '@angular/router';
import { Roles } from '../../../enums/roles.enum';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  standalone: true,
  imports: [
    NgIf,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
    RouterModule
  ]
})
export class LoginComponent {
  form: FormGroup;
  hidePassword: boolean = true;
  helper = Helper;
  constructor(
    private _formbuilder: FormBuilder,
    private _userAccountService: UserAccountService,
    private _authHelper: AuthHelper,
    private router: Router
  ) {

    this.form = this._formbuilder.group({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required]),
    })

  }

  login(): void {
    this
      ._userAccountService
      .apiSignInPost$Json({ body: this.form.value })
      .subscribe({
        next: next => {
          this._authHelper.login(next.data!);

          let previousUrl = sessionStorage.getItem("previous-url")
          if (previousUrl) {
            sessionStorage.removeItem("previous-url")
          }
          if (this._authHelper.hasRole(Roles.Admin)) {
            this.router.navigate(["/admin/"]);
          }
          else if (this._authHelper.hasRole(Roles.Customer)) {
            if (previousUrl) {
              this.router.navigateByUrl(previousUrl);
            }
            else{
              this.router.navigate(["/profile/"]);
            }
          }
        }
      })
  }

  toggleHidePassword(): void {
    this.hidePassword = !this.hidePassword;
  }
}
