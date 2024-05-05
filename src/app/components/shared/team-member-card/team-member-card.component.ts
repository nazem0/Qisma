import { Helper } from './../../../helpers/helper';
import { Component, Input, OnInit } from '@angular/core';
import { TeamMember } from '../../../api/models';
import { NgIf } from '@angular/common';
import { TruncateTextPipe } from '../../../pipes/truncate-text.pipe';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-team-member-card',
  templateUrl: './team-member-card.component.html',
  styleUrls: ['./team-member-card.component.css'],
  standalone:true,
  imports:[NgIf, TruncateTextPipe, TooltipModule]
})
export class TeamMemberCardComponent implements OnInit {
  helper = Helper;
  @Input() member? :TeamMember;
  constructor() { }

  ngOnInit() {
  }

}
