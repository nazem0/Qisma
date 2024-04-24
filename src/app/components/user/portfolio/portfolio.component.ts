import { UserAccountService } from './../../../api/services/user-account.service';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UserStakesComponent } from './user-stakes/user-stakes.component';
import { UserPortfolioViewModel } from '../../../api/models';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  standalone: true,
  imports: [
    CurrencyPipe,
    DatePipe,
    UserStakesComponent
  ]
})
export class PortfolioComponent implements OnInit {
  data?: UserPortfolioViewModel;
  constructor(
    private userAccountService: UserAccountService
  ) { }

  ngOnInit() {
    this.getData()
  }

  getData() {
    this.userAccountService
      .apiUserGetPortfolioGet$Json()
      .subscribe({
        next: next => {
          this.data = next.data
        }
      })
  }

}
