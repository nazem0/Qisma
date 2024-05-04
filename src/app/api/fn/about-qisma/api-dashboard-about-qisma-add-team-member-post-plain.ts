/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { StringApiResult } from '../../models/string-api-result';

export interface ApiDashboardAboutQismaAddTeamMemberPost$Plain$Params {
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

export function apiDashboardAboutQismaAddTeamMemberPost$Plain(http: HttpClient, rootUrl: string, params?: ApiDashboardAboutQismaAddTeamMemberPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<StringApiResult>> {
  const rb = new RequestBuilder(rootUrl, apiDashboardAboutQismaAddTeamMemberPost$Plain.PATH, 'post');
  if (params) {
    rb.body(params.body, 'multipart/form-data');
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<StringApiResult>;
    })
  );
}

apiDashboardAboutQismaAddTeamMemberPost$Plain.PATH = '/api/Dashboard/AboutQisma/AddTeamMember';
