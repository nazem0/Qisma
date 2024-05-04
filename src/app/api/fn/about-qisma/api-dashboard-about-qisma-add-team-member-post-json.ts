/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { StringApiResult } from '../../models/string-api-result';

export interface ApiDashboardAboutQismaAddTeamMemberPost$Json$Params {
      body?: {
'Image': Blob;
'Name': string;
'JobTitle': string;
'Summary': string;
'FacebookLink'?: string;
'XLink'?: string;
'InstagramLink'?: string;
'LinkedInLink'?: string;
'IsManager': boolean;
}
}

export function apiDashboardAboutQismaAddTeamMemberPost$Json(http: HttpClient, rootUrl: string, params?: ApiDashboardAboutQismaAddTeamMemberPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<StringApiResult>> {
  const rb = new RequestBuilder(rootUrl, apiDashboardAboutQismaAddTeamMemberPost$Json.PATH, 'post');
  if (params) {
    rb.body(params.body, 'multipart/form-data');
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

apiDashboardAboutQismaAddTeamMemberPost$Json.PATH = '/api/Dashboard/AboutQisma/AddTeamMember';
