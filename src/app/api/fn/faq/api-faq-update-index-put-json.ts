/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { StringApiResult } from '../../models/string-api-result';
import { UpdateFaqIndexViewModel } from '../../models/update-faq-index-view-model';

export interface ApiFaqUpdateIndexPut$Json$Params {
      body: Array<UpdateFaqIndexViewModel>
}

export function apiFaqUpdateIndexPut$Json(http: HttpClient, rootUrl: string, params: ApiFaqUpdateIndexPut$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<StringApiResult>> {
  const rb = new RequestBuilder(rootUrl, apiFaqUpdateIndexPut$Json.PATH, 'put');
  if (params) {
    rb.body(params.body, 'application/*+json');
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

apiFaqUpdateIndexPut$Json.PATH = '/api/FAQ/UpdateIndex';
