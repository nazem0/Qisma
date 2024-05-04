import { Roles } from './../../../enums/roles.enum';
import { BusinessHelper } from '../../../helpers/business-helper';
import { Helper } from '../../../helpers/helper';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CurrencyPipe, PercentPipe } from '@angular/common';
import { AuthHelper } from '../../../helpers/auth-helper';
import { ConfirmComponent } from '../confirm/confirm.component';
import { PropertyViewModelInListView } from '../../../api/models';
import { PropertyForAdminService } from '../../../api/services';

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
  isInAdminPanel : boolean;
  constructor(
    public authHelper: AuthHelper,
    private activatedRoute:ActivatedRoute,
    private _propertyForAdminService: PropertyForAdminService
  ) {
    this.isInAdminPanel = this.activatedRoute.snapshot.data['isAdmin'];
  }

  togglePropertyActivation(propertyId: string) {
    this
      ._propertyForAdminService
      .apiDashboardPropertyEnableAndDisablePut$Json({
        PropertyId: propertyId
      }).subscribe(
        {
          next:()=>this.refresh.emit()
        }
      )
  }


}
