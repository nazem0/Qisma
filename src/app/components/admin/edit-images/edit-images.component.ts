import { PropertyForAdminService } from './../../../api/services/property-for-admin.service';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Helper } from '../../../services/helper';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginComponent } from '../../guest/login/login.component';

@Component({
  selector: 'app-edit-images',
  templateUrl: './edit-images.component.html',
  styleUrl: './edit-images.component.css'
})
export class EditImagesComponent {
  @ViewChild("uploadedFiles") uploadedFiles!: ElementRef
  // postAttachments: IPostAttachmentCustom[] | null = null
  propertyId?: number;
  images: string[] = [];
  imagesForUpload:Blob[] = [];
  data: FormData;
  inputArray: any[] = [];
  readers: any[] = [];
  files: FileList | null = null;
  filesUploaded: boolean = false;
  helper=Helper;
  constructor
    (
      private activatedRoute: ActivatedRoute,
      private router: Router,
      private snackBar: MatSnackBar,
      private propertyForAdminService: PropertyForAdminService
    ) {
    this.data = new FormData();
    this.activatedRoute.paramMap.subscribe({
      next: params => {
        this.propertyId = parseInt(params.get("id")!)
        if (isNaN(this.propertyId))
          this.router.navigate(["404"]);
        else
          this.getAttachments();
      }
    })
  }

  ngAfterViewInit(): void {
    let nativeElement = this.uploadedFiles.nativeElement;
    nativeElement.addEventListener("change", () => {
      if (nativeElement.files) {
        this.files = nativeElement.files;
      }
      this.filesUploaded = nativeElement.files?.length;
      for (let index = 0; index < nativeElement.files!.length; index++) {
        this.readers[index] = new FileReader();
        this.readers[index].readAsDataURL(nativeElement.files![index]);
        this.readers[index].onload = (_event: any) => {
          this.inputArray!.push(this.readers[index].result);
        };
      }
    })
  }

  getAttachments() {
    this
      .propertyForAdminService
      .apiDashboardPropertyImagesGetAllGet$Json({ "PropertyId": this.propertyId! })
      .subscribe(
        {
          next: next => {
            this.images = next.data??[];
          }
        }
      )

  }

  addAttachmnets() {
    if (!this.files || this.files.length <= 0) {
      this.snackBar.open("You Have To Add Attachments First",'Close',{"duration":1000})
      return;
    }
    this.data.set("PropertyId", this.propertyId!.toString())
    for (let i = 0; i < this.files?.length!; i++) {
      this.imagesForUpload.push(this.files?.item(i) as Blob);
    }
    this
    .propertyForAdminService
    .apiDashboardPropertyImagesAddPost$Json({body:{PropertyId:this.propertyId!, Images:this.imagesForUpload}}).subscribe({
      next: () => {
        this.getAttachments();
        this.snackBar.open("Images Added Successfully",'Close',{"duration":1000})
        this.files = null;
        this.data = new FormData();
        this.inputArray = [];
        this.readers = [];
      }
    })
  }
  // delete(index:number){
  //   this.files?.item(index);
    
  //   this.inputArray.splice(index,1);
  // }
  // delete(attachmentId: number | string) {
  //   this.postService.DeleteAttachment(attachmentId).subscribe({
  //     next: () => {
  //       this.toastr.success("تم الحذف")
  //       this.getAttachments();
  //       this.files = null;
  //       this.data = new FormData();
  //     },
  //     error: error => {
  //       console.log(error);
  //       this.toastr.error("حاول مرة أخرى", "فشل الحذف")
  //     }
  //   })
  // }
}
