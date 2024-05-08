/* tslint:disable */
/* eslint-disable */
import { AddPropertyFacilityViewModel } from '../models/add-property-facility-view-model';
import { Status } from '../models/status';
import { Type } from '../models/type';
export interface UpdatePropertyViewModel {
  annualPriceAppreciation?: number | null;
  annualRentalYield?: number | null;
  cityId?: number | null;
  deliveryInstallment?: number | null;
  description?: string | null;
  downPayment?: number | null;
  facilities?: Array<AddPropertyFacilityViewModel> | null;
  governorateId?: number | null;
  location?: string | null;
  maintenaceInstallment?: number | null;
  maintenanceCost?: number | null;
  minNumberOfShares?: number | null;
  monthlyInstallment?: number | null;
  numberOfShares?: number | null;
  numberOfYears?: number | null;
  propertyId: string;
  sharePrice?: number | null;
  status?: Status;
  transactionFees?: number | null;
  type?: Type;
  unitPrice?: number | null;
}
