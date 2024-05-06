import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { AboutQismaService } from '../../../api/services';
import { AboutUsViewModel } from '../../../api/models';
import { ButtonModule } from 'primeng/button';
import { EditorModule } from 'primeng/editor';
import { FloatLabelModule } from 'primeng/floatlabel';

@Component({
  selector: 'app-edit-about-us',
  templateUrl: './edit-about-us.component.html',
  styleUrls: ['./edit-about-us.component.css'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputTextModule,
    InputTextareaModule,
    ButtonModule,
    EditorModule,
    FloatLabelModule
  ],
})
export class EditAboutUsComponent implements OnInit {
  form?: FormGroup;
  about?:AboutUsViewModel;
  constructor(
    private _fb: FormBuilder,
    private _aboutService:AboutQismaService
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.initData();
  }

  initForm() {
    this.form = this._fb.group({
      firstFrame: new FormControl<string>(this.about?.firstFrame!, [Validators.required]),
      secondFrameTitle: new FormControl<string>(this.about?.secondFrameTitle!, [Validators.required]),
      secondFrameDescription: new FormControl<string>(this.about?.secondFrameDescription!, [
        Validators.required,
      ]),
    });
  }

  initData(){
    this._aboutService
    .apiAboutQismaGetAboutUsGet$Json()
    .subscribe({
      next:next=>{
        this.about = next.data
        this.initForm();
      }
    })
  }

  sumbit() {
    if(this.form?.invalid){
      this.form.markAllAsTouched();
      return;
    }
    this._aboutService
    .apiDashboardAboutQismaUpdateAboutUsPut$Json({body:this.form?.value})
    .subscribe()
  }
}
