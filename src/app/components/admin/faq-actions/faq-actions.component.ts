import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FaqService } from '../../../api/services';
import { Faq } from '../../../api/models';

@Component({
  selector: 'app-faq-actions',
  templateUrl: './faq-actions.component.html',
  styleUrls: ['./faq-actions.component.css'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputTextModule,
    InputTextareaModule,
    ButtonModule,
  ],
})
export class FaqActionsComponent implements OnInit {
  @Output() createEvent = new EventEmitter();
  @Input() faq?: Faq
  form?: FormGroup;
  constructor(private _fb: FormBuilder, private _faqService: FaqService) {
  }

  ngOnInit() {
    this.initForm();
  }
  initForm() {
    this.form = this._fb.group({
      question: new FormControl<string>(this.faq?.question!, [Validators.required]),
      answer: new FormControl<string>(this.faq?.answer!, [Validators.required]),
    });
  }

  submit() {
    if (this.form?.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this._faqService
      .apiDashboardFaqAddPost$Json({ body: this.form?.value })
      .subscribe({
        next: () => {
          this.createEvent.emit();
        },
      });
  }

  update() {

    let updateFromGroup: FormGroup = this._fb.group({
      id: new FormControl<number>(this.faq?.id!, [Validators.required])
    });

    for (const controlName in this.form?.controls) {
      const control = this.form?.controls[controlName];
      if (!control.dirty) continue;
      updateFromGroup.addControl(controlName, control);
    }

    this._faqService
      .apiFaqUpdatePut$Json({ body: updateFromGroup.value })
      .subscribe({ next: () => this.createEvent.emit() })
  }
}
