/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { OrderingPageViewModelApiResult } from '../../models/ordering-page-view-model-api-result';

export interface ApiPropertyGetOrderingPageGet$Plain$Params {
  PropertyId: string;
}

export function apiPropertyGetOrderingPageGet$Plain(http: HttpClient, rootUrl: string, params: ApiPropertyGetOrderingPageGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<OrderingPageViewModelApiResult>> {
  const rb = new RequestBuilder(rootUrl, apiPropertyGetOrderingPageGet$Plain.PATH, 'get');
  if (params) {
    rb.query('PropertyId', params.PropertyId, {"style":"form"});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<OrderingPageViewModelApiResult>;
    })
  );
}

apiPropertyGetOrderingPageGet$Plain.PATH = '/api/Property/GetOrderingPage';
