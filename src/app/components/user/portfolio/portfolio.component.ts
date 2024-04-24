import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  standalone:true,
  imports:[
    CurrencyPipe,
    DatePipe
  ]
})
export class PortfolioComponent implements OnInit {
  data= {
    "protfolioValue": 22680000,
    "grossMonthlyIncome": 0,
    "totalAppreciation": 680400,
    "numberOfProperties": 1,
    "currentMonth": 4,
    "userStakes": [
      {
        "propertyId": "167850486",
        "propertyLocation": "Dummy Location",
        "investmentValue": 22680000,
        "totalRentalIncome": 0,
        "statusId": 2,
        "status": "Ready To Move"
      }
    ]
  }
  constructor() { }

  ngOnInit() {
  }

}
