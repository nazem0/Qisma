import { map } from 'rxjs/operators';
import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FileUploadHandlerEvent } from 'primeng/fileupload';
import { Helper } from '../../../services/helper';
import { AuthHelper } from '../../../services/auth-helper';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../shared/dialog/dialog.component';
import { DialogService } from '../../../services/dialog.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  encapsulation: ViewEncapsulation.None
})
export class RegisterComponent {
  minDate = Helper.getDateByYears(80)
  maxDate = Helper.getDateByYears(8);
  defaultDate = Helper.getDateByYears(20);
  agreement: boolean = false;
  nationalIdImage: string | null = null;
  personalImage: string | null = null;
  form: FormGroup;
  hidePassword: boolean = true;
  birthDate: Date | string = "";
  above16 = false;
  helper = Helper;
  registrationErrors: string[] = [];
  policiesAr : string[];
  policesEn : string[];
  constructor(
    private _formbuilder: FormBuilder,
    private _authHelper: AuthHelper,
    private dialog: DialogService,
    public _helper:Helper
  ) {
    this.form = this._formbuilder.group({
      fullName: new FormControl<string>("", [Validators.required]),
      gender: new FormControl<number | null>(null, [Validators.required]),
      dateOfBirth: new FormControl<string>("", [Validators.required]),
      personalImage: new FormControl<Blob | null>(null, [Validators.required]),
      nationalId: new FormControl<string>(""),
      nationalIdImage: new FormControl<Blob | null>(null),
      email: new FormControl<string>("", [Validators.required, Validators.email]),
      phoneNumber: new FormControl<string>("", [Validators.required]),
      password: new FormControl<string>("", [Validators.required, Validators.pattern(Helper.passwordRegEx)]),
    })

    this.policiesAr = [
      "نادي بالم هيلز و الشركة المنظمة غير مسؤلين عن اي اصابات او حوادث خطيرة تهدد الحياة او لا قدر الله موت بسبب الاشتراك بالحدث و او العب بالبطولة.",
      "الالتزام التام لجميع الفرق الرياضية المشاركة و اللاعبين المشاركين في البطولات المختلفة بتعليمات اللجنة المنظمة و ادارة نادي بالم هيلز.",
      "الالتزام التام لجميع الفرق الرياضية المشاركة و اللاعبين المشاركين في البطولات المختلفة وعدم الاعتراض علي الحكام واللجنة المنظمة للبطولة.",
      "ثمن اشتراك الفرق الرياضية في البطولات المختلفة  لايسترد نهائيا بعد اعلان جدول البطولات.",
      "من حق اللجنة المنظمة طرد وعدم مشاركة اي فريق رياضي او اي لاعب غير ملتزم بالتعليمات ومخالفته للقواعد العامة للبطولات.",
      "التزام جميع الفرق الرياضية بالاداب العامة وعدم اصدار اية الفاظ خادشة للحياء مما يطرد اللاعب او الفريق للطرد نهائيا من البطولة ولا يسترد اية مبالغ مالية كاشتراكات البطولة.",
      "الالتزام بالقواعد العامة بالسلوك الاخلاقي ومبدا اللعب النظيف ولن يسمح باي تجاوز لفظي او مادي من جانب المشاركين تجاه بعضهم او تجاه الحكام.",
      "وفى حال حدوث شغب من لاعب أو فريق أو إدارى يتم شطب الفريق نهائيًا بقرار من اللجنة المنظمة."
  ];
  this.policesEn =
    [
      "Palm Hills Club & the organizers aren’t to be hold responsible of any injuries, life threatening conditions or deaths resulting from participating at the event & or playing at the tournaments.",
      "Full commitment by all participating sports teams and players in different tournaments to the instructions of the organizing committee and the management of Palm Hills Club.",
      "Full commitment by all participating sports teams and players in different tournaments to not objecting to the referees and the organizing committee of the championship.",
      "The participation fee for sports teams in different tournaments is non-refundable after announcing the tournament schedule.",
      "The organizing committee has the right to dismiss and not allow the participation of any sports team or player who is not committed to the instructions and violates the general rules of the tournaments.",
      "All sports teams are required to adhere to general manners and not use any inappropriate language that may lead to the expulsion of the player or team permanently from the tournament, with no refund of any financial amounts such as tournament fees.",
      "Compliance with the general rules of ethical behavior and fair play will be enforced, and any verbal or material violations towards each other or the referees will not be allowed.",
      "In case of misconduct by a player, team, or administrator, the team will be permanently disqualified by the decision of the organizing committee."
  ]
  }

  personalImageInput(event: Event) {
    const reader = new FileReader();
    reader.onload = () => {
      this.personalImage = reader.result as string;
    }
    reader.readAsDataURL((event.target as HTMLInputElement).files![0])
    this.onFileUpload(event, "personalImage")
  }

  nationalIdImageInput(event: Event) {
    const reader = new FileReader();
    reader.onload = () => {
      this.nationalIdImage = reader.result as string;
    }
    reader.readAsDataURL((event.target as HTMLInputElement).files![0])
    this.onFileUpload(event, "nationalIdImage")
  }

  onFileUpload(event: Event, formControlName: string): void {
    let files = (event.target as HTMLInputElement).files
    if (!files || !files.length) throw "No Selected File";
    let selectedFile = files[0]
    Helper.onFileUpload(selectedFile, this.form.controls[formControlName])
  }

  register() {
    if (this.form.invalid || !this.agreement) {
      this.registrationErrors = [];
      Object.keys(this.form.controls).forEach(controlName => {
        const control = this.form.get(controlName);
        if (control && control.errors) {
          this.registrationErrors.push(`${controlName[0].toUpperCase() + controlName.slice(1)} is invalid`);
        }
      });
      if (!this.agreement) {
        this.registrationErrors.push('You must agree to the Terms & Conditions.');
      }
      this.openErrorsDialog();
      return;
    }
    let phoneControl = this.form.get("phoneNumber");
    let phoneNumberWithSpaces = phoneControl?.value as string;
    phoneControl?.setValue(phoneNumberWithSpaces.replaceAll(" ", ""))
    let nationalIdControl = this.form.get("nationalId");
    let nationalIdWithSpaces = nationalIdControl?.value as string;
    nationalIdControl?.setValue(nationalIdWithSpaces.replaceAll(" ", ""))
  }

  toggleHidePassword() {
    this.hidePassword = !this.hidePassword;
  }

  checkAge(birthDate: Date) {
    let nationalIdControl = this.form.controls["nationalId"]
    let nationalIdImageControl = this.form.controls["nationalIdImage"]


    this.above16 = Helper.checkAge(birthDate)
    if (this.above16) {
      this.form.controls["nationalId"].addValidators(Validators.required);
      this.form.controls["nationalIdImage"].addValidators(Validators.required);
    }
    else {
      nationalIdControl.removeValidators(Validators.required);
      nationalIdImageControl.removeValidators(Validators.required);
    }
    nationalIdControl.updateValueAndValidity();
    nationalIdImageControl.updateValueAndValidity();
    const localDate = new Date(birthDate.getTime() - birthDate.getTimezoneOffset() * 60000);    
    this.form.controls["dateOfBirth"].setValue(localDate.toISOString());

  }

  openErrorsDialog() {
    this.dialog.open("Registration Errors", [this.registrationErrors]);
  }

  openPoliciesDialog() {
    this.dialog.open("قواعد عامة - General Policies", [this.policiesAr,this.policesEn])
  }
}
