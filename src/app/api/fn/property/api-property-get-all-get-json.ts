/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PropertyViewModelInListViewPaginationViewModelApiResult } from '../../models/property-view-model-in-list-view-pagination-view-model-api-result';
import { Type } from '../../models/type';

export interface ApiPropertyGetAllGet$Json$Params {
  PageNumber: number;
  PageSize: number;
  GovernorateId?: number;
  CityId?: number;
  PropertyType?: Type;
  MinUnitPrice?: number;
  MaxUnitPrice?: number;
  MinSharePrice?: number;
  MaxSharePrice?: number;
}

export function apiPropertyGetAllGet$Json(http: HttpClient, rootUrl: string, params: ApiPropertyGetAllGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<PropertyViewModelInListViewPaginationViewModelApiResult>> {
  const rb = new RequestBuilder(rootUrl, apiPropertyGetAllGet$Json.PATH, 'get');
  if (params) {
    rb.query('PageNumber', params.PageNumber, {"style":"form"});
    rb.query('PageSize', params.PageSize, {"style":"form"});
    rb.query('GovernorateId', params.GovernorateId, {"style":"form"});
    rb.query('CityId', params.CityId, {"style":"form"});
    rb.query('PropertyType', params.PropertyType, {"style":"form"});
    rb.query('MinUnitPrice', params.MinUnitPrice, {"style":"form"});
    rb.query('MaxUnitPrice', params.MaxUnitPrice, {"style":"form"});
    rb.query('MinSharePrice', params.MinSharePrice, {"style":"form"});
    rb.query('MaxSharePrice', params.MaxSharePrice, {"style":"form"});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PropertyViewModelInListViewPaginationViewModelApiResult>;
    })
  );
}

apiPropertyGetAllGet$Json.PATH = '/api/Property/GetAll';
