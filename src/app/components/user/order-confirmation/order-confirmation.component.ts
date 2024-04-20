import { Component, Input, OnInit } from '@angular/core';
import { OrderPreviewComponent } from '../order-preview/order-preview.component';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css'],
  standalone: true,
  imports: [OrderPreviewComponent]
})
export class OrderConfirmationComponent implements OnInit {
  @Input() numberOfShares?: number
  @Input() propertyId?: string
  @Input() orderCode?: string | null
  constructor() { }

  ngOnInit() {
  }

}
