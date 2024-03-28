/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { StringListApiResult } from '../../models/string-list-api-result';

export interface ApiDashboardPropertyImagesGetAllGet$Plain$Params {
  PropertyId: number;
}

export function apiDashboardPropertyImagesGetAllGet$Plain(http: HttpClient, rootUrl: string, params: ApiDashboardPropertyImagesGetAllGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<StringListApiResult>> {
  const rb = new RequestBuilder(rootUrl, apiDashboardPropertyImagesGetAllGet$Plain.PATH, 'get');
  if (params) {
    rb.query('PropertyId', params.PropertyId, {"style":"form"});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<StringListApiResult>;
    })
  );
}

apiDashboardPropertyImagesGetAllGet$Plain.PATH = '/api/Dashboard/PropertyImages/GetAll';
