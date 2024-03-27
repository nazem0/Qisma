/* tslint:disable */
/* eslint-disable */
import { FacilityViewModelForAdmin } from '../models/facility-view-model-for-admin';
export interface FacilityViewModelForAdminListApiResult {
  data?: Array<FacilityViewModelForAdmin> | null;
  isSucceed?: boolean;
  message?: string | null;
  statusCode?: number;
}
