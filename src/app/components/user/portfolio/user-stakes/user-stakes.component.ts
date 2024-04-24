import { CurrencyPipe, NgClass, NgFor } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-user-stakes',
  templateUrl: './user-stakes.component.html',
  styleUrls: ['./user-stakes.component.css'],
  standalone:true,
  imports:[
    TableModule,
    NgFor,
    CurrencyPipe,
    NgClass
  ]

})
export class UserStakesComponent implements OnInit {
  @Input() data = [
    {
      "propertyId": "167850486",
      "propertyLocation": "Dummy Location",
      "investmentValue": 22680000,
      "totalRentalIncome": 0,
      "statusId": 2,
      "status": "Ready To Move"
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
