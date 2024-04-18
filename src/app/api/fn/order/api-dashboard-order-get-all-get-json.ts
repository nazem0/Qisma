/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { OrderStatus } from '../../models/order-status';
import { OrderViewModelForAdminPaginationViewModelApiResult } from '../../models/order-view-model-for-admin-pagination-view-model-api-result';

export interface ApiDashboardOrderGetAllGet$Json$Params {
  OrderStatus: OrderStatus;
  PageNumber: number;
  PageSize: number;
}

export function apiDashboardOrderGetAllGet$Json(http: HttpClient, rootUrl: string, params: ApiDashboardOrderGetAllGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<OrderViewModelForAdminPaginationViewModelApiResult>> {
  const rb = new RequestBuilder(rootUrl, apiDashboardOrderGetAllGet$Json.PATH, 'get');
  if (params) {
    rb.query('OrderStatus', params.OrderStatus, {"style":"form"});
    rb.query('PageNumber', params.PageNumber, {"style":"form"});
    rb.query('PageSize', params.PageSize, {"style":"form"});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<OrderViewModelForAdminPaginationViewModelApiResult>;
    })
  );
}

apiDashboardOrderGetAllGet$Json.PATH = '/api/Dashboard/Order/GetAll';
