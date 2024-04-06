/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { StringApiResult } from '../../models/string-api-result';

export interface ApiDashboardPropertyImageDeleteDelete$Json$Params {
  PropertyImageId: number;
}

export function apiDashboardPropertyImageDeleteDelete$Json(http: HttpClient, rootUrl: string, params: ApiDashboardPropertyImageDeleteDelete$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<StringApiResult>> {
  const rb = new RequestBuilder(rootUrl, apiDashboardPropertyImageDeleteDelete$Json.PATH, 'delete');
  if (params) {
    rb.query('PropertyImageId', params.PropertyImageId, {"style":"form"});
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

apiDashboardPropertyImageDeleteDelete$Json.PATH = '/api/Dashboard/PropertyImage/Delete';
