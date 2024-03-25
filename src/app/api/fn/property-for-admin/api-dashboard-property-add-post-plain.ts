/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AddNewPropertyViewModel } from '../../models/add-new-property-view-model';
import { Int32ApiResult } from '../../models/int-32-api-result';

export interface ApiDashboardPropertyAddPost$Plain$Params {
      body?: AddNewPropertyViewModel
}

export function apiDashboardPropertyAddPost$Plain(http: HttpClient, rootUrl: string, params?: ApiDashboardPropertyAddPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Int32ApiResult>> {
  const rb = new RequestBuilder(rootUrl, apiDashboardPropertyAddPost$Plain.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Int32ApiResult>;
    })
  );
}

apiDashboardPropertyAddPost$Plain.PATH = '/api/Dashboard/Property/Add';
