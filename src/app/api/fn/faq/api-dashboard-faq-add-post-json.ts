/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AddFaqViewModel } from '../../models/add-faq-view-model';
import { StringApiResult } from '../../models/string-api-result';

export interface ApiDashboardFaqAddPost$Json$Params {
      body?: AddFaqViewModel
}

export function apiDashboardFaqAddPost$Json(http: HttpClient, rootUrl: string, params?: ApiDashboardFaqAddPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<StringApiResult>> {
  const rb = new RequestBuilder(rootUrl, apiDashboardFaqAddPost$Json.PATH, 'post');
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

apiDashboardFaqAddPost$Json.PATH = '/api/Dashboard/FAQ/Add';
