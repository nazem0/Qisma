/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AddNewPropertyViewModel } from '../../models/add-new-property-view-model';
import { StringApiResult } from '../../models/string-api-result';

export interface ApiDashboardPropertyAddPost$Json$Params {
      body?: AddNewPropertyViewModel
}

export function apiDashboardPropertyAddPost$Json(http: HttpClient, rootUrl: string, params?: ApiDashboardPropertyAddPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<StringApiResult>> {
  const rb = new RequestBuilder(rootUrl, apiDashboardPropertyAddPost$Json.PATH, 'post');
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

apiDashboardPropertyAddPost$Json.PATH = '/api/Dashboard/Property/Add';
