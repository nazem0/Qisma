import { AuthHelper } from './../../../../services/auth-helper';
import { CurrencyPipe, NgIf, NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { SliderModule } from 'primeng/slider';
import { PropertyCard2Component } from '../../../shared/property-card-2/property-card-2.component';
import { GovernorateAndCityViewModel, PropertyViewModelInListViewForUser } from '../../../../api/models';
import { PropertyService, GovernorateAndCityService } from '../../../../api/services';
import { BusinessHelper } from '../../../../services/business-helper';

@Component({
  selector: 'app-marketplace-properties-pagination',
  templateUrl: './marketplace-properties-pagination.component.html',
  styleUrl: './marketplace-properties-pagination.component.css',
  standalone:true,
  imports:[
    DropdownModule,
    FormsModule,
    SliderModule,
    CurrencyPipe,
    ButtonModule,
    NgIf,
    RouterModule,
    PropertyCard2Component,
    NzPaginationModule,
    NgClass
  ]
})
export class MarketplacePropertiesPaginationComponent implements OnInit {
  governorates: GovernorateAndCityViewModel[] = [];
  cities: GovernorateAndCityViewModel[] = [];
  properties?: PropertyViewModelInListViewForUser[] | null;
  math=Math;
  propertyTypes = BusinessHelper.propertyTypes
  filters: {
    propertyPriceRange:number[]
    sharePriceRange:number[]
  }={
    propertyPriceRange : [1*Math.pow(10,6),100*Math.pow(10,6)],
    sharePriceRange:[500*Math.pow(10,3),20*Math.pow(10,6)]
  }
  selectedGov?: GovernorateAndCityViewModel
  selectedCity?: GovernorateAndCityViewModel
  selectedProperty?:{id:number, name:string};
  constructor(
    private propertyService: PropertyService,
    private governorateAndCityService: GovernorateAndCityService,
    public authHelper:AuthHelper
  ) { }
  pagination = {
    index: 0,
    size: 12,
    total:0
  }
  ngOnInit(): void {
    this.initGovs();
    this.getProperties();
    
  }
  resetPagination(){
    this.pagination.index=0;
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
      PropertyType:this.selectedProperty?.id,
    }).subscribe({
      next: next => {
        this.properties = next.data?.itemsList
        this.pagination.total = next.data?.totalItemsNumber!
      }
    })
  }
  getPage($event:number){
    this.pagination.index = $event-1;
    this.getProperties();
  }
}
