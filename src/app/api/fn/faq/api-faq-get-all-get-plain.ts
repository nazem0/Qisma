/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { FaqListApiResult } from '../../models/faq-list-api-result';

export interface ApiFaqGetAllGet$Plain$Params {
}

export function apiFaqGetAllGet$Plain(http: HttpClient, rootUrl: string, params?: ApiFaqGetAllGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<FaqListApiResult>> {
  const rb = new RequestBuilder(rootUrl, apiFaqGetAllGet$Plain.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<FaqListApiResult>;
    })
  );
}

apiFaqGetAllGet$Plain.PATH = '/api/FAQ/GetAll';
