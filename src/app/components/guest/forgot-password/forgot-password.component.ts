import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css',
  standalone:true,
  imports:[
    ReactiveFormsModule,
    ButtonModule,
    RouterModule,
    InputTextModule
  ]
})
export class ForgotPasswordComponent {
 form: FormGroup;
 constructor(
  private _formBuilder:FormBuilder,
 ){
  this.form = this._formBuilder.group({
    email:new FormControl<string>("",[Validators.required, Validators.email])
  })
 }
 forgetPassword(){
 }
}
