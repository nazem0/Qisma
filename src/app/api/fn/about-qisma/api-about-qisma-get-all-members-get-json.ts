/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { TeamMemberListApiResult } from '../../models/team-member-list-api-result';

export interface ApiAboutQismaGetAllMembersGet$Json$Params {
}

export function apiAboutQismaGetAllMembersGet$Json(http: HttpClient, rootUrl: string, params?: ApiAboutQismaGetAllMembersGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<TeamMemberListApiResult>> {
  const rb = new RequestBuilder(rootUrl, apiAboutQismaGetAllMembersGet$Json.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<TeamMemberListApiResult>;
    })
  );
}

apiAboutQismaGetAllMembersGet$Json.PATH = '/api/AboutQisma/GetAllMembers';
