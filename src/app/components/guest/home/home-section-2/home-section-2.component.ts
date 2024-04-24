import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { PropertyCardComponent } from '../../../shared/property-card/property-card.component';
import { RouterModule } from '@angular/router';
import { NgFor } from '@angular/common';
import { PropertyService } from '../../../../api/services';
import { PropertyViewModelInListView } from '../../../../api/models';

@Component({
  selector: 'app-home-section-2',
  templateUrl: './home-section-2.component.html',
  styleUrl: './home-section-2.component.css',
  standalone:true,
  imports:[
    ButtonModule,
    PropertyCardComponent,
    RouterModule,
    NgFor
  ]
})
export class HomeSection2Component implements OnInit {
   
  properties?:PropertyViewModelInListView[]|null;
  constructor(private propertyService:PropertyService){}
  ngOnInit(): void {
    this.getProperties();
  }
  getProperties(){
    this.propertyService.apiPropertyGetAllGet$Json({
      PageNumber:0,
      PageSize:3,
    }).subscribe({
      next: next => {
        this.properties = next.data?.itemsList
      }
    })
  }
}
