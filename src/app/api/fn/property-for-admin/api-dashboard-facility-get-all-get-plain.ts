/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { FacilityViewModelForAdminListApiResult } from '../../models/facility-view-model-for-admin-list-api-result';

export interface ApiDashboardFacilityGetAllGet$Plain$Params {
}

export function apiDashboardFacilityGetAllGet$Plain(http: HttpClient, rootUrl: string, params?: ApiDashboardFacilityGetAllGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<FacilityViewModelForAdminListApiResult>> {
  const rb = new RequestBuilder(rootUrl, apiDashboardFacilityGetAllGet$Plain.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<FacilityViewModelForAdminListApiResult>;
    })
  );
}

apiDashboardFacilityGetAllGet$Plain.PATH = '/api/Dashboard/Facility/GetAll';
