import { Roles } from './../../../enums/roles.enum';
import { BusinessHelper } from './../../../services/business-helper';
import { PropertyForAdminService } from './../../../api/services/property-for-admin.service';
import { Helper } from '../../../services/helper';
import { PropertyViewModelInListViewForUser } from '../../../api/models/property-view-model-in-list-view-for-user';
import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CurrencyPipe, PercentPipe } from '@angular/common';
import { AuthHelper } from '../../../services/auth-helper';
import { ConfirmComponent } from '../confirm/confirm.component';

@Component({
  selector: 'app-property-card-2',
  templateUrl: './property-card-2.component.html',
  styleUrl: './property-card-2.component.css',
  standalone: true,
  imports: [
    RouterModule,
    ButtonModule,
    CurrencyPipe,
    PercentPipe,
    ConfirmComponent
  ]
})
export class PropertyCard2Component {
  @Input() property!: PropertyViewModelInListViewForUser;
  helper = Helper;
  @Output() refresh = new EventEmitter();
  adminRole=Roles.Admin
  constructor(
    public authHelper: AuthHelper,
    public businessHelper:BusinessHelper
  ) { }

  

}
