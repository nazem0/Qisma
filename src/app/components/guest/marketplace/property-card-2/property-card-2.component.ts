import { Component } from '@angular/core';

@Component({
  selector: 'app-property-card-2',
  templateUrl: './property-card-2.component.html',
  styleUrl: './property-card-2.component.css'
})
export class PropertyCard2Component {
  property: { address: string, city: string, estimatedAnnualReturn: number,estimatedRentalYield:number, image: string };
  constructor() {
    this.property = {
      image: "/assets/page-resources/dummy-property.webp",
      address: "621 E Le Claire Rd",
      city: "Eldridge, IA 52748",
      estimatedAnnualReturn: 8.6,
      estimatedRentalYield:6.0
    }
  }
}
