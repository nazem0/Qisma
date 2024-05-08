/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { StringApiResult } from '../../models/string-api-result';

export interface ApiDashboardAboutQismaUpdateAboutUsPut$Json$Params {
      body?: {
'FirstFrame'?: string;
'FirstFrameImage'?: Blob;
'SecondFrameTitle'?: string;
'SecondFrameDescription'?: string;
'ThirdFrameTitle'?: string;
'FirstSectionTitle'?: string;
'FirstSectionDescription'?: string;
'SecondSectionTitle'?: string;
'SecondSectionDescription'?: string;
'ThirdSectionTitle'?: string;
'ThirdSectionDescription'?: string;
'FourthSectionTitle'?: string;
'FourthSectionDescription'?: string;
}
}

export function apiDashboardAboutQismaUpdateAboutUsPut$Json(http: HttpClient, rootUrl: string, params?: ApiDashboardAboutQismaUpdateAboutUsPut$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<StringApiResult>> {
  const rb = new RequestBuilder(rootUrl, apiDashboardAboutQismaUpdateAboutUsPut$Json.PATH, 'put');
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

apiDashboardAboutQismaUpdateAboutUsPut$Json.PATH = '/api/Dashboard/AboutQisma/UpdateAboutUs';
