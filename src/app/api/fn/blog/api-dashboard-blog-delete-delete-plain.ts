/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { StringApiResult } from '../../models/string-api-result';

export interface ApiDashboardBlogDeleteDelete$Plain$Params {
  BlogId: number;
}

export function apiDashboardBlogDeleteDelete$Plain(http: HttpClient, rootUrl: string, params: ApiDashboardBlogDeleteDelete$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<StringApiResult>> {
  const rb = new RequestBuilder(rootUrl, apiDashboardBlogDeleteDelete$Plain.PATH, 'delete');
  if (params) {
    rb.query('BlogId', params.BlogId, {"style":"form"});
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

apiDashboardBlogDeleteDelete$Plain.PATH = '/api/Dashboard/Blog/Delete';
