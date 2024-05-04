/* tslint:disable */
/* eslint-disable */
import { Faq } from '../models/faq';
export interface FaqListApiResult {
  data?: Array<Faq> | null;
  isSucceed?: boolean;
  message?: string | null;
  statusCode?: number;
}
