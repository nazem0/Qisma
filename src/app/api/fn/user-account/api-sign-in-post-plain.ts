/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { UserDataViewModelApiResult } from '../../models/user-data-view-model-api-result';

export interface ApiSignInPost$Plain$Params {
      body?: {
'Email': string;
'Password'?: string;
}
}

export function apiSignInPost$Plain(http: HttpClient, rootUrl: string, params?: ApiSignInPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<UserDataViewModelApiResult>> {
  const rb = new RequestBuilder(rootUrl, apiSignInPost$Plain.PATH, 'post');
  if (params) {
    rb.body(params.body, 'multipart/form-data');
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<UserDataViewModelApiResult>;
    })
  );
}

apiSignInPost$Plain.PATH = '/api/SignIn';
