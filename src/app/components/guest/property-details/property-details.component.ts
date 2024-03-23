import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrl: './property-details.component.css'
})
export class PropertyDetailsComponent {
  @Input() property = {

    "assetName": "Beautiful House on Maple Street",
    "address": "123 Maple Street, Cityville, USA",
    "description": "This charming house is located in a quiet neighborhood close to parks and schools.",
    "property_type": "Single Family Home",
    "beds": 3,
    "baths": 2,
    "year_built": 2005,
    "sqft": 1800,
    "sale_price": 350000,
    "monthly_rent": 2500,
    "projected_annual_cash_flow": 20000,
    "projected_rental_yield": 7.14,
    "projected_annual_return": 5.71,
    "images": [
      "https://example.com/image1.jpg",
      "https://example.com/image2.jpg",
      "https://example.com/image3.jpg"
    ],
    "documents": [
      {
        "title": "Property Brochure",
        "targetUrl": "https://example.com/property_brochure.pdf"
      },
      {
        "title": "Floor Plan",
        "targetUrl": "https://example.com/floor_plan.pdf"
      },
      {
        "title": "Home Inspection Report",
        "targetUrl": "https://example.com/inspection_report.pdf"
      }
    ]
  }


}
