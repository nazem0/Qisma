import { Blog } from '../../../api/models';
import { BlogCardComponent } from '../../shared/blog-card/blog-card.component';
import { BlogService } from '../../../api/services/blog.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { BlogActionsComponent } from '../../admin/blog-actions/blog-actions.component';
import { ConfirmComponent } from '../../shared/confirm/confirm.component';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  standalone: true,
  imports: [
    BlogCardComponent,
    RouterModule,
    ButtonModule,
    DialogModule,
    BlogActionsComponent,
    ConfirmComponent,
  ],
})
export class BlogComponent implements OnInit {
  blogs: Blog[] = [];
  selectedBlog?: Blog;
  createBlogModal = false;
  isInAdminPanel: boolean;
  @Input() withRouterLink = true;
  @Input() slice = 0;
  constructor(private _blog: BlogService, private _route: ActivatedRoute) {
    this.isInAdminPanel = this._route.snapshot.data['isAdmin'];
  }

  ngOnInit() {
    this.getBlogs();
  }

  getBlogs() {
    this._blog.apiBlogGetAllGet$Json().subscribe({
      next: (next) => {
        this.blogs = next.data ?? [];
      },
    });
  }

  deleteBlog(id: number) {
    this._blog.apiDashboardBlogDeleteDelete$Json({ BlogId: id }).subscribe({
      next: () => this.getBlogs(),
    });
  }
}
