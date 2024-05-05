/* tslint:disable */
/* eslint-disable */
import { Blog } from '../models/blog';
export interface BlogApiResult {
  data?: Blog;
  isSucceed?: boolean;
  message?: string | null;
  statusCode?: number;
}
