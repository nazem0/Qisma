/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { UserPortfolioViewModelApiResult } from '../../models/user-portfolio-view-model-api-result';

export interface ApiUserGetPortfolioGet$Json$Params {
}

export function apiUserGetPortfolioGet$Json(http: HttpClient, rootUrl: string, params?: ApiUserGetPortfolioGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<UserPortfolioViewModelApiResult>> {
  const rb = new RequestBuilder(rootUrl, apiUserGetPortfolioGet$Json.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<UserPortfolioViewModelApiResult>;
    })
  );
}

apiUserGetPortfolioGet$Json.PATH = '/api/User/GetPortfolio';
