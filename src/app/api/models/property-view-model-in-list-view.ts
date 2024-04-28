/* tslint:disable */
/* eslint-disable */
import { Status } from '../models/status';
export interface PropertyViewModelInListView {
  address?: string | null;
  availableTokens?: number;
  city?: string | null;
  imageUrl?: string | null;
  isDeleted?: boolean | null;
  projectedAnnualReturn?: number;
  projectedRentalYield?: number;
  propertyId?: string | null;
  statusId?: Status;
  statusName?: string | null;
  tokenPrice?: number;
}
