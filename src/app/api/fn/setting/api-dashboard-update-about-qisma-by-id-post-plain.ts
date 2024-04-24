/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { StringApiResult } from '../../models/string-api-result';

export interface ApiDashboardUpdateAboutQismaByIdPost$Plain$Params {
  id: number;
  content: string;
}

export function apiDashboardUpdateAboutQismaByIdPost$Plain(http: HttpClient, rootUrl: string, params: ApiDashboardUpdateAboutQismaByIdPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<StringApiResult>> {
  const rb = new RequestBuilder(rootUrl, apiDashboardUpdateAboutQismaByIdPost$Plain.PATH, 'post');
  if (params) {
    rb.query('id', params.id, {"style":"form"});
    rb.query('content', params.content, {"style":"form"});
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

apiDashboardUpdateAboutQismaByIdPost$Plain.PATH = '/api/Dashboard/UpdateAboutQismaById';
