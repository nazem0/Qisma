/* tslint:disable */
/* eslint-disable */
import { UserFullInformationViewModel } from '../models/user-full-information-view-model';
export interface UserFullInformationViewModelApiResult {
  data?: UserFullInformationViewModel;
  isSucceed?: boolean;
  message?: string | null;
  statusCode?: number;
}
