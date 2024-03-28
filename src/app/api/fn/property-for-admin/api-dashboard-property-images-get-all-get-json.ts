/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { StringListApiResult } from '../../models/string-list-api-result';

export interface ApiDashboardPropertyImagesGetAllGet$Json$Params {
  PropertyId: number;
}

export function apiDashboardPropertyImagesGetAllGet$Json(http: HttpClient, rootUrl: string, params: ApiDashboardPropertyImagesGetAllGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<StringListApiResult>> {
  const rb = new RequestBuilder(rootUrl, apiDashboardPropertyImagesGetAllGet$Json.PATH, 'get');
  if (params) {
    rb.query('PropertyId', params.PropertyId, {"style":"form"});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<StringListApiResult>;
    })
  );
}

apiDashboardPropertyImagesGetAllGet$Json.PATH = '/api/Dashboard/PropertyImages/GetAll';
