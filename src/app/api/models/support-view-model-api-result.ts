/* tslint:disable */
/* eslint-disable */
import { SupportViewModel } from '../models/support-view-model';
export interface SupportViewModelApiResult {
  data?: SupportViewModel;
  isSucceed?: boolean;
  message?: string | null;
  statusCode?: number;
}
