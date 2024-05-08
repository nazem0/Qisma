import { Component, OnInit } from '@angular/core';
import { TeamMemberCardComponent } from '../../shared/team-member-card/team-member-card.component';
import { TeamMember, TeamViewModel } from '../../../api/models';
import { AboutQismaService } from '../../../api/services';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { ConfirmComponent } from '../../shared/confirm/confirm.component';
import { TeamMemberActionsComponent } from '../team-member-actions/team-member-actions.component';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-edit-managers',
  templateUrl: './edit-managers.component.html',
  styleUrls: ['./edit-managers.component.css'],
  standalone:true,
  imports:[
    TeamMemberCardComponent,
    ButtonModule,
    DialogModule,
    TeamMemberActionsComponent,
    ConfirmComponent,
    FormsModule,
    InputTextModule
  ]
})
export class EditManagersComponent implements OnInit {
  managers?: TeamViewModel;
  addTeamMemberModal = false;
  selectedTeamMember?:TeamMember;
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

  changeManagersTitle(){
    this._aboutService
    .apiDashboardAboutQismaUpdateManagersTitlePut$Json({body:JSON.stringify(this.managers?.title!)})
    .subscribe()
  }
}
