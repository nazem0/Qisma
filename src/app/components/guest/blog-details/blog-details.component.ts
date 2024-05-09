import { BlogService } from './../../../api/services/blog.service';
import { Component, Input, OnInit } from '@angular/core';
import { Blog } from '../../../api/models';
import { Helper } from '../../../helpers/helper';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ConfirmComponent } from '../../shared/confirm/confirm.component';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css'],
  standalone: true,
  imports:[DividerModule, RouterModule, ConfirmComponent, ButtonModule]
})
export class BlogDetailsComponent implements OnInit {
  blog?: Blog;
  blogId?: number;
  helper = Helper;
  isInAdminPanel :boolean;
  constructor(private _route: ActivatedRoute, private _blog: BlogService, private _router:Router) {
    this.isInAdminPanel = this._route.snapshot.data['isAdmin']

  }
  ngOnInit() {
    this.getIdParam();
  }
  getIdParam() {
    this._route.paramMap.subscribe({
      next: (next) => {
        this.blogId = parseInt(next.get('id')!);
        this.getBlogById();
      },
    });
  }

  getBlogById() {
    this._blog.apiBlogGetByIdGet$Json({ BlogId: this.blogId! }).subscribe({
      next: (next) => {
        this.blog = next.data;
      },
    });
  }

  deleteBlog(id:number){
    this._blog
    .apiDashboardBlogDeleteDelete$Json({BlogId:id})
    .subscribe({
      next:()=>this._router.navigate(['../../'], {relativeTo:this._route})
    })
  }
}
