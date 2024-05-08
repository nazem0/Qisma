import { NgClass, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, input } from '@angular/core';
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
import { TeamMember } from '../../../api/models';

@Component({
  selector: 'app-team-member-actions',
  templateUrl: './team-member-actions.component.html',
  styleUrls: ['./team-member-actions.component.css'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    CheckboxModule,
    InputTextareaModule,
    NgIf,
    NgClass
  ]
})
export class TeamMemberActionsComponent implements OnInit {
  form?: FormGroup;
  @Input() isManager = false;
  @Output() createEvent = new EventEmitter()
  @Input() teamMember?: TeamMember;
  constructor(
    private _fb: FormBuilder,
    private _aboutService: AboutQismaService
  ) { }

  ngOnInit(): void {
    console.log(this.teamMember);

    this.initForm();
  }
  initForm() {
    this.form = this._fb.group({
      image: new FormControl<File | null>(null, [Validators.required]),
      name: new FormControl<string>(this.teamMember?.name!, [Validators.required]),
      jobTitle: new FormControl<string>(this.teamMember?.jobTitle!, [Validators.required]),
      summary: new FormControl<string>(this.teamMember?.summary!, [Validators.required]),
      facebookLink: new FormControl<string>(this.teamMember?.facebookLink ?? ''),
      xLink: new FormControl<string>(this.teamMember?.xLink ?? ''),
      instagramLink: new FormControl<string>(this.teamMember?.instagramLink ?? ''),
      linkedInLink: new FormControl<string>(this.teamMember?.linkedInLink ?? ''),
      isManager: new FormControl<boolean>(this.teamMember?.isManager ?? this.isManager, [Validators.required]),
    });
  }
  submit() {
    if (this.form?.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this._aboutService
      .apiDashboardAboutQismaAddTeamMemberPost$Json({ body: this.form?.value })
      .subscribe({
        next: () => {
          this.createEvent.emit()
        }
      })
  }

  update() {

    let updateFromGroup: FormGroup = this._fb.group({
      id: new FormControl<number>(this.teamMember!.id!, [Validators.required])
    });

    for (const controlName in this.form?.controls) {
      const control = this.form?.controls[controlName];
      if (!control.dirty) continue;
      updateFromGroup.addControl(controlName, control);
    }

    this._aboutService
      .apiDashboardAboutQismaUpdateTeamMemberPut$Json({ body: updateFromGroup.value })
      .subscribe({
        next: () => {
          this.createEvent.emit()
        }
      })
  }

  setImageFile(event: Event) {
    let target = event.target as HTMLInputElement;
    this.form?.get('image')?.setValue(target.files?.item(0));
    this.form?.get('image')?.markAsTouched()
    this.form?.get('image')?.markAsDirty()
  }
}
