/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiDashboardUpdateAboutQismaByIdPost$Json } from '../fn/setting/api-dashboard-update-about-qisma-by-id-post-json';
import { ApiDashboardUpdateAboutQismaByIdPost$Json$Params } from '../fn/setting/api-dashboard-update-about-qisma-by-id-post-json';
import { apiDashboardUpdateAboutQismaByIdPost$Plain } from '../fn/setting/api-dashboard-update-about-qisma-by-id-post-plain';
import { ApiDashboardUpdateAboutQismaByIdPost$Plain$Params } from '../fn/setting/api-dashboard-update-about-qisma-by-id-post-plain';
import { apiGetAboutQismaByIdPost$Json } from '../fn/setting/api-get-about-qisma-by-id-post-json';
import { ApiGetAboutQismaByIdPost$Json$Params } from '../fn/setting/api-get-about-qisma-by-id-post-json';
import { apiGetAboutQismaByIdPost$Plain } from '../fn/setting/api-get-about-qisma-by-id-post-plain';
import { ApiGetAboutQismaByIdPost$Plain$Params } from '../fn/setting/api-get-about-qisma-by-id-post-plain';
import { StringApiResult } from '../models/string-api-result';

@Injectable({ providedIn: 'root' })
export class SettingService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiGetAboutQismaByIdPost()` */
  static readonly ApiGetAboutQismaByIdPostPath = '/api/GetAboutQismaById';

  /**
   * Get support email ==> id = 1, support phone number  ==> id = 2.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGetAboutQismaByIdPost$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGetAboutQismaByIdPost$Plain$Response(params: ApiGetAboutQismaByIdPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<StringApiResult>> {
    return apiGetAboutQismaByIdPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Get support email ==> id = 1, support phone number  ==> id = 2.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiGetAboutQismaByIdPost$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGetAboutQismaByIdPost$Plain(params: ApiGetAboutQismaByIdPost$Plain$Params, context?: HttpContext): Observable<StringApiResult> {
    return this.apiGetAboutQismaByIdPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<StringApiResult>): StringApiResult => r.body)
    );
  }

  /**
   * Get support email ==> id = 1, support phone number  ==> id = 2.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGetAboutQismaByIdPost$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGetAboutQismaByIdPost$Json$Response(params: ApiGetAboutQismaByIdPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<StringApiResult>> {
    return apiGetAboutQismaByIdPost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * Get support email ==> id = 1, support phone number  ==> id = 2.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiGetAboutQismaByIdPost$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGetAboutQismaByIdPost$Json(params: ApiGetAboutQismaByIdPost$Json$Params, context?: HttpContext): Observable<StringApiResult> {
    return this.apiGetAboutQismaByIdPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<StringApiResult>): StringApiResult => r.body)
    );
  }

  /** Path part for operation `apiDashboardUpdateAboutQismaByIdPost()` */
  static readonly ApiDashboardUpdateAboutQismaByIdPostPath = '/api/Dashboard/UpdateAboutQismaById';

  /**
   * Update support email ==> id = 1, support phone number  ==> id = 2.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDashboardUpdateAboutQismaByIdPost$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDashboardUpdateAboutQismaByIdPost$Plain$Response(params: ApiDashboardUpdateAboutQismaByIdPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<StringApiResult>> {
    return apiDashboardUpdateAboutQismaByIdPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Update support email ==> id = 1, support phone number  ==> id = 2.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDashboardUpdateAboutQismaByIdPost$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDashboardUpdateAboutQismaByIdPost$Plain(params: ApiDashboardUpdateAboutQismaByIdPost$Plain$Params, context?: HttpContext): Observable<StringApiResult> {
    return this.apiDashboardUpdateAboutQismaByIdPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<StringApiResult>): StringApiResult => r.body)
    );
  }

  /**
   * Update support email ==> id = 1, support phone number  ==> id = 2.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDashboardUpdateAboutQismaByIdPost$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDashboardUpdateAboutQismaByIdPost$Json$Response(params: ApiDashboardUpdateAboutQismaByIdPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<StringApiResult>> {
    return apiDashboardUpdateAboutQismaByIdPost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * Update support email ==> id = 1, support phone number  ==> id = 2.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDashboardUpdateAboutQismaByIdPost$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDashboardUpdateAboutQismaByIdPost$Json(params: ApiDashboardUpdateAboutQismaByIdPost$Json$Params, context?: HttpContext): Observable<StringApiResult> {
    return this.apiDashboardUpdateAboutQismaByIdPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<StringApiResult>): StringApiResult => r.body)
    );
  }

}
