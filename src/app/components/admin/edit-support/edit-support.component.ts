import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { NgxIntlTelInputModule, CountryISO } from 'ngx-intl-tel-input-gg';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { SupportViewModel } from '../../../api/models';
import { AboutQismaService } from '../../../api/services';

@Component({
  selector: 'app-edit-support',
  templateUrl: './edit-support.component.html',
  styleUrls: ['./edit-support.component.css'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    IconFieldModule,
    InputIconModule,
    CalendarModule,
    FormsModule,
    NgxIntlTelInputModule,
    DropdownModule,
    InputTextModule,
    ButtonModule,
  ],
})
export class EditSupportComponent implements OnInit {
  support?: SupportViewModel;
  form?: FormGroup;
  countryISO = CountryISO;
  phoneNumber?: {
    countryCode?: string;
    dialCode?: string;
    e164Number?: string;
    internationalNumber?: string;
    nationalNumber?: string;
    number: string;
  };
  constructor(
    private _aboutQismaService: AboutQismaService,
    private _fb: FormBuilder
  ) {}

  ngOnInit() {
    this.initForm();
    this.getSupportData();
  }

  getSupportData() {
    this._aboutQismaService.apiAboutQismaGetSupportGet$Json().subscribe({
      next: (next) => {
        this.support = next.data;
        this.initForm();
        this.phoneNumber = {
          number: next.data?.supportPhoneNumber!,
        };
        console.log(this.phoneNumber);
      },
    });
  }

  initForm() {
    this.form = this._fb.group({
      supportEmail: new FormControl<string>(this.support?.supportEmail!, [
        Validators.required,
        Validators.email,
      ]),
      supportPhoneNumber: new FormControl<string>(
        this.support?.supportPhoneNumber!,
        [Validators.required]
      ),
    });
  }

  sumbit(){
    this._aboutQismaService
    .apiDashboardAboutQismaUpdateSupportPut$Json({
      body:this.form?.value
    })
    .subscribe()
  }
}
