/* tslint:disable */
/* eslint-disable */
import { AddPropertyFacilityViewModel } from '../models/add-property-facility-view-model';
import { DescriptionDetailsViewModel } from '../models/description-details-view-model';
import { Type } from '../models/type';
export interface AddNewPropertyViewModel {
  adminFees?: number | null;
  annualPriceAppreciation: number;
  annualRentalYield: number;
  cityId: number;
  deliveryInstallment?: number | null;
  descriptionDetails: Array<DescriptionDetailsViewModel>;
  downPayment?: number | null;
  facilities?: Array<AddPropertyFacilityViewModel> | null;
  governorateId: number;
  location: string;
  maintenaceInstallment?: number | null;
  maintenanceCost?: number | null;
  monthlyInstallment?: number | null;
  numberOfShares: number;
  numberOfYears?: number | null;
  sharePrice: number;
  totalPrice: number;
  type: Type;
}
