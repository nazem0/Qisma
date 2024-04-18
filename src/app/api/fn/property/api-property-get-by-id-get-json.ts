/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PropertyDetailsViewModelForUserApiResult } from '../../models/property-details-view-model-for-user-api-result';

export interface ApiPropertyGetByIdGet$Json$Params {
  PropertyId: string;
}

export function apiPropertyGetByIdGet$Json(http: HttpClient, rootUrl: string, params: ApiPropertyGetByIdGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<PropertyDetailsViewModelForUserApiResult>> {
  const rb = new RequestBuilder(rootUrl, apiPropertyGetByIdGet$Json.PATH, 'get');
  if (params) {
    rb.query('PropertyId', params.PropertyId, {"style":"form"});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PropertyDetailsViewModelForUserApiResult>;
    })
  );
}

apiPropertyGetByIdGet$Json.PATH = '/api/Property/GetById';
