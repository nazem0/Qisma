import { Component, Input, OnInit } from '@angular/core';
import { Blog } from '../../../api/models';
import { Helper } from '../../../helpers/helper';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.css'],
  standalone:true
})
export class BlogCardComponent implements OnInit {

  @Input() blog?: Blog;
  constructor() {}

  ngOnInit() {}
  getBackgroundImage(imageUrl: string) {
    return `url('${Helper.processFileUrl(imageUrl)}')`;
  }
}
