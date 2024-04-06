/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { InvestoreType } from '../../models/investore-type';
import { UserDataViewModelApiResult } from '../../models/user-data-view-model-api-result';

export interface ApiSignUpForCustomerPost$Json$Params {
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
'InvestoreType': InvestoreType;
'Password': string;
}
}

export function apiSignUpForCustomerPost$Json(http: HttpClient, rootUrl: string, params?: ApiSignUpForCustomerPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<UserDataViewModelApiResult>> {
  const rb = new RequestBuilder(rootUrl, apiSignUpForCustomerPost$Json.PATH, 'post');
  if (params) {
    rb.body(params.body, 'multipart/form-data');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<UserDataViewModelApiResult>;
    })
  );
}

apiSignUpForCustomerPost$Json.PATH = '/api/SignUpForCustomer';
