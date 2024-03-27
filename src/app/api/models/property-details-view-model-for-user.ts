/* tslint:disable */
/* eslint-disable */
import { DescriptionDetailsViewModel } from '../models/description-details-view-model';
import { PropertyFacilityViewModelForUser } from '../models/property-facility-view-model-for-user';
import { Type } from '../models/type';
export interface PropertyDetailsViewModelForUser {
  annualPriceAppreciation?: number;
  annualRentalYield?: number;
  availableShares?: number;
  city?: string | null;
  deliveryInstallment?: number | null;
  descriptionDetails?: Array<DescriptionDetailsViewModel> | null;
  downPayment?: number | null;
  governorate?: string | null;
  location?: string | null;
  maintenaceInstallment?: number | null;
  maintenanceCostNumerical?: number | null;
  maintenanceCostPercentage?: number | null;
  monthlyInstallment?: number | null;
  numberOfShares?: number;
  numberOfYears?: number | null;
  projectedAnnualReturn?: number;
  propertyFacilities?: Array<PropertyFacilityViewModelForUser> | null;
  propertyImages?: Array<string> | null;
  sharePrice?: number;
  transactionFeesNumerical?: number | null;
  transactionFeesPercentage?: number | null;
  type?: Type;
  unitPrice?: number;
  usedShares?: number;
}
