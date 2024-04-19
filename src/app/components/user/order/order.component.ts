import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService, PropertyService } from '../../../api/services';
import { OrderPreviewPageViewModel, OrderingPageViewModel } from '../../../api/models';
import { PaymentPlanComponent } from '../../shared/payment-plan/payment-plan.component';
import { CurrencyPipe } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { SliderModule } from 'primeng/slider';
import { FormsModule } from '@angular/forms';
import { IndexableObject } from 'ng-zorro-antd/core/types';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
  standalone: true,
  imports: [
    PaymentPlanComponent,
    CurrencyPipe,
    MatDividerModule,
    SliderModule,
    FormsModule,
    ButtonModule,
    DialogModule,
    
  ]
})
export class OrderComponent implements OnInit {
  propertyId: string = "";
  originalProperty?: OrderingPageViewModel;
  clonedProperty?: OrderingPageViewModel;
  numberOfShares: number = 0;
  orderPreview?:OrderPreviewPageViewModel;
  displayOrderPreview = false;
  constructor(
    private route: ActivatedRoute,
    private propertyService: PropertyService,
    private orderService:OrderService,
    private snackbar:MatSnackBar
    ) { }

  ngOnInit() {
    this.initProperty();
  }
  initProperty() {
    this.route.params.subscribe({
      next: next => {
        this.propertyId = next['id']
        this
          .propertyService
          .apiPropertyGetOrderingPageGet$Json({ "PropertyId": this.propertyId! })
          .subscribe({
            next: next => {
              this.originalProperty = next.data
              this.clonedProperty = JSON.parse(JSON.stringify(next.data))
              this.numberOfShares = next.data?.minNumberOfShares!;
              this.updatePaymentInfoByNumberOfShares()
            }
          })
      }
    })
  }

  updatePaymentInfoByNumberOfShares() {  
    this.clonedProperty!.downPayment = this.originalProperty!.downPayment! / this.numberOfShares
    this.clonedProperty!.monthlyInstallment = this.originalProperty!.monthlyInstallment! / this.numberOfShares;
    this.clonedProperty!.maintenaceInstallment = this.originalProperty!.maintenaceInstallment! / this.numberOfShares;
    this.clonedProperty!.deliveryInstallment = this.originalProperty!.deliveryInstallment! / this.numberOfShares;
  }

  openOrderPreview(){
    this
    .propertyService
    .apiPropertyGetOrderPreviewPageGet$Json({
        PropertyId:this.propertyId,
        NumberOfShares:this.numberOfShares
      })
    .subscribe({
      next:next=>{
        this.orderPreview = next.data
        this.displayOrderPreview = true;
      }
    })
  }

  placeOrder(){
    this
    .orderService
    .apiCheckOutPlaceOrderPost$Json(
      {
        PropertyId:this.propertyId,
        NumberOfShares:this.numberOfShares
      }
    )
    .subscribe({
      next:next=>{
        this.displayOrderPreview = false;
        this.initProperty();
      }
    })
  }
}
