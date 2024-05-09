import { PropertyService } from './../../../api/services/property.service';
import { Component, OnInit, Input, input } from '@angular/core';
import { OrderPreviewPageViewModel } from '../../../api/models';
import { CurrencyPipe } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';


@Component({
  selector: 'app-order-preview',
  templateUrl: './order-preview.component.html',
  styleUrls: ['./order-preview.component.css'],
  standalone:true,
  imports:[
    CurrencyPipe,
    ButtonModule,
    DividerModule
  ]
})
export class OrderPreviewComponent implements OnInit {
  orderPreview?:OrderPreviewPageViewModel;
  @Input() numberOfShares?:number;
  @Input() propertyId?:string;
  constructor(
    private propertyService:PropertyService
  ) { }

  ngOnInit() {
    console.log("here");
    console.log(this.numberOfShares, this.propertyId);
    
    if(this.numberOfShares && this.propertyId){
      this.getOrderPreview();
    }
  }

  getOrderPreview(){
    this
    .propertyService
    .apiPropertyGetOrderPreviewPageGet$Json({
        PropertyId:this.propertyId!,
        NumberOfShares:this.numberOfShares!
      })
    .subscribe({
      next:next=>{
        this.orderPreview = next.data
      }
    })
  }

}
