import { Helper } from './../../../helpers/helper';
import { UserAccountService } from './../../../api/services/user-account.service';
import { DatePipe, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { UserFullInformationViewModel } from '../../../api/models';
import { DialogModule } from 'primeng/dialog';
import { EditProfileInfoComponent } from './edit-profile-info/edit-profile-info.component';
import { DialogHelper } from '../../../helpers/dialog.service';
import { AboutQismaService } from '../../../api/services';
import { SupportDialogComponent } from './support-dialog/support-dialog.component';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css'],
  standalone: true,
  imports: [
    CardModule,
    ButtonModule,
    DatePipe,
    NgIf,
    DialogModule,
    EditProfileInfoComponent,
    SupportDialogComponent
  ],
})
export class ProfileInfoComponent implements OnInit {
  user?: UserFullInformationViewModel;
  showIdImage = false;
  helper = Helper;
  editProfileDialog = false;
  showSupportDialog = false;
  constructor(
    private _userAccountService: UserAccountService,
    private _dialog:DialogHelper,
    private _aboutQismaService:AboutQismaService
    // private
  ) {}

  ngOnInit() {
    this.getUserInfo();
  }

  getUserInfo() {
    this._userAccountService.apiUserGetFullInformationGet$Json().subscribe({
      next: (next) => {
        this.user = next.data;
      },
    });
  }

  showDialog() {
    this.showIdImage = true;
  }

  showEditProfileInfoDialog() {
    this.editProfileDialog = true;
  }


  openSupportDialog() {
    this.showSupportDialog = true;
  }


}
