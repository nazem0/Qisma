import { Component, OnInit } from '@angular/core';
import { AboutQismaService } from '../../../api/services';
import { AboutUsViewModel, TeamViewModel } from '../../../api/models';
import { TeamMemberCardComponent } from '../../shared/team-member-card/team-member-card.component';
import { Helper } from '../../../helpers/helper';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
  standalone: true,
  imports:[TeamMemberCardComponent, DividerModule]
})
export class AboutUsComponent implements OnInit {
  aboutUs?: AboutUsViewModel;
  managers?: TeamViewModel;
  team?:TeamViewModel;
  helper = Helper;
  constructor(private _aboutService: AboutQismaService) {}

  ngOnInit() {
    this.getAboutData();
    this.getAllManagers();
    this.getAllMembers();
  }

  getAboutData() {
    this._aboutService.apiAboutQismaGetAboutUsGet$Json().subscribe({
      next: (next) => {
        this.aboutUs = next.data;
      },
    });
  }

  getAllManagers() {
    this._aboutService.apiAboutQismaGetAllManagersGet$Json().subscribe({
      next: (next) => {
        this.managers = next.data;
      },
    });
  }

  getAllMembers() {
    this._aboutService.apiAboutQismaGetAllMembersGet$Json().subscribe({
      next: (next) => {
        this.team = next.data;
      },
    });
  }
}
