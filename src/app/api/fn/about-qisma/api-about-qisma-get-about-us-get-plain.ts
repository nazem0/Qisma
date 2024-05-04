/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AboutUsViewModelApiResult } from '../../models/about-us-view-model-api-result';

export interface ApiAboutQismaGetAboutUsGet$Plain$Params {
}

export function apiAboutQismaGetAboutUsGet$Plain(http: HttpClient, rootUrl: string, params?: ApiAboutQismaGetAboutUsGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<AboutUsViewModelApiResult>> {
  const rb = new RequestBuilder(rootUrl, apiAboutQismaGetAboutUsGet$Plain.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<AboutUsViewModelApiResult>;
    })
  );
}

apiAboutQismaGetAboutUsGet$Plain.PATH = '/api/AboutQisma/GetAboutUs';
