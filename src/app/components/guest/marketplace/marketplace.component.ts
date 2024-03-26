import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../../../api/services';
import { PropertyViewModelInListViewForUser } from '../../../api/models';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrl: './marketplace.component.css'
})
export class MarketplaceComponent implements OnInit {
  properties: PropertyViewModelInListViewForUser[] = [];
  public math = Math;
  pagination = {
    index: 0,
    size: 9,
  }
  constructor(private propertyService: PropertyService) { }
  ngOnInit(): void {
    this.propertyService.apiPropertyGetAllGet$Json(
      {
        PageNumber: this.pagination.index,
        PageSize: this.pagination.size
      }
    ).subscribe({
      next: next => {
        this.properties = next.data?.itemsList ?? []
      }
    })
  }
}
