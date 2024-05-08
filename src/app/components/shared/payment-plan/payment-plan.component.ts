import { CurrencyPipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { PropertyPaymentPlan } from '../../../models/property-payment-plan';

@Component({
  selector: 'app-payment-plan',
  templateUrl: './payment-plan.component.html',
  styleUrls: ['./payment-plan.component.css'],
  standalone:true,
  imports:[
    MatDividerModule,
    CurrencyPipe
  ]
})
export class PaymentPlanComponent implements OnInit {
  @Input() property!: PropertyPaymentPlan;
  constructor() { }

  ngOnInit() {
  }

}
