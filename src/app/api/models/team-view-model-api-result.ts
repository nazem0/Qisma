/* tslint:disable */
/* eslint-disable */
import { TeamViewModel } from '../models/team-view-model';
export interface TeamViewModelApiResult {
  data?: TeamViewModel;
  isSucceed?: boolean;
  message?: string | null;
  statusCode?: number;
}
