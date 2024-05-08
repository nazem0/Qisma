/* tslint:disable */
/* eslint-disable */
import { UserPropertiesInPortfolioViewModel } from '../models/user-properties-in-portfolio-view-model';
export interface UserPortfolioViewModel {
  currentMonth?: string | null;
  grossMonthlyIncome?: number;
  numberOfProperties?: number;
  protfolioValue?: number;
  userStakes?: Array<UserPropertiesInPortfolioViewModel> | null;
}
