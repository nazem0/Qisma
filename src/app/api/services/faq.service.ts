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
import { apiDashboardFaqGetAllGet$Json } from '../fn/faq/api-dashboard-faq-get-all-get-json';
import { ApiDashboardFaqGetAllGet$Json$Params } from '../fn/faq/api-dashboard-faq-get-all-get-json';
import { apiDashboardFaqGetAllGet$Plain } from '../fn/faq/api-dashboard-faq-get-all-get-plain';
import { ApiDashboardFaqGetAllGet$Plain$Params } from '../fn/faq/api-dashboard-faq-get-all-get-plain';
import { FaqViewModelListApiResult } from '../models/faq-view-model-list-api-result';
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
   * This method doesn't expect any request body.
   */
  apiDashboardFaqAddPost$Plain$Response(params: ApiDashboardFaqAddPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<StringApiResult>> {
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
   * This method doesn't expect any request body.
   */
  apiDashboardFaqAddPost$Plain(params: ApiDashboardFaqAddPost$Plain$Params, context?: HttpContext): Observable<StringApiResult> {
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
   * This method doesn't expect any request body.
   */
  apiDashboardFaqAddPost$Json$Response(params: ApiDashboardFaqAddPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<StringApiResult>> {
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
   * This method doesn't expect any request body.
   */
  apiDashboardFaqAddPost$Json(params: ApiDashboardFaqAddPost$Json$Params, context?: HttpContext): Observable<StringApiResult> {
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

  /** Path part for operation `apiDashboardFaqGetAllGet()` */
  static readonly ApiDashboardFaqGetAllGetPath = '/api/Dashboard/FAQ/GetAll';

  /**
   * Get all FAQs.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDashboardFaqGetAllGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDashboardFaqGetAllGet$Plain$Response(params?: ApiDashboardFaqGetAllGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<FaqViewModelListApiResult>> {
    return apiDashboardFaqGetAllGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Get all FAQs.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDashboardFaqGetAllGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDashboardFaqGetAllGet$Plain(params?: ApiDashboardFaqGetAllGet$Plain$Params, context?: HttpContext): Observable<FaqViewModelListApiResult> {
    return this.apiDashboardFaqGetAllGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<FaqViewModelListApiResult>): FaqViewModelListApiResult => r.body)
    );
  }

  /**
   * Get all FAQs.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDashboardFaqGetAllGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDashboardFaqGetAllGet$Json$Response(params?: ApiDashboardFaqGetAllGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<FaqViewModelListApiResult>> {
    return apiDashboardFaqGetAllGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * Get all FAQs.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDashboardFaqGetAllGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDashboardFaqGetAllGet$Json(params?: ApiDashboardFaqGetAllGet$Json$Params, context?: HttpContext): Observable<FaqViewModelListApiResult> {
    return this.apiDashboardFaqGetAllGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<FaqViewModelListApiResult>): FaqViewModelListApiResult => r.body)
    );
  }

}
