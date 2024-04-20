import { NgClass, DatePipe, CurrencyPipe, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { OrderViewModelForUser } from '../../../api/models';
import { Helper } from '../../../services/helper';
import { OrderService } from '../../../api/services';
import { DropdownModule } from 'primeng/dropdown';
import { BusinessHelper } from '../../../services/business-helper';

@Component({
  selector: 'app-user-orders',
  templateUrl: './user-orders.component.html',
  styleUrls: ['./user-orders.component.css'],
  standalone:true,
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
export class UserOrdersComponent implements OnInit {
  orders?: OrderViewModelForUser[] | null;
  pagination = {
    index: 0,
    size: 12,
    total: 0
  }
  helper = Helper;
  orderStatusArray = BusinessHelper.orderStatusArray;
  constructor(
    private orderService:OrderService
    ) { }

  ngOnInit() {
    this.getOrders();
  }

  getOrders(status?:number){
    this
    .orderService
    .apiOrderGetAllGet$Json({
      OrderStatus:status,
      PageNumber:this.pagination.index,
      PageSize:this.pagination.size
    })
    .subscribe({
      next:next=>{
        this.orders = next.data?.itemsList
        this.pagination.total = next.data?.totalItemsNumber!
      }
    })
  }

  getPage($event: number) {
    this.pagination.index = $event - 1;
    this.getOrders();
  }

}
