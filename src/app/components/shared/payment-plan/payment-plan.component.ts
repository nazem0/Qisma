import { CurrencyPipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { PropertyPaymentPlan } from '../../../models/property-payment-plan';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-payment-plan',
  templateUrl: './payment-plan.component.html',
  styleUrls: ['./payment-plan.component.css'],
  standalone:true,
  imports:[
    CurrencyPipe,
    DividerModule
  ]
})
export class PaymentPlanComponent implements OnInit {
  @Input() property!: PropertyPaymentPlan;
  constructor() { }

  ngOnInit() {
  }

}
