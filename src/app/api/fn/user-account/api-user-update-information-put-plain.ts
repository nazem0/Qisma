/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { InvestorType } from '../../models/investor-type';
import { StringApiResult } from '../../models/string-api-result';

export interface ApiUserUpdateInformationPut$Plain$Params {
      body?: {
'FirstName'?: string;
'MiddleName'?: string;
'LastName'?: string;
'PhoneNumber'?: string;
'Email'?: string;
'DateOfBirth'?: string;
'Address'?: string;
'IdentityNumber'?: string;
'IdentityImage'?: Blob;
'Occupation'?: string;
'CompanyName'?: string;
'ReciveEmails'?: boolean;
'InvestorType'?: InvestorType;
}
}

export function apiUserUpdateInformationPut$Plain(http: HttpClient, rootUrl: string, params?: ApiUserUpdateInformationPut$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<StringApiResult>> {
  const rb = new RequestBuilder(rootUrl, apiUserUpdateInformationPut$Plain.PATH, 'put');
  if (params) {
    rb.body(params.body, 'multipart/form-data');
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<StringApiResult>;
    })
  );
}

apiUserUpdateInformationPut$Plain.PATH = '/api/User/UpdateInformation';
