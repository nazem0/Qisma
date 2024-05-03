import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FaqService } from '../../../api/services';

@Component({
  selector: 'app-create-faq',
  templateUrl: './create-faq.component.html',
  styleUrls: ['./create-faq.component.css'],
  standalone:true,
  imports:[
    ReactiveFormsModule,
    InputTextModule,
    InputTextareaModule,
    ButtonModule
  ]
})
export class CreateFaqComponent implements OnInit {
  form!:FormGroup;
  constructor(
    private _fb:FormBuilder,
    private _faqService:FaqService
  ) {
    this.initForm();
  }

  ngOnInit() {
  }

  initForm(){
    this.form = this._fb.group({
      question:new FormControl<string>('', [Validators.required]),
      answer:new FormControl<string>('', [Validators.required])
    })
  }

  submit(){
    console.log("Here");

    this._faqService
    .apiDashboardFaqAddPost$Json(this.form.value)
    .subscribe()
  }

}
