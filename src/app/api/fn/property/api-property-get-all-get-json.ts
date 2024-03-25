/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PropertyViewModelInListViewForUserPaginationViewModelApiResult } from '../../models/property-view-model-in-list-view-for-user-pagination-view-model-api-result';

export interface ApiPropertyGetAllGet$Json$Params {
  PageNumber: number;
  PageSize: number;
}

export function apiPropertyGetAllGet$Json(http: HttpClient, rootUrl: string, params: ApiPropertyGetAllGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<PropertyViewModelInListViewForUserPaginationViewModelApiResult>> {
  const rb = new RequestBuilder(rootUrl, apiPropertyGetAllGet$Json.PATH, 'get');
  if (params) {
    rb.query('PageNumber', params.PageNumber, {"style":"form"});
    rb.query('PageSize', params.PageSize, {"style":"form"});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PropertyViewModelInListViewForUserPaginationViewModelApiResult>;
    })
  );
}

apiPropertyGetAllGet$Json.PATH = '/api/Property/GetAll';
