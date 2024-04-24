import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { OrderService } from './../../../api/services/order.service';
import { Component, OnInit } from '@angular/core';
import { OrderViewModelForAdmin } from '../../../api/models';
import { CurrencyPipe, DatePipe, NgClass, NgFor, NgIf } from '@angular/common';
import { TableModule } from 'primeng/table'
import { Helper } from '../../../services/helper';
import { ButtonModule } from 'primeng/button';
import { AccordionModule } from 'primeng/accordion';
import { DropdownModule } from 'primeng/dropdown';
import { BusinessHelper } from '../../../services/business-helper';
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
    NgFor,
    NgIf,
    DropdownModule
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
  orderStatusArray = BusinessHelper.orderStatusArray
  constructor(
    private orderService: OrderService,
  ) { }

  ngOnInit() {
    this.getOrders()
  }
  getOrders(status?:number) {
    this
      .orderService
      .apiDashboardOrderGetAllGet$Json({
        OrderStatus:status,
        PageNumber: this.pagination.index,
        PageSize: this.pagination.size
      })
      .subscribe({
        next: next => {
          this.orders = next.data?.itemsList
          this.pagination.total = next.data?.totalItemsNumber!

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
        OrderId: orderId,
        ConfirmedOrRejected:true
      })
      .subscribe({
        next: () => {
          this.getOrders()
        }
      })
  }
}
