/* tslint:disable */
/* eslint-disable */
import { OrderFinancialDetailsViewModel } from '../models/order-financial-details-view-model';
import { PropertyViewModelInListView } from '../models/property-view-model-in-list-view';
export interface OrderViewModelForUser {
  orderFinancialDetails?: OrderFinancialDetailsViewModel;
  property?: PropertyViewModelInListView;
}
