/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { FacilityViewModelForAdminListApiResult } from '../../models/facility-view-model-for-admin-list-api-result';

export interface ApiDashboardFacilityGetAllGet$Json$Params {
}

export function apiDashboardFacilityGetAllGet$Json(http: HttpClient, rootUrl: string, params?: ApiDashboardFacilityGetAllGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<FacilityViewModelForAdminListApiResult>> {
  const rb = new RequestBuilder(rootUrl, apiDashboardFacilityGetAllGet$Json.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<FacilityViewModelForAdminListApiResult>;
    })
  );
}

apiDashboardFacilityGetAllGet$Json.PATH = '/api/Dashboard/Facility/GetAll';
