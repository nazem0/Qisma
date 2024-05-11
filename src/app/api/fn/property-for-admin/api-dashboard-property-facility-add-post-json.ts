/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PropertyFacilityViewModelForAdminApiResult } from '../../models/property-facility-view-model-for-admin-api-result';

export interface ApiDashboardPropertyFacilityAddPost$Json$Params {
  FacilityId?: number;
  Description?: string;
  PropertyId: string;
}

export function apiDashboardPropertyFacilityAddPost$Json(http: HttpClient, rootUrl: string, params: ApiDashboardPropertyFacilityAddPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<PropertyFacilityViewModelForAdminApiResult>> {
  const rb = new RequestBuilder(rootUrl, apiDashboardPropertyFacilityAddPost$Json.PATH, 'post');
  if (params) {
    rb.query('FacilityId', params.FacilityId, {"style":"form"});
    rb.query('Description', params.Description, {"style":"form"});
    rb.query('PropertyId', params.PropertyId, {"style":"form"});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PropertyFacilityViewModelForAdminApiResult>;
    })
  );
}

apiDashboardPropertyFacilityAddPost$Json.PATH = '/api/Dashboard/PropertyFacility/Add';
