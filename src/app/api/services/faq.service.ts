/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiDashboardFaqAddPost$Json } from '../fn/faq/api-dashboard-faq-add-post-json';
import { ApiDashboardFaqAddPost$Json$Params } from '../fn/faq/api-dashboard-faq-add-post-json';
import { apiDashboardFaqAddPost$Plain } from '../fn/faq/api-dashboard-faq-add-post-plain';
import { ApiDashboardFaqAddPost$Plain$Params } from '../fn/faq/api-dashboard-faq-add-post-plain';
import { apiDashboardFaqDeleteDelete$Json } from '../fn/faq/api-dashboard-faq-delete-delete-json';
import { ApiDashboardFaqDeleteDelete$Json$Params } from '../fn/faq/api-dashboard-faq-delete-delete-json';
import { apiDashboardFaqDeleteDelete$Plain } from '../fn/faq/api-dashboard-faq-delete-delete-plain';
import { ApiDashboardFaqDeleteDelete$Plain$Params } from '../fn/faq/api-dashboard-faq-delete-delete-plain';
import { apiFaqGetAllGet$Json } from '../fn/faq/api-faq-get-all-get-json';
import { ApiFaqGetAllGet$Json$Params } from '../fn/faq/api-faq-get-all-get-json';
import { apiFaqGetAllGet$Plain } from '../fn/faq/api-faq-get-all-get-plain';
import { ApiFaqGetAllGet$Plain$Params } from '../fn/faq/api-faq-get-all-get-plain';
import { apiFaqUpdateIndexPut$Json } from '../fn/faq/api-faq-update-index-put-json';
import { ApiFaqUpdateIndexPut$Json$Params } from '../fn/faq/api-faq-update-index-put-json';
import { apiFaqUpdateIndexPut$Plain } from '../fn/faq/api-faq-update-index-put-plain';
import { ApiFaqUpdateIndexPut$Plain$Params } from '../fn/faq/api-faq-update-index-put-plain';
import { apiFaqUpdatePut$Json } from '../fn/faq/api-faq-update-put-json';
import { ApiFaqUpdatePut$Json$Params } from '../fn/faq/api-faq-update-put-json';
import { apiFaqUpdatePut$Plain } from '../fn/faq/api-faq-update-put-plain';
import { ApiFaqUpdatePut$Plain$Params } from '../fn/faq/api-faq-update-put-plain';
import { FaqListApiResult } from '../models/faq-list-api-result';
import { StringApiResult } from '../models/string-api-result';

