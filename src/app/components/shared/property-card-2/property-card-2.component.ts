import { Helper } from '../../../services/helper';
import { PropertyViewModelInListViewForUser } from '../../../api/models/property-view-model-in-list-view-for-user';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-property-card-2',
  templateUrl: './property-card-2.component.html',
  styleUrl: './property-card-2.component.css'
})
export class PropertyCard2Component {
  @Input() property!: PropertyViewModelInListViewForUser;
  helper=Helper
}
