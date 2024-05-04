/* tslint:disable */
/* eslint-disable */
import { AboutUsViewModel } from '../models/about-us-view-model';
export interface AboutUsViewModelApiResult {
  data?: AboutUsViewModel;
  isSucceed?: boolean;
  message?: string | null;
  statusCode?: number;
}
