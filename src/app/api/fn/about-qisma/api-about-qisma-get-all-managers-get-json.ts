/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { TeamViewModelApiResult } from '../../models/team-view-model-api-result';

export interface ApiAboutQismaGetAllManagersGet$Json$Params {
}

export function apiAboutQismaGetAllManagersGet$Json(http: HttpClient, rootUrl: string, params?: ApiAboutQismaGetAllManagersGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<TeamViewModelApiResult>> {
  const rb = new RequestBuilder(rootUrl, apiAboutQismaGetAllManagersGet$Json.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<TeamViewModelApiResult>;
    })
  );
}

apiAboutQismaGetAllManagersGet$Json.PATH = '/api/AboutQisma/GetAllManagers';
