import { Component, Input, OnInit } from '@angular/core';
import { Blog } from '../../../api/models';
import { Helper } from '../../../helpers/helper';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.css'],
  standalone: true,
  imports: [RouterModule],
})
export class BlogCardComponent implements OnInit {
  @Input() blog?: Blog;
  isInAdminPanel : boolean;
  constructor(private route:ActivatedRoute) {
    this.isInAdminPanel = route.snapshot.data['isAdmin']
  }

  ngOnInit() {}
  getBackgroundImage(imageUrl: string) {
    return `url('${Helper.processFileUrl(imageUrl)}')`;
  }
}
