import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { OrderService } from './../../../api/services/order.service';
import { Component, OnInit } from '@angular/core';
import { OrderViewModelForAdmin } from '../../../api/models';
import { CurrencyPipe, DatePipe, NgClass, NgFor } from '@angular/common';
import { TableModule } from 'primeng/table'
import { Helper } from '../../../services/helper';
import { ButtonModule } from 'primeng/button';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AccordionModule } from 'primeng/accordion';
@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css'],
  standalone: true,
  imports: [
    NzPaginationModule,
    NgClass,
    TableModule,
    DatePipe,
    CurrencyPipe,
    ButtonModule,
    AccordionModule,
    NgFor
  ]
})
export class AdminOrdersComponent implements OnInit {
  orders?: OrderViewModelForAdmin[] | null;
  pagination = {
    index: 0,
    size: 12,
    total: 0
  }
  helper = Helper;
  constructor(
    private orderService: OrderService,
    private matsnackbar: MatSnackBar
  ) { }

  ngOnInit() {
    this.getOrders()
  }
  getOrders() {
    this
      .orderService
      .apiDashboardOrderGetAllGet$Json({
        OrderStatus: 1,
        PageNumber: this.pagination.index,
        PageSize: this.pagination.size
      })
      .subscribe({
        next: next => {
          this.orders = next.data?.itemsList
          this.pagination.total = next.data?.totalItemsNumber!
          console.log(this.orders);

        }
      })
  }
  getPage($event: number) {
    this.pagination.index = $event - 1;
    this.getOrders();
  }

  confirmOrder(orderId: number) {
    console.log(orderId);
    
    this
      .orderService
      .apiDashboardOrdersConfirmOrderPost$Json({
        OrderId: orderId
      })
      .subscribe({
        next: () => {
          this.getOrders()
        }
      })
  }
}
