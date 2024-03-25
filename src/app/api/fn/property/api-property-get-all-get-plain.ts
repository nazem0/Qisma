/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PropertyViewModelInListViewForUserPaginationViewModelApiResult } from '../../models/property-view-model-in-list-view-for-user-pagination-view-model-api-result';

export interface ApiPropertyGetAllGet$Plain$Params {
  PageNumber: number;
  PageSize: number;
}

export function apiPropertyGetAllGet$Plain(http: HttpClient, rootUrl: string, params: ApiPropertyGetAllGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<PropertyViewModelInListViewForUserPaginationViewModelApiResult>> {
  const rb = new RequestBuilder(rootUrl, apiPropertyGetAllGet$Plain.PATH, 'get');
  if (params) {
    rb.query('PageNumber', params.PageNumber, {"style":"form"});
    rb.query('PageSize', params.PageSize, {"style":"form"});
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

apiPropertyGetAllGet$Plain.PATH = '/api/Property/GetAll';
