/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { StringApiResult } from '../../models/string-api-result';

export interface ApiDashboardOrdersConfirmOrderPost$Plain$Params {
  OrderId: number;
}

export function apiDashboardOrdersConfirmOrderPost$Plain(http: HttpClient, rootUrl: string, params: ApiDashboardOrdersConfirmOrderPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<StringApiResult>> {
  const rb = new RequestBuilder(rootUrl, apiDashboardOrdersConfirmOrderPost$Plain.PATH, 'post');
  if (params) {
    rb.query('OrderId', params.OrderId, {"style":"form"});
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

apiDashboardOrdersConfirmOrderPost$Plain.PATH = '/api/Dashboard/Orders/ConfirmOrder';
