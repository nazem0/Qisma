/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { TeamMemberListApiResult } from '../../models/team-member-list-api-result';

export interface ApiAboutQismaGetAllTeamMembersGet$Json$Params {
}

export function apiAboutQismaGetAllTeamMembersGet$Json(http: HttpClient, rootUrl: string, params?: ApiAboutQismaGetAllTeamMembersGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<TeamMemberListApiResult>> {
  const rb = new RequestBuilder(rootUrl, apiAboutQismaGetAllTeamMembersGet$Json.PATH, 'get');
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

apiAboutQismaGetAllTeamMembersGet$Json.PATH = '/api/AboutQisma/GetAllTeamMembers';
