/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { StringApiResult } from '../../models/string-api-result';

export interface ApiDashboardBlogUpdatePut$Json$Params {
      body?: {
'Id': number;
'Image'?: Blob;
'Title'?: string;
'Description'?: string;
'Link'?: string;
}
}

export function apiDashboardBlogUpdatePut$Json(http: HttpClient, rootUrl: string, params?: ApiDashboardBlogUpdatePut$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<StringApiResult>> {
  const rb = new RequestBuilder(rootUrl, apiDashboardBlogUpdatePut$Json.PATH, 'put');
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

apiDashboardBlogUpdatePut$Json.PATH = '/api/Dashboard/Blog/Update';
