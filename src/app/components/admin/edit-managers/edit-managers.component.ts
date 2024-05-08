import { Component, OnInit } from '@angular/core';
import { TeamMemberCardComponent } from '../../shared/team-member-card/team-member-card.component';
import { TeamMember, TeamViewModel } from '../../../api/models';
import { AboutQismaService } from '../../../api/services';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { CreateTeamMemberComponent } from '../create-team-member/create-team-member.component';
import { ConfirmComponent } from '../../shared/confirm/confirm.component';

@Component({
  selector: 'app-edit-managers',
  templateUrl: './edit-managers.component.html',
  styleUrls: ['./edit-managers.component.css'],
  standalone:true,
  imports:[
    TeamMemberCardComponent,
    ButtonModule,
    DialogModule,
    CreateTeamMemberComponent,
    ConfirmComponent
  ]
})
export class EditManagersComponent implements OnInit {
  managers?: TeamViewModel;
  addTeamMemberModal = false;
  constructor(
    private _aboutService:AboutQismaService
  ) {}
  ngOnInit() {
    this.getAllManagers();

  }
  getAllManagers() {
    this._aboutService.apiAboutQismaGetAllManagersGet$Json().subscribe({
      next: (next) => {
        this.managers = next.data;
      },
    });
  }

  deleteManager(teamMemberId:number){
    this._aboutService
    .apiDashboardAboutQismaDeleteTeamMemberDelete$Json({TeamMemberId:teamMemberId})
    .subscribe({
      next:()=>this.getAllManagers()
    })
  }
}
