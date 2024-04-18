/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PropertyImageViewModelforAdminApiResult } from '../../models/property-image-view-modelfor-admin-api-result';

export interface ApiDashboardPropertyImagesAddPost$Json$Params {
      body?: {
'PropertyId': string;
'Images': Array<Blob>;
}
}

export function apiDashboardPropertyImagesAddPost$Json(http: HttpClient, rootUrl: string, params?: ApiDashboardPropertyImagesAddPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<PropertyImageViewModelforAdminApiResult>> {
  const rb = new RequestBuilder(rootUrl, apiDashboardPropertyImagesAddPost$Json.PATH, 'post');
  if (params) {
    rb.body(params.body, 'multipart/form-data');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PropertyImageViewModelforAdminApiResult>;
    })
  );
}

apiDashboardPropertyImagesAddPost$Json.PATH = '/api/Dashboard/PropertyImages/Add';
