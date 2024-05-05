import { NgClass, NgIf } from '@angular/common';
import { Component, Input, OnInit, input } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  ReactiveFormsModule,
} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { AboutQismaService } from '../../../api/services';

@Component({
  selector: 'app-create-team-member',
  templateUrl: './create-team-member.component.html',
  styleUrls: ['./create-team-member.component.css'],
  standalone:true,
  imports:[
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    CheckboxModule,
    InputTextareaModule,
    NgIf,
    NgClass
  ]
})
export class CreateTeamMemberComponent implements OnInit {
  form?: FormGroup;
  @Input() isManager = false;
  constructor(
    private _fb: FormBuilder,
    private _aboutService:AboutQismaService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }
  initForm(){
    this.form = this._fb.group({
      image: new FormControl<File | null>(null, [Validators.required]),
      name: new FormControl<string>('', [Validators.required]),
      jobTitle: new FormControl<string>('', [Validators.required]),
      summary: new FormControl<string>('', [Validators.required]),
      facebookLink: new FormControl<string>(''),
      xLink: new FormControl<string>(''),
      instagramLink: new FormControl<string>(''),
      linkedInLink: new FormControl<string>(''),
      isManager: new FormControl<boolean>(this.isManager, [Validators.required]),
    });
  }
  submit(){
    this._aboutService
    .apiDashboardAboutQismaAddTeamMemberPost$Json({body:this.form?.value})
    .subscribe()
  }

  setImageFile(event:Event){
    let target = event.target as HTMLInputElement;
    this.form?.get('image')?.setValue(target.files?.item(0));
  }
}
