/* tslint:disable */
/* eslint-disable */
import { UserDataViewModel } from '../models/user-data-view-model';
export interface UserDataViewModelApiResult {
  data?: UserDataViewModel;
  isSucceed?: boolean;
  message?: string | null;
  statusCode?: number;
}
