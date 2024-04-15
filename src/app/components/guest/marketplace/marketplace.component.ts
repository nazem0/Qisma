import { Component } from '@angular/core';
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