@Injectable({ providedIn: 'root' })
export class FaqService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiDashboardFaqAddPost()` */
  static readonly ApiDashboardFaqAddPostPath = '/api/Dashboard/FAQ/Add';

  /**
   * Add faq.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDashboardFaqAddPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDashboardFaqAddPost$Plain$Response(params?: ApiDashboardFaqAddPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<StringApiResult>> {
    return apiDashboardFaqAddPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Add faq.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDashboardFaqAddPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDashboardFaqAddPost$Plain(params?: ApiDashboardFaqAddPost$Plain$Params, context?: HttpContext): Observable<StringApiResult> {
    return this.apiDashboardFaqAddPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<StringApiResult>): StringApiResult => r.body)
    );
  }

  /**
   * Add faq.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDashboardFaqAddPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDashboardFaqAddPost$Json$Response(params?: ApiDashboardFaqAddPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<StringApiResult>> {
    return apiDashboardFaqAddPost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * Add faq.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDashboardFaqAddPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDashboardFaqAddPost$Json(params?: ApiDashboardFaqAddPost$Json$Params, context?: HttpContext): Observable<StringApiResult> {
    return this.apiDashboardFaqAddPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<StringApiResult>): StringApiResult => r.body)
    );
  }

  /** Path part for operation `apiDashboardFaqDeleteDelete()` */
  static readonly ApiDashboardFaqDeleteDeletePath = '/api/Dashboard/FAQ/Delete';

  /**
   * Delete FAQ.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDashboardFaqDeleteDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDashboardFaqDeleteDelete$Plain$Response(params: ApiDashboardFaqDeleteDelete$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<StringApiResult>> {
    return apiDashboardFaqDeleteDelete$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Delete FAQ.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDashboardFaqDeleteDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDashboardFaqDeleteDelete$Plain(params: ApiDashboardFaqDeleteDelete$Plain$Params, context?: HttpContext): Observable<StringApiResult> {
    return this.apiDashboardFaqDeleteDelete$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<StringApiResult>): StringApiResult => r.body)
    );
  }

  /**
   * Delete FAQ.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDashboardFaqDeleteDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDashboardFaqDeleteDelete$Json$Response(params: ApiDashboardFaqDeleteDelete$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<StringApiResult>> {
    return apiDashboardFaqDeleteDelete$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * Delete FAQ.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDashboardFaqDeleteDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDashboardFaqDeleteDelete$Json(params: ApiDashboardFaqDeleteDelete$Json$Params, context?: HttpContext): Observable<StringApiResult> {
    return this.apiDashboardFaqDeleteDelete$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<StringApiResult>): StringApiResult => r.body)
    );
  }

  /** Path part for operation `apiFaqGetAllGet()` */
  static readonly ApiFaqGetAllGetPath = '/api/FAQ/GetAll';

  /**
   * Get all FAQs.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiFaqGetAllGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiFaqGetAllGet$Plain$Response(params?: ApiFaqGetAllGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<FaqListApiResult>> {
    return apiFaqGetAllGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Get all FAQs.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiFaqGetAllGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiFaqGetAllGet$Plain(params?: ApiFaqGetAllGet$Plain$Params, context?: HttpContext): Observable<FaqListApiResult> {
    return this.apiFaqGetAllGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<FaqListApiResult>): FaqListApiResult => r.body)
    );
  }

  /**
   * Get all FAQs.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiFaqGetAllGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiFaqGetAllGet$Json$Response(params?: ApiFaqGetAllGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<FaqListApiResult>> {
    return apiFaqGetAllGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * Get all FAQs.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiFaqGetAllGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiFaqGetAllGet$Json(params?: ApiFaqGetAllGet$Json$Params, context?: HttpContext): Observable<FaqListApiResult> {
    return this.apiFaqGetAllGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<FaqListApiResult>): FaqListApiResult => r.body)
    );
  }

  /** Path part for operation `apiFaqUpdateIndexPut()` */
  static readonly ApiFaqUpdateIndexPutPath = '/api/FAQ/UpdateIndex';

  /**
   * Update faq index.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiFaqUpdateIndexPut$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiFaqUpdateIndexPut$Plain$Response(params: ApiFaqUpdateIndexPut$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<StringApiResult>> {
    return apiFaqUpdateIndexPut$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Update faq index.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiFaqUpdateIndexPut$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiFaqUpdateIndexPut$Plain(params: ApiFaqUpdateIndexPut$Plain$Params, context?: HttpContext): Observable<StringApiResult> {
    return this.apiFaqUpdateIndexPut$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<StringApiResult>): StringApiResult => r.body)
    );
  }

  /**
   * Update faq index.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiFaqUpdateIndexPut$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiFaqUpdateIndexPut$Json$Response(params: ApiFaqUpdateIndexPut$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<StringApiResult>> {
    return apiFaqUpdateIndexPut$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * Update faq index.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiFaqUpdateIndexPut$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiFaqUpdateIndexPut$Json(params: ApiFaqUpdateIndexPut$Json$Params, context?: HttpContext): Observable<StringApiResult> {
    return this.apiFaqUpdateIndexPut$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<StringApiResult>): StringApiResult => r.body)
    );
  }

  /** Path part for operation `apiFaqUpdatePut()` */
  static readonly ApiFaqUpdatePutPath = '/api/FAQ/Update';

  /**
   * Update faq.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiFaqUpdatePut$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiFaqUpdatePut$Plain$Response(params?: ApiFaqUpdatePut$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<StringApiResult>> {
    return apiFaqUpdatePut$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Update faq.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiFaqUpdatePut$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiFaqUpdatePut$Plain(params?: ApiFaqUpdatePut$Plain$Params, context?: HttpContext): Observable<StringApiResult> {
    return this.apiFaqUpdatePut$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<StringApiResult>): StringApiResult => r.body)
    );
  }

  /**
   * Update faq.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiFaqUpdatePut$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiFaqUpdatePut$Json$Response(params?: ApiFaqUpdatePut$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<StringApiResult>> {
    return apiFaqUpdatePut$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * Update faq.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiFaqUpdatePut$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiFaqUpdatePut$Json(params?: ApiFaqUpdatePut$Json$Params, context?: HttpContext): Observable<StringApiResult> {
    return this.apiFaqUpdatePut$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<StringApiResult>): StringApiResult => r.body)
    );
  }

}
