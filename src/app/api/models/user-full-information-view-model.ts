/* tslint:disable */
/* eslint-disable */
import { InvestorType } from '../models/investor-type';
export interface UserFullInformationViewModel {
  address?: string | null;
  companyName?: string | null;
  dateOfBirth?: string;
  email?: string | null;
  firstName?: string | null;
  identityImageUrl?: string | null;
  identityNumber?: string | null;
  investorType?: string | null;
  investorTypeId?: InvestorType;
  lastName?: string | null;
  middleName?: string | null;
  occupation?: string | null;
  phoneNumber?: string | null;
  reciveEmails?: boolean | null;
  userId?: string | null;
}
