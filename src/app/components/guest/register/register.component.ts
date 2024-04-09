import { UserAccountService } from './../../../api/services/user-account.service';
import { BusinessHelper } from './../../../services/business-helper';
import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Helper } from '../../../services/helper';
import { AuthHelper } from '../../../services/auth-helper';
import { DialogService } from '../../../services/dialog.service';
import { CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input-gg';
import { InvestoreType } from '../../../api/models';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  encapsulation: ViewEncapsulation.None
})
export class RegisterComponent {
  minDate = Helper.getDateByYears(80)
  defaultDate = Helper.getDateByYears(32);
  nationalIdImage?: string;
  form: FormGroup;
  hidePassword: boolean = true;
  countryISO = CountryISO;
  phoneNumber? : {
    countryCode: string;
    dialCode: string;
    e164Number: string;
    internationalNumber: string;
    nationalNumber: string;
    number: string;
  };
  investorTypes = BusinessHelper.investoreTypes
  constructor(
    private _formbuilder: FormBuilder,
    private _userAccountService:UserAccountService,
    private _snackbar:MatSnackBar
  ) {
    this.form = this._formbuilder.group({
      firstName: new FormControl<string>("", [Validators.required]),
      middleName: new FormControl<string>("", [Validators.required]),
      lastName: new FormControl<string>("", [Validators.required]),
      phoneNumber: new FormControl<string>("", [Validators.required]),
      email: new FormControl<string>("", [Validators.required, Validators.email]),
      dateOfBirth: new FormControl<string>("", [Validators.required]),
      address: new FormControl<string>("", [Validators.required]),
      identityNumber: new FormControl<string>("", [Validators.required]),
      identityImage: new FormControl<string>("", [Validators.required]),
      occupation: new FormControl<string>(""),
      companyName: new FormControl<string>(""),
      receiveEmails: new FormControl<boolean | undefined>(undefined, [Validators.required]),
      investorType: new FormControl<InvestoreType | undefined>(undefined, [Validators.required]),
      password: new FormControl<string>("", [Validators.required, Validators.pattern(Helper.passwordRegEx)]),
    })
  }


  nationalIdImageInput(event: Event) {
    const reader = new FileReader();
    reader.onload = () => {
      this.nationalIdImage = reader.result as string;
    }
    reader.readAsDataURL((event.target as HTMLInputElement).files![0])
    this.onFileUpload(event, "identityImage")
  }

  onFileUpload(event: Event, formControlName: string): void {
    let files = (event.target as HTMLInputElement).files
    if (!files || !files.length){
      this._snackbar.open("Please select a file first");
      return;
    }
    let selectedFile = files[0]
    Helper.onFileUpload(selectedFile, this.form.controls[formControlName])
  }



  toggleHidePassword() {
    this.hidePassword = !this.hidePassword;
  }

  test(){
    console.log(this.form.value);
  }
  submit() {
    if(this.form.invalid) return;
    this
    ._userAccountService
    .apiSignUpForCustomerPost$Json({body:this.form.value})
    .subscribe()
  }

  setDateOfBirth(date: Date) {    
    const localDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
    this.form.controls["dateOfBirth"].setValue(localDate.toISOString());
  }

}
