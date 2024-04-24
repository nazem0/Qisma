/* tslint:disable */
/* eslint-disable */
import { Status } from '../models/status';
export interface UserPropertiesInPortfolioViewModel {
  investmentValue?: number;
  propertyId?: string | null;
  propertyLocation?: string | null;
  status?: string | null;
  statusId?: Status;
  totalRentalIncome?: number;
}
