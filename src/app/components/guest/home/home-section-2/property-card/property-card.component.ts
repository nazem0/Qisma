import { Component } from '@angular/core';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrl: './property-card.component.css'
})
export class PropertyCardComponent {
  property:PropertyCard;
  constructor(){
    this.property={
      image:"/assets/page-resources/dummy-property.webp",
      address:"110 Gardengate Dr",
      city:"Harvest, Alabama 35749",
      estimatedAnnualReturn:5.7
    }
  }
}

interface PropertyCard{
  image:string
  address:string
  city:string
  estimatedAnnualReturn:number
  
}