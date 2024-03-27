/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { StringApiResult } from '../../models/string-api-result';

export interface ApiDashboardFacilityAddPost$Json$Params {
      body?: {
'ContentType'?: string;
'ContentDisposition'?: string;
'Headers'?: {
[key: string]: Array<string>;
};
'Length'?: number;
'Name'?: string;
'FileName'?: string;
}
}

export function apiDashboardFacilityAddPost$Json(http: HttpClient, rootUrl: string, params?: ApiDashboardFacilityAddPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<StringApiResult>> {
  const rb = new RequestBuilder(rootUrl, apiDashboardFacilityAddPost$Json.PATH, 'post');
  if (params) {
    rb.body(params.body, 'multipart/form-data');
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

apiDashboardFacilityAddPost$Json.PATH = '/api/Dashboard/Facility/Add';
