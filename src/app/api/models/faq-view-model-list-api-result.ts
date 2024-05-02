/* tslint:disable */
/* eslint-disable */
import { FaqViewModel } from '../models/faq-view-model';
export interface FaqViewModelListApiResult {
  data?: Array<FaqViewModel> | null;
  isSucceed?: boolean;
  message?: string | null;
  statusCode?: number;
}
