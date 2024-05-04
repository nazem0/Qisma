/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { SupportViewModelApiResult } from '../../models/support-view-model-api-result';

export interface ApiAboutQismaGetSupportGet$Json$Params {
}

export function apiAboutQismaGetSupportGet$Json(http: HttpClient, rootUrl: string, params?: ApiAboutQismaGetSupportGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<SupportViewModelApiResult>> {
  const rb = new RequestBuilder(rootUrl, apiAboutQismaGetSupportGet$Json.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<SupportViewModelApiResult>;
    })
  );
}

apiAboutQismaGetSupportGet$Json.PATH = '/api/AboutQisma/GetSupport';
