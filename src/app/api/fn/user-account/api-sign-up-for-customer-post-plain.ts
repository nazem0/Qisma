/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { InvestorType } from '../../models/investor-type';
import { UserDataViewModelApiResult } from '../../models/user-data-view-model-api-result';

export interface ApiSignUpForCustomerPost$Plain$Params {
      body?: {
'FirstName': string;
'MiddleName': string;
'LastName': string;
'PhoneNumber': string;
'Email': string;
'DateOfBirth': string;
'Address': string;
'IdentityNumber': string;
'IdentityImage': Blob;
'Occupation'?: string;
'CompanyName'?: string;
'ReciveEmails': boolean;
'InvestorType': InvestorType;
'Password': string;
}
}

export function apiSignUpForCustomerPost$Plain(http: HttpClient, rootUrl: string, params?: ApiSignUpForCustomerPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<UserDataViewModelApiResult>> {
  const rb = new RequestBuilder(rootUrl, apiSignUpForCustomerPost$Plain.PATH, 'post');
  if (params) {
    rb.body(params.body, 'multipart/form-data');
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<UserDataViewModelApiResult>;
    })
  );
}

apiSignUpForCustomerPost$Plain.PATH = '/api/SignUpForCustomer';
