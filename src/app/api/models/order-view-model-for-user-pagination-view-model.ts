/* tslint:disable */
/* eslint-disable */
import { OrderViewModelForUser } from '../models/order-view-model-for-user';
export interface OrderViewModelForUserPaginationViewModel {
  itemsList?: Array<OrderViewModelForUser> | null;
  totalItemsNumber?: number;
  totalPageNumbers?: number;
}
