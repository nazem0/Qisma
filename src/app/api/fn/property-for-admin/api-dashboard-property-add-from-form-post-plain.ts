/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AddPropertyFacilityViewModel } from '../../models/add-property-facility-view-model';
import { Status } from '../../models/status';
import { StringApiResult } from '../../models/string-api-result';
import { Type } from '../../models/type';

export interface ApiDashboardPropertyAddFromFormPost$Plain$Params {
      body?: {
'Location': string;
'GovernorateId': number;
'CityId': number;
'UnitPrice': number;
'Description': string;
'MaintenanceCost'?: number;
'TransactionFees'?: number;
'NumberOfShares': number;
'MinNumberOfShares': number;
'SharePrice': number;
'AnnualRentalYield': number;
'AnnualPriceAppreciation': number;
'DownPayment'?: number;
'MonthlyInstallment'?: number;
'NumberOfYears'?: number;
'MaintenaceInstallment'?: number;
'DeliveryInstallment'?: number;
'Type': Type;
'Status': Status;
'Facilities'?: Array<AddPropertyFacilityViewModel>;
'PropertyImages': Array<Blob>;
}
}

export function apiDashboardPropertyAddFromFormPost$Plain(http: HttpClient, rootUrl: string, params?: ApiDashboardPropertyAddFromFormPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<StringApiResult>> {
  const rb = new RequestBuilder(rootUrl, apiDashboardPropertyAddFromFormPost$Plain.PATH, 'post');
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

apiDashboardPropertyAddFromFormPost$Plain.PATH = '/api/Dashboard/Property/AddFromForm';
