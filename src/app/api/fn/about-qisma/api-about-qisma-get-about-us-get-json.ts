/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AboutUsViewModelApiResult } from '../../models/about-us-view-model-api-result';

export interface ApiAboutQismaGetAboutUsGet$Json$Params {
}

export function apiAboutQismaGetAboutUsGet$Json(http: HttpClient, rootUrl: string, params?: ApiAboutQismaGetAboutUsGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<AboutUsViewModelApiResult>> {
  const rb = new RequestBuilder(rootUrl, apiAboutQismaGetAboutUsGet$Json.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<AboutUsViewModelApiResult>;
    })
  );
}

apiAboutQismaGetAboutUsGet$Json.PATH = '/api/AboutQisma/GetAboutUs';
