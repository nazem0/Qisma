/* tslint:disable */
/* eslint-disable */
import { Blog } from '../models/blog';
export interface BlogListApiResult {
  data?: Array<Blog> | null;
  isSucceed?: boolean;
  message?: string | null;
  statusCode?: number;
}
