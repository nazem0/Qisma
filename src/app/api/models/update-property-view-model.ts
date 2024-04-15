/* tslint:disable */
/* eslint-disable */
import { Status } from '../models/status';
import { Type } from '../models/type';
export interface UpdatePropertyViewModel {
  annualPriceAppreciation?: number | null;
  annualRentalYield?: number | null;
  cityId?: number | null;
  deliveryInstallment?: number | null;
  description?: string | null;
  downPayment?: number | null;
  governorateId?: number | null;
  location?: string | null;
  maintenaceInstallment?: number | null;
  maintenanceCost?: number | null;
  minNumberOfShares?: number | null;
  monthlyInstallment?: number | null;
  numberOfShares?: number | null;
  numberOfYears?: number | null;
  propertyId: number;
  sharePrice?: number | null;
  status?: Status;
  transactionFees?: number | null;
  type?: Type;
  unitPrice?: number | null;
}
