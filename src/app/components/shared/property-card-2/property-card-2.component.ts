import { Helper } from '../../../services/helper';
import { PropertyViewModelInListViewForUser } from '../../../api/models/property-view-model-in-list-view-for-user';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CurrencyPipe, PercentPipe } from '@angular/common';

@Component({
  selector: 'app-property-card-2',
  templateUrl: './property-card-2.component.html',
  styleUrl: './property-card-2.component.css',
  standalone:true,
  imports:[
    RouterModule,
    ButtonModule,
    CurrencyPipe,
    PercentPipe
  ]
})
export class PropertyCard2Component {
  @Input() property!: PropertyViewModelInListViewForUser;
  helper=Helper
}
