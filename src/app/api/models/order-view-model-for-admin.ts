/* tslint:disable */
/* eslint-disable */
import { OrderFinancialDetailsViewModel } from '../models/order-financial-details-view-model';
import { OrderStatus } from '../models/order-status';
import { PropertyViewModelInListView } from '../models/property-view-model-in-list-view';
import { UserFullInformationViewModel } from '../models/user-full-information-view-model';
export interface OrderViewModelForAdmin {
  orderFinancialDetails?: OrderFinancialDetailsViewModel;
  orderPdfUrl?: string | null;
  orderStatus?: OrderStatus;
  orderStatusName?: string | null;
  property?: PropertyViewModelInListView;
  userInformation?: UserFullInformationViewModel;
}
