import { NavbarComponent } from './../../layout/navbar/navbar.component';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent {
 form: FormGroup;
 constructor(
  private _formBuilder:FormBuilder,
  private _router:Router
 ){
  this.form = this._formBuilder.group({
    email:new FormControl<string>("",[Validators.required, Validators.email])
  })
 }
 forgetPassword(){
 }
}
