import { Component, OnInit } from '@angular/core';
import { TeamMember, TeamViewModel } from '../../../api/models';
import { AboutQismaService } from '../../../api/services';
import { TeamMemberCardComponent } from '../../shared/team-member-card/team-member-card.component';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { ConfirmComponent } from '../../shared/confirm/confirm.component';
import { TeamMemberActionsComponent } from '../team-member-actions/team-member-actions.component';

@Component({
  selector: 'app-edit-team-members',
  templateUrl: './edit-team-members.component.html',
  styleUrls: ['./edit-team-members.component.css'],
  standalone:true,
  imports:[
    TeamMemberCardComponent,
    ButtonModule,
    DialogModule,
    TeamMemberActionsComponent,
    ConfirmComponent
  ]
})
export class EditTeamMembersComponent implements OnInit {
  addTeamMemberModal = false;
  team?:TeamViewModel;
  selectedTeamMember?:TeamMember;
  constructor(
    private _aboutService:AboutQismaService
  ) {}

  ngOnInit() {
    this.getAllMembers();
  }



  getAllMembers() {
    this._aboutService.apiAboutQismaGetAllMembersGet$Json().subscribe({
      next: (next) => {
        this.team = next.data;
      },
    });
  }

  deleteMember(teamMemberId:number){
    this._aboutService
    .apiDashboardAboutQismaDeleteTeamMemberDelete$Json({TeamMemberId:teamMemberId})
    .subscribe({
      next:()=>this.getAllMembers()
    })
  }
}
