/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { StringApiResult } from '../../models/string-api-result';

export interface ApiDashboardFacilityAddPost$Plain$Params {
  Name: string;
  SVG: string;
}

export function apiDashboardFacilityAddPost$Plain(http: HttpClient, rootUrl: string, params: ApiDashboardFacilityAddPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<StringApiResult>> {
  const rb = new RequestBuilder(rootUrl, apiDashboardFacilityAddPost$Plain.PATH, 'post');
  if (params) {
    rb.query('Name', params.Name, {"style":"form"});
    rb.query('SVG', params.SVG, {"style":"form"});
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

apiDashboardFacilityAddPost$Plain.PATH = '/api/Dashboard/Facility/Add';
