import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService, PropertyService } from '../../../api/services';
import { OrderingPageViewModel } from '../../../api/models';
import { PaymentPlanComponent } from '../../shared/payment-plan/payment-plan.component';
import { CurrencyPipe } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { SliderModule } from 'primeng/slider';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { OrderPreviewComponent } from '../order-preview/order-preview.component';
import { OrderConfirmationComponent } from '../order-confirmation/order-confirmation.component';
import { CheckboxModule } from 'primeng/checkbox';
import { InputNumberModule } from 'primeng/inputnumber';


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
    OrderPreviewComponent,
    OrderConfirmationComponent,
    CheckboxModule,
    InputNumberModule
  ]
})
export class OrderComponent implements OnInit {
  propertyId: string = "";
  originalProperty?: OrderingPageViewModel;
  clonedProperty?: OrderingPageViewModel;
  numberOfShares: number = 0;
  displayOrderPreview = false;
  displayOrderConfirmation = false;
  orderCode?:string | null;
  agree=false;

  constructor(
    private route: ActivatedRoute,
    private propertyService: PropertyService,
    private orderService:OrderService,
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
              console.log("number of shares", this.numberOfShares);
              
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
    this.displayOrderPreview = true;
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
        this.orderCode = next.data
        this.displayOrderPreview = false;
        this.displayOrderConfirmation = true;
        this.initProperty();
      }
    })
  }

}

