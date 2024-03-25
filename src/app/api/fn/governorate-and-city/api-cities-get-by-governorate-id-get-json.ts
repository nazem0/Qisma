/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { GovernorateAndCityViewModelListApiResult } from '../../models/governorate-and-city-view-model-list-api-result';

export interface ApiCitiesGetByGovernorateIdGet$Json$Params {
  GovernorateId?: number;
}

export function apiCitiesGetByGovernorateIdGet$Json(http: HttpClient, rootUrl: string, params?: ApiCitiesGetByGovernorateIdGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<GovernorateAndCityViewModelListApiResult>> {
  const rb = new RequestBuilder(rootUrl, apiCitiesGetByGovernorateIdGet$Json.PATH, 'get');
  if (params) {
    rb.query('GovernorateId', params.GovernorateId, {"style":"form"});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<GovernorateAndCityViewModelListApiResult>;
    })
  );
}

apiCitiesGetByGovernorateIdGet$Json.PATH = '/api/Cities/GetByGovernorateId';
