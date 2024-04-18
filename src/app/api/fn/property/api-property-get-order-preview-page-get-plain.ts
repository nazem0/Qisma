/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { OrderPreviewPageViewModelApiResult } from '../../models/order-preview-page-view-model-api-result';

export interface ApiPropertyGetOrderPreviewPageGet$Plain$Params {
  PropertyId: string;
  NumberOfShares: number;
}

export function apiPropertyGetOrderPreviewPageGet$Plain(http: HttpClient, rootUrl: string, params: ApiPropertyGetOrderPreviewPageGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<OrderPreviewPageViewModelApiResult>> {
  const rb = new RequestBuilder(rootUrl, apiPropertyGetOrderPreviewPageGet$Plain.PATH, 'get');
  if (params) {
    rb.query('PropertyId', params.PropertyId, {"style":"form"});
    rb.query('NumberOfShares', params.NumberOfShares, {"style":"form"});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<OrderPreviewPageViewModelApiResult>;
    })
  );
}

apiPropertyGetOrderPreviewPageGet$Plain.PATH = '/api/Property/GetOrderPreviewPage';
