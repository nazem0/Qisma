/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiBlogGetAllGet$Json } from '../fn/blog/api-blog-get-all-get-json';
import { ApiBlogGetAllGet$Json$Params } from '../fn/blog/api-blog-get-all-get-json';
import { apiBlogGetAllGet$Plain } from '../fn/blog/api-blog-get-all-get-plain';
import { ApiBlogGetAllGet$Plain$Params } from '../fn/blog/api-blog-get-all-get-plain';
import { apiDashboardBlogAddPost$Json } from '../fn/blog/api-dashboard-blog-add-post-json';
import { ApiDashboardBlogAddPost$Json$Params } from '../fn/blog/api-dashboard-blog-add-post-json';
import { apiDashboardBlogAddPost$Plain } from '../fn/blog/api-dashboard-blog-add-post-plain';
import { ApiDashboardBlogAddPost$Plain$Params } from '../fn/blog/api-dashboard-blog-add-post-plain';
import { apiDashboardBlogDeleteDelete$Json } from '../fn/blog/api-dashboard-blog-delete-delete-json';
import { ApiDashboardBlogDeleteDelete$Json$Params } from '../fn/blog/api-dashboard-blog-delete-delete-json';
import { apiDashboardBlogDeleteDelete$Plain } from '../fn/blog/api-dashboard-blog-delete-delete-plain';
import { ApiDashboardBlogDeleteDelete$Plain$Params } from '../fn/blog/api-dashboard-blog-delete-delete-plain';
import { apiDashboardBlogUpdatePut$Json } from '../fn/blog/api-dashboard-blog-update-put-json';
import { ApiDashboardBlogUpdatePut$Json$Params } from '../fn/blog/api-dashboard-blog-update-put-json';
import { apiDashboardBlogUpdatePut$Plain } from '../fn/blog/api-dashboard-blog-update-put-plain';
import { ApiDashboardBlogUpdatePut$Plain$Params } from '../fn/blog/api-dashboard-blog-update-put-plain';
import { BlogListApiResult } from '../models/blog-list-api-result';
import { StringApiResult } from '../models/string-api-result';

@Injectable({ providedIn: 'root' })
export class BlogService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiDashboardBlogAddPost()` */
  static readonly ApiDashboardBlogAddPostPath = '/api/Dashboard/Blog/Add';

  /**
   * Add blog.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDashboardBlogAddPost$Plain()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiDashboardBlogAddPost$Plain$Response(params?: ApiDashboardBlogAddPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<StringApiResult>> {
    return apiDashboardBlogAddPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Add blog.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDashboardBlogAddPost$Plain$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiDashboardBlogAddPost$Plain(params?: ApiDashboardBlogAddPost$Plain$Params, context?: HttpContext): Observable<StringApiResult> {
    return this.apiDashboardBlogAddPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<StringApiResult>): StringApiResult => r.body)
    );
  }

  /**
   * Add blog.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDashboardBlogAddPost$Json()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiDashboardBlogAddPost$Json$Response(params?: ApiDashboardBlogAddPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<StringApiResult>> {
    return apiDashboardBlogAddPost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * Add blog.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDashboardBlogAddPost$Json$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiDashboardBlogAddPost$Json(params?: ApiDashboardBlogAddPost$Json$Params, context?: HttpContext): Observable<StringApiResult> {
    return this.apiDashboardBlogAddPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<StringApiResult>): StringApiResult => r.body)
    );
  }

  /** Path part for operation `apiBlogGetAllGet()` */
  static readonly ApiBlogGetAllGetPath = '/api/Blog/GetAll';

  /**
   * Get all blogs.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiBlogGetAllGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiBlogGetAllGet$Plain$Response(params?: ApiBlogGetAllGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<BlogListApiResult>> {
    return apiBlogGetAllGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Get all blogs.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiBlogGetAllGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiBlogGetAllGet$Plain(params?: ApiBlogGetAllGet$Plain$Params, context?: HttpContext): Observable<BlogListApiResult> {
    return this.apiBlogGetAllGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<BlogListApiResult>): BlogListApiResult => r.body)
    );
  }

  /**
   * Get all blogs.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiBlogGetAllGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiBlogGetAllGet$Json$Response(params?: ApiBlogGetAllGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<BlogListApiResult>> {
    return apiBlogGetAllGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * Get all blogs.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiBlogGetAllGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiBlogGetAllGet$Json(params?: ApiBlogGetAllGet$Json$Params, context?: HttpContext): Observable<BlogListApiResult> {
    return this.apiBlogGetAllGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<BlogListApiResult>): BlogListApiResult => r.body)
    );
  }

  /** Path part for operation `apiDashboardBlogUpdatePut()` */
  static readonly ApiDashboardBlogUpdatePutPath = '/api/Dashboard/Blog/Update';

  /**
   * Update blog.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDashboardBlogUpdatePut$Plain()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiDashboardBlogUpdatePut$Plain$Response(params?: ApiDashboardBlogUpdatePut$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<StringApiResult>> {
    return apiDashboardBlogUpdatePut$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Update blog.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDashboardBlogUpdatePut$Plain$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiDashboardBlogUpdatePut$Plain(params?: ApiDashboardBlogUpdatePut$Plain$Params, context?: HttpContext): Observable<StringApiResult> {
    return this.apiDashboardBlogUpdatePut$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<StringApiResult>): StringApiResult => r.body)
    );
  }

  /**
   * Update blog.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDashboardBlogUpdatePut$Json()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiDashboardBlogUpdatePut$Json$Response(params?: ApiDashboardBlogUpdatePut$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<StringApiResult>> {
    return apiDashboardBlogUpdatePut$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * Update blog.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDashboardBlogUpdatePut$Json$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiDashboardBlogUpdatePut$Json(params?: ApiDashboardBlogUpdatePut$Json$Params, context?: HttpContext): Observable<StringApiResult> {
    return this.apiDashboardBlogUpdatePut$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<StringApiResult>): StringApiResult => r.body)
    );
  }

  /** Path part for operation `apiDashboardBlogDeleteDelete()` */
  static readonly ApiDashboardBlogDeleteDeletePath = '/api/Dashboard/Blog/Delete';

  /**
   * Delete blog.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDashboardBlogDeleteDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDashboardBlogDeleteDelete$Plain$Response(params: ApiDashboardBlogDeleteDelete$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<StringApiResult>> {
    return apiDashboardBlogDeleteDelete$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Delete blog.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDashboardBlogDeleteDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDashboardBlogDeleteDelete$Plain(params: ApiDashboardBlogDeleteDelete$Plain$Params, context?: HttpContext): Observable<StringApiResult> {
    return this.apiDashboardBlogDeleteDelete$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<StringApiResult>): StringApiResult => r.body)
    );
  }

  /**
   * Delete blog.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDashboardBlogDeleteDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDashboardBlogDeleteDelete$Json$Response(params: ApiDashboardBlogDeleteDelete$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<StringApiResult>> {
    return apiDashboardBlogDeleteDelete$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * Delete blog.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDashboardBlogDeleteDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDashboardBlogDeleteDelete$Json(params: ApiDashboardBlogDeleteDelete$Json$Params, context?: HttpContext): Observable<StringApiResult> {
    return this.apiDashboardBlogDeleteDelete$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<StringApiResult>): StringApiResult => r.body)
    );
  }

}
