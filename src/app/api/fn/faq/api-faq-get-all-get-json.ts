/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { FaqListApiResult } from '../../models/faq-list-api-result';

export interface ApiFaqGetAllGet$Json$Params {
}

export function apiFaqGetAllGet$Json(http: HttpClient, rootUrl: string, params?: ApiFaqGetAllGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<FaqListApiResult>> {
  const rb = new RequestBuilder(rootUrl, apiFaqGetAllGet$Json.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<FaqListApiResult>;
    })
  );
}

apiFaqGetAllGet$Json.PATH = '/api/FAQ/GetAll';
