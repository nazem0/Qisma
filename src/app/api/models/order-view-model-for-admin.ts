/* tslint:disable */
/* eslint-disable */
import { OrderFinancialDetailsViewModel } from '../models/order-financial-details-view-model';
import { PropertyViewModelInListView } from '../models/property-view-model-in-list-view';
import { UserFullInformationViewModel } from '../models/user-full-information-view-model';
export interface OrderViewModelForAdmin {
  orderFinancialDetails?: OrderFinancialDetailsViewModel;
  property?: PropertyViewModelInListView;
  userInformation?: UserFullInformationViewModel;
}
