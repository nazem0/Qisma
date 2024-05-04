/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { BlogListApiResult } from '../../models/blog-list-api-result';

export interface ApiBlogGetAllGet$Json$Params {
}

export function apiBlogGetAllGet$Json(http: HttpClient, rootUrl: string, params?: ApiBlogGetAllGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<BlogListApiResult>> {
  const rb = new RequestBuilder(rootUrl, apiBlogGetAllGet$Json.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<BlogListApiResult>;
    })
  );
}

apiBlogGetAllGet$Json.PATH = '/api/Blog/GetAll';
