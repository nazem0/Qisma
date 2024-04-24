import { CurrencyPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { UserPropertiesInPortfolioViewModel } from '../../../../api/models';

@Component({
  selector: 'app-user-stakes',
  templateUrl: './user-stakes.component.html',
  styleUrls: ['./user-stakes.component.css'],
  standalone: true,
  imports: [
    TableModule,
    NgFor,
    CurrencyPipe,
    NgClass,
    NgIf
  ]

})
export class UserStakesComponent implements OnInit {
  @Input() data?: UserPropertiesInPortfolioViewModel[];
  constructor() { }

  ngOnInit() {
  }

}
