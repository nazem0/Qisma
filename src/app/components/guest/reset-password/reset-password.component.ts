import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { Helper } from '../../../services/helper';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.css',
  standalone:true,
  imports:[
    NgIf,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule
  ]
})
export class ResetPasswordComponent {
  form: FormGroup;
  helper = Helper;
  hidePassword = true;
  constructor(
    private _formBuilder: FormBuilder,
    private _router:Router
  ) {
    this.form = this._formBuilder.group({
      code: new FormControl<string>("", [Validators.required]),
      email: new FormControl<string>("", [Validators.required]),
      newPassword: new FormControl<string>("", [Validators.required, Validators.pattern(Helper.passwordRegEx)])
    })
  }
  submitForm() {
  }

  toggleHidePassword() {
    this.hidePassword = !this.hidePassword
  }
}
