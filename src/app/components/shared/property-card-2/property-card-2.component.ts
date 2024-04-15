import { Roles } from './../../../enums/roles.enum';
import { BusinessHelper } from './../../../services/business-helper';
import { Helper } from '../../../services/helper';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CurrencyPipe, PercentPipe } from '@angular/common';
import { AuthHelper } from '../../../services/auth-helper';
import { ConfirmComponent } from '../confirm/confirm.component';
import { PropertyViewModelInListView } from '../../../api/models';

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
  @Input() property!: PropertyViewModelInListView;
  helper = Helper;
  @Output() refresh = new EventEmitter();
  adminRole=Roles.Admin
  constructor(
    public authHelper: AuthHelper,
    public businessHelper:BusinessHelper
  ) { }

  

}
