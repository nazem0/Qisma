/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PropertyDetailsViewModelForAdminApiResult } from '../../models/property-details-view-model-for-admin-api-result';

export interface ApiDashboardPropertyGetByIdGet$Plain$Params {
  PropertyId: string;
}

export function apiDashboardPropertyGetByIdGet$Plain(http: HttpClient, rootUrl: string, params: ApiDashboardPropertyGetByIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<PropertyDetailsViewModelForAdminApiResult>> {
  const rb = new RequestBuilder(rootUrl, apiDashboardPropertyGetByIdGet$Plain.PATH, 'get');
  if (params) {
    rb.query('PropertyId', params.PropertyId, {"style":"form"});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PropertyDetailsViewModelForAdminApiResult>;
    })
  );
}

apiDashboardPropertyGetByIdGet$Plain.PATH = '/api/Dashboard/Property/GetById';
