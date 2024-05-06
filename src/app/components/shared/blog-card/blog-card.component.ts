import { Component, Input, OnInit } from '@angular/core';
import { Blog } from '../../../api/models';
import { Helper } from '../../../helpers/helper';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { TooltipModule } from 'primeng/tooltip';
import { TruncateTextPipe } from '../../../pipes/truncate-text.pipe';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.css'],
  standalone: true,
  imports: [RouterModule, TooltipModule, TruncateTextPipe],
})
export class BlogCardComponent implements OnInit {
  @Input() blog?: Blog;
  isInAdminPanel : boolean;
  constructor(private route:ActivatedRoute) {
    this.isInAdminPanel = this.route.snapshot.data['isAdmin']
  }

  ngOnInit() {}
  getBackgroundImage(imageUrl: string) {
    return `url('${Helper.processFileUrl(imageUrl)}')`;
  }
}
