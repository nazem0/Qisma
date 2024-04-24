/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { UserPortfolioViewModelApiResult } from '../../models/user-portfolio-view-model-api-result';

export interface ApiUserGetPortfolioGet$Plain$Params {
}

export function apiUserGetPortfolioGet$Plain(http: HttpClient, rootUrl: string, params?: ApiUserGetPortfolioGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<UserPortfolioViewModelApiResult>> {
  const rb = new RequestBuilder(rootUrl, apiUserGetPortfolioGet$Plain.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<UserPortfolioViewModelApiResult>;
    })
  );
}

apiUserGetPortfolioGet$Plain.PATH = '/api/User/GetPortfolio';
