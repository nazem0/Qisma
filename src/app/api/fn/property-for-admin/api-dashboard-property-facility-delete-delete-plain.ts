/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { StringApiResult } from '../../models/string-api-result';

export interface ApiDashboardPropertyFacilityDeleteDelete$Plain$Params {
  PropertyFacilityId: number;
}

export function apiDashboardPropertyFacilityDeleteDelete$Plain(http: HttpClient, rootUrl: string, params: ApiDashboardPropertyFacilityDeleteDelete$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<StringApiResult>> {
  const rb = new RequestBuilder(rootUrl, apiDashboardPropertyFacilityDeleteDelete$Plain.PATH, 'delete');
  if (params) {
    rb.query('PropertyFacilityId', params.PropertyFacilityId, {"style":"form"});
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

apiDashboardPropertyFacilityDeleteDelete$Plain.PATH = '/api/Dashboard/PropertyFacility/Delete';
