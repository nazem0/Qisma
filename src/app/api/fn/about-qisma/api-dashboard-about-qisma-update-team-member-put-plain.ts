/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { StringApiResult } from '../../models/string-api-result';

export interface ApiDashboardAboutQismaUpdateTeamMemberPut$Plain$Params {
      body?: {
'Id': number;
'Image'?: Blob;
'Name'?: string;
'JobTitle'?: string;
'Summary'?: string;
'FacebookLink'?: string;
'XLink'?: string;
'InstagramLink'?: string;
'LinkedInLink'?: string;
'IsManager'?: boolean;
}
}

export function apiDashboardAboutQismaUpdateTeamMemberPut$Plain(http: HttpClient, rootUrl: string, params?: ApiDashboardAboutQismaUpdateTeamMemberPut$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<StringApiResult>> {
  const rb = new RequestBuilder(rootUrl, apiDashboardAboutQismaUpdateTeamMemberPut$Plain.PATH, 'put');
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

apiDashboardAboutQismaUpdateTeamMemberPut$Plain.PATH = '/api/Dashboard/AboutQisma/UpdateTeamMember';
