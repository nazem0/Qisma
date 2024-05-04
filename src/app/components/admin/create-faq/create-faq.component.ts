import { Component, EventEmitter, Input, OnInit, Output, input, output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FaqService } from '../../../api/services';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-create-faq',
  templateUrl: './create-faq.component.html',
  styleUrls: ['./create-faq.component.css'],
  standalone:true,
  imports:[
    ReactiveFormsModule,
    InputTextModule,
    InputTextareaModule,
    ButtonModule,
  ]
})
export class CreateFaqComponent implements OnInit {
  @Output() createEvent = new EventEmitter();
  form!:FormGroup;
  constructor(
    private _fb:FormBuilder,
    private _faqService:FaqService,
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
    this._faqService
    .apiDashboardFaqAddPost$Json({body:this.form.value})
    .subscribe({
      next:()=>{
        this.createEvent.emit();
      }
    })
  }

}
