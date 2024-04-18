/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { OrderingPageViewModelApiResult } from '../../models/ordering-page-view-model-api-result';

export interface ApiPropertyGetOrderingPageGet$Json$Params {
  PropertyId: string;
}

export function apiPropertyGetOrderingPageGet$Json(http: HttpClient, rootUrl: string, params: ApiPropertyGetOrderingPageGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<OrderingPageViewModelApiResult>> {
  const rb = new RequestBuilder(rootUrl, apiPropertyGetOrderingPageGet$Json.PATH, 'get');
  if (params) {
    rb.query('PropertyId', params.PropertyId, {"style":"form"});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<OrderingPageViewModelApiResult>;
    })
  );
}

apiPropertyGetOrderingPageGet$Json.PATH = '/api/Property/GetOrderingPage';
