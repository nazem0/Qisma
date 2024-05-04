/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { TeamMemberListApiResult } from '../../models/team-member-list-api-result';

export interface ApiAboutQismaGetAllTeamMembersGet$Plain$Params {
}

export function apiAboutQismaGetAllTeamMembersGet$Plain(http: HttpClient, rootUrl: string, params?: ApiAboutQismaGetAllTeamMembersGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<TeamMemberListApiResult>> {
  const rb = new RequestBuilder(rootUrl, apiAboutQismaGetAllTeamMembersGet$Plain.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<TeamMemberListApiResult>;
    })
  );
}

apiAboutQismaGetAllTeamMembersGet$Plain.PATH = '/api/AboutQisma/GetAllTeamMembers';
