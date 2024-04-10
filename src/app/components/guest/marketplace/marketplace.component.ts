import { GovernorateAndCityService } from './../../../api/services/governorate-and-city.service';
import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../../../api/services';
import { GovernorateAndCityViewModel, PropertyViewModelInListViewForUser } from '../../../api/models';
import { BusinessHelper } from '../../../services/business-helper';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { SliderModule } from 'primeng/slider';
import { CurrencyPipe, NgClass, NgIf } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { PropertyCard2Component } from '../../shared/property-card-2/property-card-2.component';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { MarketplaceHeaderComponent } from './marketplace-header/marketplace-header.component';
import { MarketplacePropertiesPaginationComponent } from './marketplace-properties-pagination/marketplace-properties-pagination.component';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrl: './marketplace.component.css',
  standalone:true,
  imports:[
    MarketplaceHeaderComponent,
    MarketplacePropertiesPaginationComponent
  ]
})
export class MarketplaceComponent {
  
}
