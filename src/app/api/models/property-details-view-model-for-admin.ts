/* tslint:disable */
/* eslint-disable */
import { PropertyFacilityViewModelForAdmin } from '../models/property-facility-view-model-for-admin';
import { PropertyImageViewModelforAdmin } from '../models/property-image-view-modelfor-admin';
import { Status } from '../models/status';
import { Type } from '../models/type';
export interface PropertyDetailsViewModelForAdmin {
  annualPriceAppreciation?: number;
  annualRentalYield?: number;
  availableShares?: number;
  city?: string | null;
  cityId?: number;
  deliveryInstallment?: number | null;
  description?: string | null;
  downPayment?: number | null;
  facilities?: Array<PropertyFacilityViewModelForAdmin> | null;
  governorate?: string | null;
  governorateId?: number;
  isDeleted?: boolean;
  location?: string | null;
  maintenaceInstallment?: number | null;
  maintenanceCost?: number | null;
  maintenanceCostNumerical?: number | null;
  minNumberOfShares?: number;
  monthlyInstallment?: number | null;
  numberOfShares?: number;
  numberOfYears?: number | null;
  pendingShares?: number;
  projectedAnnualReturn?: number;
  propertyId?: number;
  propertyImages?: Array<PropertyImageViewModelforAdmin> | null;
  sharePrice?: number;
  status?: Status;
  transactionFees?: number | null;
  transactionFeesNumerical?: number | null;
  type?: Type;
  unitPrice?: number;
}
