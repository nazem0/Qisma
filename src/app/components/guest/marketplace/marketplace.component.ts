import { GovernorateAndCityService } from './../../../api/services/governorate-and-city.service';
import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../../../api/services';
import { GovernorateAndCityViewModel, PropertyViewModelInListViewForUser } from '../../../api/models';
import { BusinessHelper } from '../../../services/business-helper';
import { PaginatorState } from 'primeng/paginator';

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
  propertyTypes = BusinessHelper.propertyTypes
  filters: {
    propertyType?: number,
    propertyPriceRange:number[]
    sharePriceRange:number[]
  }={
    propertyPriceRange : [1*Math.pow(10,6),100*Math.pow(10,6)],
    sharePriceRange:[500*Math.pow(10,3),20*Math.pow(10,6)]
  }
  selectedGov?: GovernorateAndCityViewModel
  selectedCity?: GovernorateAndCityViewModel
  constructor(
    private propertyService: PropertyService,
    private governorateAndCityService: GovernorateAndCityService
  ) { }
  pagination = {
    index: 1,
    size: 9,
  }
  ngOnInit(): void {
    this.initGovs();
    
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
  getProperties(){
    this.propertyService.apiPropertyGetAllGet$Json({
      PageNumber:this.pagination.index,
      PageSize:this.pagination.size,
      GovernorateId:this.selectedGov?.id,
      CityId:this.selectedCity?.id,
      MinSharePrice:this.filters.sharePriceRange[0],
      MaxSharePrice:this.filters.sharePriceRange[1],
      MinUnitPrice:this.filters.propertyPriceRange[0],
      MaxUnitPrice:this.filters.propertyPriceRange[1],
      PropertyType:this.filters.propertyType,
    }).subscribe({
      next: next => {
        this.properties = next.data?.itemsList ?? []
      }
    })
  }
  onPageChange($event:PaginatorState){
    console.log($event);
    
    // this.getProperties($event.page!, $event.rows!)
  }
}
