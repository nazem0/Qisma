import { UserAccountService } from './../../../api/services/user-account.service';
import { DatePipe, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { UserFullInformationViewModel } from '../../../api/models';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css'],
  standalone:true,
  imports:[
    CardModule,
    ButtonModule,
    DatePipe,
    NgIf
  ]
})
export class ProfileInfoComponent implements OnInit {
  user?: UserFullInformationViewModel;
  constructor(
    private userAccountService:UserAccountService
  ) { }

  ngOnInit() {
    this.getUserInfo()
  }

  getUserInfo(){
    this
    .userAccountService
    .apiUserGetFullInformationGet$Json()
    .subscribe({
      next:next=>{
        this.user = next.data
      }
    })
  }

}
