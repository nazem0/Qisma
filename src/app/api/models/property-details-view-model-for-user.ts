/* tslint:disable */
/* eslint-disable */
import { PropertyFacilityViewModelForUser } from '../models/property-facility-view-model-for-user';
import { Status } from '../models/status';
import { Type } from '../models/type';
export interface PropertyDetailsViewModelForUser {
  annualPriceAppreciation?: number;
  annualRentalYield?: number;
  availableShares?: number;
  city?: string | null;
  deliveryInstallment?: number | null;
  description?: string | null;
  downPayment?: number | null;
  governorate?: string | null;
  isDeleted?: boolean;
  location?: string | null;
  maintenaceInstallment?: number | null;
  maintenanceCost?: number | null;
  maintenanceCostNumerical?: number | null;
  minNumberOfShares?: number;
  monthlyInstallment?: number | null;
  numberOfShares?: number;
  numberOfYears?: number | null;
  projectedAnnualReturn?: number;
  propertyFacilities?: Array<PropertyFacilityViewModelForUser> | null;
  propertyId?: string | null;
  propertyImages?: Array<string> | null;
  sharePrice?: number;
  status?: Status;
  transactionFees?: number | null;
  transactionFeesNumerical?: number | null;
  type?: Type;
  unitPrice?: number;
  usedShares?: number;
}
