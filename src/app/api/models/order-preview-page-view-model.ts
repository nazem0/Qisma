/* tslint:disable */
/* eslint-disable */
import { OrderingPageViewModel } from '../models/ordering-page-view-model';
import { UserInformationForOrderPreviewViewModel } from '../models/user-information-for-order-preview-view-model';
export interface OrderPreviewPageViewModel {
  orderingPage?: OrderingPageViewModel;
  propertyLocation?: string | null;
  propertyName?: string | null;
  userInformation?: UserInformationForOrderPreviewViewModel;
}
