/* tslint:disable */
/* eslint-disable */
import { BlogViewModel } from '../models/blog-view-model';
export interface BlogViewModelListApiResult {
  data?: Array<BlogViewModel> | null;
  isSucceed?: boolean;
  message?: string | null;
  statusCode?: number;
}
