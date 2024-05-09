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
import { ImageCroppedEvent, ImageCropperComponent } from 'ngx-image-cropper';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { DialogModule } from 'primeng/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Helper } from '../../../helpers/helper';

@Component({
  selector: 'app-blog-actions',
  templateUrl: './blog-actions.component.html',
  styleUrls: ['./blog-actions.component.css'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputTextModule,
    EditorModule,
    ButtonModule,
    ImageCropperComponent,
    DialogModule
  ],
})
export class BlogActionsComponent implements OnInit {
  form?: FormGroup;
  cropperModal = false;
  croppedImageUrl: SafeUrl | null = null;
  blogId?: number;
  blog?: Blog;
  imageChangedEvent?: Event;
  helper = Helper;
  constructor(
    private _fb: FormBuilder,
    private _blog: BlogService,
    private _route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private _router: Router
  ) { }

  ngOnInit() {
    this.initForm();
    this.getBlogIdParam();
  }
  initForm() {
    this.form = this._fb.group({
      title: new FormControl(this.blog?.title, [Validators.required]),
      description: new FormControl(this.blog?.description, [
        Validators.required,
      ]),
      link: new FormControl(this.blog?.link /*[Validators.required]*/),
      image: new FormControl<File | null>(null, [Validators.required]),
    });
  }

  getBlogIdParam() {
    this._route.paramMap.subscribe({
      next: next => {
        let idPrarm = next.get('id')
        if (idPrarm) {
          this.blogId = parseInt(idPrarm)
          this.getBlogById()
        }
      }
    })
  }

  getBlogById() {
    this._blog.apiBlogGetByIdGet$Json({ BlogId: this.blogId! }).subscribe({
      next: (next) => {
        this.blog = next.data;
        this.initForm();
      },
    });
  }

  sumbit() {
    if (this.form?.invalid) {
      this.form?.markAllAsTouched();
      return;
    }
    this._blog
      .apiDashboardBlogAddPost$Json({ body: this.form?.value })
      .subscribe({ next: () => this._router.navigate(['..'], { relativeTo: this._route }) });
  }

  update() {
    let updateFromGroup: FormGroup = this._fb.group({
      id: new FormControl<number>(this.blogId!, [Validators.required]),
    });

    for (const controlName in this.form?.controls) {
      const control = this.form?.controls[controlName];
      if (!control.dirty) continue;
      updateFromGroup.addControl(controlName, control);
    }

    this._blog
      .apiDashboardBlogUpdatePut$Json({ body: updateFromGroup.value })
      .subscribe({ next: () => this._router.navigate(['../../details/' + this.blogId], { relativeTo: this._route }) });
  }

  setImageFile(event: Event) {
    let target = event.target as HTMLInputElement;
    this.form?.get('image')?.setValue(target.files?.item(0));
    this.form?.get('image')?.markAsDirty();
    this.cropperModal = true
  }

  imageCropped(event: ImageCroppedEvent) {
    console.log(event);

    if (event.objectUrl) {


      this.croppedImageUrl =
        this.sanitizer
          .bypassSecurityTrustUrl(event.objectUrl);

      let originalFileName = (this.imageChangedEvent?.target as HTMLInputElement).files?.item(0)?.name!

      this.form?.get('image')?.setValue(new File([event.blob!], originalFileName))
    }
  }

  fileChangeEvent(event: Event): void {
    this.imageChangedEvent = event;
  }
}
