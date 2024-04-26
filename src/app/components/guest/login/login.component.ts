import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Helper } from '../../../helpers/helper';
import { UserAccountService } from '../../../api/services';
import { AuthHelper } from '../../../helpers/auth-helper';
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
          this._authHelper.handleLogin(next.data!);
        }
      })
  }

  toggleHidePassword(): void {
    this.hidePassword = !this.hidePassword;
  }
}
