/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AboutUsViewModel } from '../../models/about-us-view-model';
import { StringApiResult } from '../../models/string-api-result';

export interface ApiDashboardAboutQismaUpdateAboutUsPut$Plain$Params {
      body?: AboutUsViewModel
}

export function apiDashboardAboutQismaUpdateAboutUsPut$Plain(http: HttpClient, rootUrl: string, params?: ApiDashboardAboutQismaUpdateAboutUsPut$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<StringApiResult>> {
  const rb = new RequestBuilder(rootUrl, apiDashboardAboutQismaUpdateAboutUsPut$Plain.PATH, 'put');
  if (params) {
    rb.body(params.body, 'application/*+json');
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

apiDashboardAboutQismaUpdateAboutUsPut$Plain.PATH = '/api/Dashboard/AboutQisma/UpdateAboutUs';
