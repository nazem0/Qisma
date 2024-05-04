/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { StringApiResult } from '../../models/string-api-result';

export interface ApiDashboardAboutQismaDeleteTeamMemberDelete$Json$Params {
  TeamMemberId: number;
}

export function apiDashboardAboutQismaDeleteTeamMemberDelete$Json(http: HttpClient, rootUrl: string, params: ApiDashboardAboutQismaDeleteTeamMemberDelete$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<StringApiResult>> {
  const rb = new RequestBuilder(rootUrl, apiDashboardAboutQismaDeleteTeamMemberDelete$Json.PATH, 'delete');
  if (params) {
    rb.query('TeamMemberId', params.TeamMemberId, {"style":"form"});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<StringApiResult>;
    })
  );
}

apiDashboardAboutQismaDeleteTeamMemberDelete$Json.PATH = '/api/Dashboard/AboutQisma/DeleteTeamMember';
