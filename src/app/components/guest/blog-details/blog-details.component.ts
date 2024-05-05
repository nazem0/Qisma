import { BlogService } from './../../../api/services/blog.service';
import { Component, Input, OnInit } from '@angular/core';
import { Blog } from '../../../api/models';
import { Helper } from '../../../helpers/helper';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css'],
  standalone: true,
  imports:[MatDividerModule, RouterModule]
})
export class BlogDetailsComponent implements OnInit {
  blog?: Blog;
  blogId?: number;
  helper = Helper;
  constructor(private _route: ActivatedRoute, private _blog: BlogService) {}
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
}
