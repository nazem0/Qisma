/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PropertyViewModelInListViewForUserPaginationViewModelApiResult } from '../../models/property-view-model-in-list-view-for-user-pagination-view-model-api-result';

export interface ApiPropertyGetByIdGet$Plain$Params {
  PropertyId: number;
}

export function apiPropertyGetByIdGet$Plain(http: HttpClient, rootUrl: string, params: ApiPropertyGetByIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<PropertyViewModelInListViewForUserPaginationViewModelApiResult>> {
  const rb = new RequestBuilder(rootUrl, apiPropertyGetByIdGet$Plain.PATH, 'get');
  if (params) {
    rb.query('PropertyId', params.PropertyId, {"style":"form"});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PropertyViewModelInListViewForUserPaginationViewModelApiResult>;
    })
  );
}

apiPropertyGetByIdGet$Plain.PATH = '/api/Property/GetById';
