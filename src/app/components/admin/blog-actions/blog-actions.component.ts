import { BlogService } from '../../../api/services/blog.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
import { Blog } from '../../../api/models';

@Component({
  selector: 'app-blog-actions',
  templateUrl: './blog-actions.component.html',
  styleUrls: ['./blog-actions.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, InputTextModule, EditorModule, ButtonModule],
})
export class BlogActionsComponent implements OnInit {
  form?: FormGroup;
  @Output() createEvent = new EventEmitter();
  @Input() blogId?: number;
  blog?: Blog;
  constructor(private _fb: FormBuilder, private _blog: BlogService) { }

  ngOnInit() {
    this.initForm();
    if (this.blogId) {
      this.getBlogById();
    }
  }
  initForm() {
    this.form = this._fb.group({
      title: new FormControl(this.blog?.title, [Validators.required]),
      description: new FormControl(this.blog?.description, [Validators.required]),
      link: new FormControl(this.blog?.link,/*[Validators.required]*/),
      image: new FormControl<File | null>(null, [Validators.required]),
    });
  }

  getBlogById() {
    this._blog
      .apiBlogGetByIdGet$Json({ BlogId: this.blogId! })
      .subscribe({
        next: next => {
          this.blog = next.data
          this.initForm()
        }
      })
  }

  sumbit() {
    if (this.form?.invalid) {
      this.form?.markAllAsTouched();
      return;
    }
    this._blog
      .apiDashboardBlogAddPost$Json({ body: this.form?.value })
      .subscribe({ next: () => this.createEvent.emit() });
  }

  update() {

    let updateFromGroup: FormGroup = this._fb.group({
      id: new FormControl<number>(this.blogId!, [Validators.required])
    });

    for (const controlName in this.form?.controls) {
      const control = this.form?.controls[controlName];
      if (!control.dirty) continue;
      updateFromGroup.addControl(controlName, control);
    }

    this._blog
      .apiDashboardBlogUpdatePut$Json({ body: updateFromGroup.value })
      .subscribe({
        next: () => {
          this.createEvent.emit()
        }
      })
  }

  setImageFile(event: Event) {
    let target = event.target as HTMLInputElement;
    this.form?.get('image')?.setValue(target.files?.item(0));
    this.form?.get('image')?.markAsDirty()
  }
}
