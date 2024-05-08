/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { TeamViewModelApiResult } from '../../models/team-view-model-api-result';

export interface ApiAboutQismaGetAllMembersGet$Plain$Params {
}

export function apiAboutQismaGetAllMembersGet$Plain(http: HttpClient, rootUrl: string, params?: ApiAboutQismaGetAllMembersGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<TeamViewModelApiResult>> {
  const rb = new RequestBuilder(rootUrl, apiAboutQismaGetAllMembersGet$Plain.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<TeamViewModelApiResult>;
    })
  );
}

apiAboutQismaGetAllMembersGet$Plain.PATH = '/api/AboutQisma/GetAllMembers';
