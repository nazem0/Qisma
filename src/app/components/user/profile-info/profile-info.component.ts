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
  ],
})
export class ProfileInfoComponent implements OnInit {
  user?: UserFullInformationViewModel;
  showIdImage = false;
  helper = Helper;
  editProfileDialog = false;
  constructor(
    private userAccountService: UserAccountService,
    private dialog:DialogHelper,
    // private
  ) {}

  ngOnInit() {
    this.getUserInfo();
  }

  getUserInfo() {
    this.userAccountService.apiUserGetFullInformationGet$Json().subscribe({
      next: (next) => {
        this.user = next.data;
      },
    });
  }

  showDialog() {
    this.showIdImage = true;
  }

  showEditProfileInfoDialog() {
    console.log(this.user);

    this.editProfileDialog = true;
  }

  // openSupportDialog(){
  //   this.dialog.open("")
  // }
}
