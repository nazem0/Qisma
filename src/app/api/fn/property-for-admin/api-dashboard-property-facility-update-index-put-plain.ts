/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { StringApiResult } from '../../models/string-api-result';

export interface ApiDashboardPropertyFacilityUpdateIndexPut$Plain$Params {
      body?: Array<number>
}

export function apiDashboardPropertyFacilityUpdateIndexPut$Plain(http: HttpClient, rootUrl: string, params?: ApiDashboardPropertyFacilityUpdateIndexPut$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<StringApiResult>> {
  const rb = new RequestBuilder(rootUrl, apiDashboardPropertyFacilityUpdateIndexPut$Plain.PATH, 'put');
  if (params) {
    rb.body(params.body, 'application/*+json');
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

apiDashboardPropertyFacilityUpdateIndexPut$Plain.PATH = '/api/Dashboard/PropertyFacility/UpdateIndex';
