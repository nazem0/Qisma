/* tslint:disable */
/* eslint-disable */
import { OrderFinancialDetailsViewModel } from '../models/order-financial-details-view-model';
import { OrderStatus } from '../models/order-status';
import { PropertyViewModelInListView } from '../models/property-view-model-in-list-view';
export interface OrderViewModelForUser {
  orderFinancialDetails?: OrderFinancialDetailsViewModel;
  orderPdfUrl?: string | null;
  orderStatus?: OrderStatus;
  orderStatusName?: string | null;
  property?: PropertyViewModelInListView;
}
