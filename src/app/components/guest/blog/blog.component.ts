import { Blog } from '../../../api/models';
import { BlogCardComponent } from '../../shared/blog-card/blog-card.component';
import { BlogService } from '../../../api/services/blog.service';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  standalone:true,
  imports:[
    BlogCardComponent,
    RouterModule
  ]
})
export class BlogComponent implements OnInit {
  blogs:Blog[] = []
  constructor(
    private _blog:BlogService
  ) { }

  ngOnInit() {
    this.getBlogs();
  }

  getBlogs(){
    this._blog
    .apiBlogGetAllGet$Json()
    .subscribe({
      next:next=>{
        this.blogs = next.data ?? []
      }
    })
  }
}
