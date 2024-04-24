/* tslint:disable */
/* eslint-disable */
import { UserPortfolioViewModel } from '../models/user-portfolio-view-model';
export interface UserPortfolioViewModelApiResult {
  data?: UserPortfolioViewModel;
  isSucceed?: boolean;
  message?: string | null;
  statusCode?: number;
}
