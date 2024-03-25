/* tslint:disable */
/* eslint-disable */
import { GovernorateAndCityViewModel } from '../models/governorate-and-city-view-model';
export interface GovernorateAndCityViewModelListApiResult {
  data?: Array<GovernorateAndCityViewModel> | null;
  isSucceed?: boolean;
  message?: string | null;
  statusCode?: number;
}
