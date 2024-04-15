/* tslint:disable */
/* eslint-disable */
import { AddPropertyFacilityViewModel } from '../models/add-property-facility-view-model';
import { Status } from '../models/status';
import { Type } from '../models/type';
export interface AddNewPropertyViewModel {
  annualPriceAppreciation: number;
  annualRentalYield: number;
  cityId: number;
  deliveryInstallment?: number | null;
  description: string;
  downPayment?: number | null;
  facilities?: Array<AddPropertyFacilityViewModel> | null;
  governorateId: number;
  location: string;
  maintenaceInstallment?: number | null;
  maintenanceCost?: number | null;
  minNumberOfShares: number;
  monthlyInstallment?: number | null;
  numberOfShares: number;
  numberOfYears?: number | null;
  propertyImages: Array<Blob>;
  sharePrice: number;
  status: Status;
  transactionFees?: number | null;
  type: Type;
  unitPrice: number;
}
