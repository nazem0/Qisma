import { Component, Input } from '@angular/core';
import { PropertyViewModelInListView } from '../../../api/models';
import { Helper } from '../../../helpers/helper';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrl: './property-card.component.css',
  standalone:true
})
export class PropertyCardComponent {
  @Input() property:PropertyViewModelInListView;
  appHelper = Helper;
  constructor(){
    this.property={
      imageUrl:"/assets/page-resources/dummy-property.webp",
      address:"110 Gardengate Dr",
      city:"Harvest, Alabama 35749",
      projectedAnnualReturn:5.7
    }
  }
}