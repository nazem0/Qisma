import { GovernorateAndCityService } from './../../../api/services/governorate-and-city.service';
import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../../../api/services';
import { GovernorateAndCityViewModel, PropertyViewModelInListViewForUser } from '../../../api/models';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrl: './marketplace.component.css'
})
export class MarketplaceComponent implements OnInit {
  governorates: GovernorateAndCityViewModel[] = [];
  cities: GovernorateAndCityViewModel[] = [];
  properties: PropertyViewModelInListViewForUser[] = [];
  math=Math;
  propertyTypes = [
    {
      id: 1,
      name: "Residential",
    },
    {
      id: 2,
      name: "Commercial",
    }
  ]
  filters: {
    propertyType?: number,
    governorateId?: number,
    propertyPriceRange:number[]
    sharePriceRange:number[]
  }={
    propertyPriceRange : [1*Math.pow(10,6),100*Math.pow(10,6)],
    sharePriceRange:[500*Math.pow(10,3),20000*Math.pow(10,6)]
  }
  selectedGov?: GovernorateAndCityViewModel
  constructor(
    private propertyService: PropertyService,
    private governorateAndCityService: GovernorateAndCityService
  ) { }
  pagination = {
    index: 0,
    size: 9,
  }
  ngOnInit(): void {
    this.initGovs();
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

  initGovs() {
    this
    .governorateAndCityService
      .apiGovernorateGetAllGet$Json()
      .subscribe({
        next: next => {
          this.governorates = next.data ?? []
        }
      })
  }
  initCity() {
    this
      .governorateAndCityService
      .apiCitiesGetByGovernorateIdGet$Json({ "GovernorateId": this.selectedGov?.id })
      .subscribe({
        next: next => {
          this.cities = next.data ?? []
        }
      })

  }

}
