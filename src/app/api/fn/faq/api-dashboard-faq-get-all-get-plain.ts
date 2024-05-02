/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { FaqViewModelListApiResult } from '../../models/faq-view-model-list-api-result';

export interface ApiDashboardFaqGetAllGet$Plain$Params {
}

export function apiDashboardFaqGetAllGet$Plain(http: HttpClient, rootUrl: string, params?: ApiDashboardFaqGetAllGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<FaqViewModelListApiResult>> {
  const rb = new RequestBuilder(rootUrl, apiDashboardFaqGetAllGet$Plain.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<FaqViewModelListApiResult>;
    })
  );
}

apiDashboardFaqGetAllGet$Plain.PATH = '/api/Dashboard/FAQ/GetAll';
