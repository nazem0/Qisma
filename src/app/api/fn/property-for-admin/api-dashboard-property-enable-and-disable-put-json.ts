/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { StringApiResult } from '../../models/string-api-result';

export interface ApiDashboardPropertyEnableAndDisablePut$Json$Params {
  PropertyId: number;
}

export function apiDashboardPropertyEnableAndDisablePut$Json(http: HttpClient, rootUrl: string, params: ApiDashboardPropertyEnableAndDisablePut$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<StringApiResult>> {
  const rb = new RequestBuilder(rootUrl, apiDashboardPropertyEnableAndDisablePut$Json.PATH, 'put');
  if (params) {
    rb.query('PropertyId', params.PropertyId, {"style":"form"});
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

apiDashboardPropertyEnableAndDisablePut$Json.PATH = '/api/Dashboard/Property/EnableAndDisable';
