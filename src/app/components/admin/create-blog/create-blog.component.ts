import { BlogService } from './../../../api/services/blog.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { EditorModule } from 'primeng/editor';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, InputTextModule, EditorModule, ButtonModule],
})
export class CreateBlogComponent implements OnInit {
  form?: FormGroup;
  @Output() createEvent = new EventEmitter();
  constructor(private _fb: FormBuilder, private _blog: BlogService) {}

  ngOnInit() {
    this.initForm();
  }
  initForm() {
    this.form = this._fb.group({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      link: new FormControl('' /*[Validators.required]*/),
      image: new FormControl<File | null>(null, [Validators.required]),
    });
  }

  sumbit() {
    this.form?.markAllAsTouched();
    this._blog
      .apiDashboardBlogAddPost$Json({ body: this.form?.value })
      .subscribe({ next: () => this.createEvent.emit() });
  }

  setImageFile(event: Event) {
    let target = event.target as HTMLInputElement;
    this.form?.get('image')?.setValue(target.files?.item(0));
  }
}
