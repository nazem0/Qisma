/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { StringApiResult } from '../../models/string-api-result';

export interface ApiDashboardPropertyFacilityUpdateIndexPut$Json$Params {
      body?: Array<number>
}

export function apiDashboardPropertyFacilityUpdateIndexPut$Json(http: HttpClient, rootUrl: string, params?: ApiDashboardPropertyFacilityUpdateIndexPut$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<StringApiResult>> {
  const rb = new RequestBuilder(rootUrl, apiDashboardPropertyFacilityUpdateIndexPut$Json.PATH, 'put');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<StringApiResult>;
    })
  );
}

apiDashboardPropertyFacilityUpdateIndexPut$Json.PATH = '/api/Dashboard/PropertyFacility/UpdateIndex';
