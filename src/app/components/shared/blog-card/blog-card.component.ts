import { Component, Input, OnInit } from '@angular/core';
import { Blog } from '../../../api/models';
import { Helper } from '../../../helpers/helper';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.css'],
  standalone:true,
  imports:[RouterModule]
})
export class BlogCardComponent implements OnInit {

  @Input() blog?: Blog;
  constructor() {}

  ngOnInit() {}
  getBackgroundImage(imageUrl: string) {
    return `url('${Helper.processFileUrl(imageUrl)}')`;
  }
}
