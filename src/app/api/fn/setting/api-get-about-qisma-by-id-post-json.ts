/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { StringApiResult } from '../../models/string-api-result';

export interface ApiGetAboutQismaByIdPost$Json$Params {
  id: number;
}

export function apiGetAboutQismaByIdPost$Json(http: HttpClient, rootUrl: string, params: ApiGetAboutQismaByIdPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<StringApiResult>> {
  const rb = new RequestBuilder(rootUrl, apiGetAboutQismaByIdPost$Json.PATH, 'post');
  if (params) {
    rb.query('id', params.id, {"style":"form"});
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

apiGetAboutQismaByIdPost$Json.PATH = '/api/GetAboutQismaById';
