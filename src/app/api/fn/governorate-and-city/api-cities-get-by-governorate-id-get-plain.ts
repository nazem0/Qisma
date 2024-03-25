/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { GovernorateAndCityViewModelListApiResult } from '../../models/governorate-and-city-view-model-list-api-result';

export interface ApiCitiesGetByGovernorateIdGet$Plain$Params {
  GovernorateId?: number;
}

export function apiCitiesGetByGovernorateIdGet$Plain(http: HttpClient, rootUrl: string, params?: ApiCitiesGetByGovernorateIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<GovernorateAndCityViewModelListApiResult>> {
  const rb = new RequestBuilder(rootUrl, apiCitiesGetByGovernorateIdGet$Plain.PATH, 'get');
  if (params) {
    rb.query('GovernorateId', params.GovernorateId, {"style":"form"});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<GovernorateAndCityViewModelListApiResult>;
    })
  );
}

apiCitiesGetByGovernorateIdGet$Plain.PATH = '/api/Cities/GetByGovernorateId';
