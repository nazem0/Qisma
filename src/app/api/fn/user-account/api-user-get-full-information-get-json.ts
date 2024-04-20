/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { UserFullInformationViewModelApiResult } from '../../models/user-full-information-view-model-api-result';

export interface ApiUserGetFullInformationGet$Json$Params {
}

export function apiUserGetFullInformationGet$Json(http: HttpClient, rootUrl: string, params?: ApiUserGetFullInformationGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<UserFullInformationViewModelApiResult>> {
  const rb = new RequestBuilder(rootUrl, apiUserGetFullInformationGet$Json.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<UserFullInformationViewModelApiResult>;
    })
  );
}

apiUserGetFullInformationGet$Json.PATH = '/api/User/GetFullInformation';
