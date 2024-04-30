import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgxIntlTelInputModule, CountryISO } from 'ngx-intl-tel-input-gg';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import {
  InvestorType,
  UserFullInformationViewModel,
} from '../../../../api/models';
import { UserAccountService } from '../../../../api/services';
import { AuthHelper } from '../../../../helpers/auth-helper';
import { BusinessHelper } from '../../../../helpers/business-helper';
import { Helper } from '../../../../helpers/helper';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-edit-profile-info',
  templateUrl: './edit-profile-info.component.html',
  styleUrl: './edit-profile-info.component.css',
  standalone: true,
  imports: [
    NgIf,
    ReactiveFormsModule,
    IconFieldModule,
    InputIconModule,
    CalendarModule,
    FormsModule,
    NgxIntlTelInputModule,
    DropdownModule,
    InputTextModule,
    ButtonModule,
    DialogModule,
  ],
})
export class EditProfileInfoComponent implements OnInit {
  @Output() dataChangedEvent = new EventEmitter();
  helper = Helper;
  showIdImage = false;
  @Input() user!: UserFullInformationViewModel;
  minDate = Helper.getDateByYears(80);
  defaultDate = Helper.getDateByYears(32);
  nationalIdImage?: string;
  form?: FormGroup;
  hidePassword: boolean = true;
  countryISO = CountryISO;
  selectedInvestorType?: {
    id: number;
    name: string;
  };
  selectedBirthDate?: Date;
  receiveEmailSelectedOption = '';
  phoneNumber: {
    countryCode?: string;
    dialCode?: string;
    e164Number?: string;
    internationalNumber?: string;
    nationalNumber?: string;
    number: string;
  } = { number: '' };
  investorTypes = BusinessHelper.investoreTypes;
  constructor(
    private _formbuilder: FormBuilder,
    private _userAccountService: UserAccountService,
    private _snackbar: MatSnackBar
  ) {}
  ngOnInit(): void {
    this.initData();
  }
  initData() {
    this.form = this._formbuilder.group({
      firstName: new FormControl<string>(this.user.firstName!, [
        Validators.required,
      ]),
      middleName: new FormControl<string>(this.user.middleName!, [
        Validators.required,
      ]),
      lastName: new FormControl<string>(this.user.lastName!, [
        Validators.required,
      ]),
      phoneNumber: new FormControl<string>(this.user.phoneNumber!, [
        Validators.required,
      ]),
      email: new FormControl<string>(this.user.email!, [
        Validators.required,
        Validators.email,
      ]),
      dateOfBirth: new FormControl<string>(this.user.dateOfBirth!, [
        Validators.required,
      ]),
      address: new FormControl<string>(this.user.address!, [
        Validators.required,
      ]),
      identityNumber: new FormControl<string>(this.user.identityNumber!, [
        Validators.required,
      ]),
      identityImage: new FormControl<Blob | undefined>(undefined),
      occupation: new FormControl<string>(this.user.occupation ?? ''),
      companyName: new FormControl<string>(this.user.companyName ?? ''),
      receiveEmails: new FormControl<boolean | undefined>(
        this.user.reciveEmails!,
        [Validators.required]
      ),
      investorType: new FormControl<InvestorType>(this.user.investorTypeId!, [
        Validators.required,
      ]),
    });

    this.phoneNumber.number = this.user.phoneNumber!;
    this.selectedInvestorType = {
      id: this.user.investorTypeId!,
      name: this.user.investorType!,
    };
    this.receiveEmailSelectedOption = this.user.reciveEmails ? 'Yes' : 'No';
    this.selectedBirthDate = new Date(this.user.dateOfBirth!);
    console.log(this.selectedBirthDate);
  }

  nationalIdImageInput(event: Event) {
    const reader = new FileReader();
    reader.onload = () => {
      this.nationalIdImage = reader.result as string;
    };
    reader.readAsDataURL((event.target as HTMLInputElement).files![0]);
    this.onFileUpload(event, 'identityImage');
  }

  onFileUpload(event: Event, formControlName: string): void {
    let files = (event.target as HTMLInputElement).files;
    if (!files || !files.length) {
      this._snackbar.open('Please select a file first');
      return;
    }
    let selectedFile = files[0];
    Helper.onFileUpload(selectedFile, this.form!.controls[formControlName]);
  }

  submit() {
    if (this.form?.invalid) return;
    let touchedDirtyFormGroup: FormGroup = new FormGroup([]);

    // Iterate over each control in the existing form
    Object.keys(this.form!.controls).forEach((controlName) => {
      const control = this.form!.get(controlName);

      // Check if the control is touched and dirty
      if (control && control.dirty && control.touched) {
        // Add the control to the new form group
        touchedDirtyFormGroup.addControl(controlName, control);
      }
    });
    this._userAccountService
      .apiUserUpdateInformationPut$Json({ body: touchedDirtyFormGroup.value })
      .subscribe({
        next:()=>this.dataChangedEvent.emit()
      });
  }

  setDateOfBirth(date: Date) {
    const localDate = new Date(
      date.getTime() - date.getTimezoneOffset() * 60000
    );
    this.form!.controls['dateOfBirth'].setValue(localDate.toISOString());
  }

  showIdImageModal() {
    this.showIdImage = true;
  }
}
