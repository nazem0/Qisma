/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { StringApiResult } from '../../models/string-api-result';

export interface ApiDashboardOrdersConfirmOrderPost$Json$Params {
  OrderId: number;
}

export function apiDashboardOrdersConfirmOrderPost$Json(http: HttpClient, rootUrl: string, params: ApiDashboardOrdersConfirmOrderPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<StringApiResult>> {
  const rb = new RequestBuilder(rootUrl, apiDashboardOrdersConfirmOrderPost$Json.PATH, 'post');
  if (params) {
    rb.query('OrderId', params.OrderId, {"style":"form"});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<StringApiResult>;
    })
  );
}

apiDashboardOrdersConfirmOrderPost$Json.PATH = '/api/Dashboard/Orders/ConfirmOrder';
