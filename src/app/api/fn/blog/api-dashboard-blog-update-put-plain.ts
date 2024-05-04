/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { StringApiResult } from '../../models/string-api-result';

export interface ApiDashboardBlogUpdatePut$Plain$Params {
      body?: {
'Id': number;
'Image'?: Blob;
'Title'?: string;
'Description'?: string;
'Link'?: string;
}
}

export function apiDashboardBlogUpdatePut$Plain(http: HttpClient, rootUrl: string, params?: ApiDashboardBlogUpdatePut$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<StringApiResult>> {
  const rb = new RequestBuilder(rootUrl, apiDashboardBlogUpdatePut$Plain.PATH, 'put');
  if (params) {
    rb.body(params.body, 'multipart/form-data');
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

apiDashboardBlogUpdatePut$Plain.PATH = '/api/Dashboard/Blog/Update';
