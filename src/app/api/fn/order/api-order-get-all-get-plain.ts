/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { OrderStatus } from '../../models/order-status';
import { OrderViewModelForUserPaginationViewModelApiResult } from '../../models/order-view-model-for-user-pagination-view-model-api-result';

export interface ApiOrderGetAllGet$Plain$Params {
  OrderStatus: OrderStatus;
  PageNumber: number;
  PageSize: number;
}

export function apiOrderGetAllGet$Plain(http: HttpClient, rootUrl: string, params: ApiOrderGetAllGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<OrderViewModelForUserPaginationViewModelApiResult>> {
  const rb = new RequestBuilder(rootUrl, apiOrderGetAllGet$Plain.PATH, 'get');
  if (params) {
    rb.query('OrderStatus', params.OrderStatus, {"style":"form"});
    rb.query('PageNumber', params.PageNumber, {"style":"form"});
    rb.query('PageSize', params.PageSize, {"style":"form"});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<OrderViewModelForUserPaginationViewModelApiResult>;
    })
  );
}

apiOrderGetAllGet$Plain.PATH = '/api/Order/GetAll';
