/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiAboutQismaGetSupportPost$Json } from '../fn/setting/api-about-qisma-get-support-post-json';
import { ApiAboutQismaGetSupportPost$Json$Params } from '../fn/setting/api-about-qisma-get-support-post-json';
import { apiAboutQismaGetSupportPost$Plain } from '../fn/setting/api-about-qisma-get-support-post-plain';
import { ApiAboutQismaGetSupportPost$Plain$Params } from '../fn/setting/api-about-qisma-get-support-post-plain';
import { apiDashboardAboutQismaUpdateSupportPut$Json } from '../fn/setting/api-dashboard-about-qisma-update-support-put-json';
import { ApiDashboardAboutQismaUpdateSupportPut$Json$Params } from '../fn/setting/api-dashboard-about-qisma-update-support-put-json';
import { apiDashboardAboutQismaUpdateSupportPut$Plain } from '../fn/setting/api-dashboard-about-qisma-update-support-put-plain';
import { ApiDashboardAboutQismaUpdateSupportPut$Plain$Params } from '../fn/setting/api-dashboard-about-qisma-update-support-put-plain';
import { StringApiResult } from '../models/string-api-result';
import { SupportViewModelApiResult } from '../models/support-view-model-api-result';

@Injectable({ providedIn: 'root' })
export class SettingService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiAboutQismaGetSupportPost()` */
  static readonly ApiAboutQismaGetSupportPostPath = '/api/AboutQisma/GetSupport';

  /**
   * Get support email, support phone number.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAboutQismaGetSupportPost$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAboutQismaGetSupportPost$Plain$Response(params?: ApiAboutQismaGetSupportPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<SupportViewModelApiResult>> {
    return apiAboutQismaGetSupportPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Get support email, support phone number.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAboutQismaGetSupportPost$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAboutQismaGetSupportPost$Plain(params?: ApiAboutQismaGetSupportPost$Plain$Params, context?: HttpContext): Observable<SupportViewModelApiResult> {
    return this.apiAboutQismaGetSupportPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<SupportViewModelApiResult>): SupportViewModelApiResult => r.body)
    );
  }

  /**
   * Get support email, support phone number.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAboutQismaGetSupportPost$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAboutQismaGetSupportPost$Json$Response(params?: ApiAboutQismaGetSupportPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<SupportViewModelApiResult>> {
    return apiAboutQismaGetSupportPost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * Get support email, support phone number.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAboutQismaGetSupportPost$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAboutQismaGetSupportPost$Json(params?: ApiAboutQismaGetSupportPost$Json$Params, context?: HttpContext): Observable<SupportViewModelApiResult> {
    return this.apiAboutQismaGetSupportPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<SupportViewModelApiResult>): SupportViewModelApiResult => r.body)
    );
  }

  /** Path part for operation `apiDashboardAboutQismaUpdateSupportPut()` */
  static readonly ApiDashboardAboutQismaUpdateSupportPutPath = '/api/Dashboard/AboutQisma/UpdateSupport';

  /**
   * Update support email, support phone number.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDashboardAboutQismaUpdateSupportPut$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDashboardAboutQismaUpdateSupportPut$Plain$Response(params?: ApiDashboardAboutQismaUpdateSupportPut$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<StringApiResult>> {
    return apiDashboardAboutQismaUpdateSupportPut$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Update support email, support phone number.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDashboardAboutQismaUpdateSupportPut$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDashboardAboutQismaUpdateSupportPut$Plain(params?: ApiDashboardAboutQismaUpdateSupportPut$Plain$Params, context?: HttpContext): Observable<StringApiResult> {
    return this.apiDashboardAboutQismaUpdateSupportPut$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<StringApiResult>): StringApiResult => r.body)
    );
  }

  /**
   * Update support email, support phone number.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDashboardAboutQismaUpdateSupportPut$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDashboardAboutQismaUpdateSupportPut$Json$Response(params?: ApiDashboardAboutQismaUpdateSupportPut$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<StringApiResult>> {
    return apiDashboardAboutQismaUpdateSupportPut$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * Update support email, support phone number.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDashboardAboutQismaUpdateSupportPut$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDashboardAboutQismaUpdateSupportPut$Json(params?: ApiDashboardAboutQismaUpdateSupportPut$Json$Params, context?: HttpContext): Observable<StringApiResult> {
    return this.apiDashboardAboutQismaUpdateSupportPut$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<StringApiResult>): StringApiResult => r.body)
    );
  }

}
