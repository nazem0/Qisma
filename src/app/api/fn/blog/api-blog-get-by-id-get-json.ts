/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { BlogApiResult } from '../../models/blog-api-result';

export interface ApiBlogGetByIdGet$Json$Params {
  BlogId: number;
}

export function apiBlogGetByIdGet$Json(http: HttpClient, rootUrl: string, params: ApiBlogGetByIdGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<BlogApiResult>> {
  const rb = new RequestBuilder(rootUrl, apiBlogGetByIdGet$Json.PATH, 'get');
  if (params) {
    rb.query('BlogId', params.BlogId, {"style":"form"});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<BlogApiResult>;
    })
  );
}

apiBlogGetByIdGet$Json.PATH = '/api/Blog/GetById';
