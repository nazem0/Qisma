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
import { Helper } from '../../../helpers/helper';
import { DialogModule } from 'primeng/dialog';

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
    FloatLabelModule,
    DialogModule
  ],
})
export class EditAboutUsComponent implements OnInit {
  form?: FormGroup;
  helper = Helper;
  about?:AboutUsViewModel;
  imageModal = false;
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
      firstFrame: new FormControl<string>(this.about?.firstFrame!),
      firstFrameImage: new FormControl<File|null>(null),
      secondFrameTitle: new FormControl<string>(this.about?.secondFrameTitle!),
      secondFrameDescription: new FormControl<string>(this.about?.secondFrameDescription!),
      thirdFrameTitle: new FormControl<string>(this.about?.thirdFrameTitle!),
      firstSectionTitle: new FormControl<string>(this.about?.firstSectionTitle!),
      firstSectionDescription: new FormControl<string>(this.about?.firstSectionDescription!),
      secondSectionTitle: new FormControl<string>(this.about?.secondSectionTitle!),
      secondSectionDescription: new FormControl<string>(this.about?.secondSectionDescription!),
      thirdSectionTitle: new FormControl<string>(this.about?.thirdSectionTitle!),
      thirdSectionDescription: new FormControl<string>(this.about?.thirdSectionDescription!),
      fourthSectionTitle: new FormControl<string>(this.about?.fourthSectionTitle!),
      fourthSectionDescription: new FormControl<string>(this.about?.fourthSectionDescription!),
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
    .subscribe({
      next:()=>this.initData()
    })
  }

  setImage(event:Event){
    let file = (event.target as HTMLInputElement).files?.item(0)
    let control = this.form?.get('firstFrameImage');
    control?.setValue(file);
    this.form?.get('firstFrameImage')?.markAsDirty();
  }
}
