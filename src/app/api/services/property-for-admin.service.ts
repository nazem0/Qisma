/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiDashboardFacilityAddPost$Json } from '../fn/property-for-admin/api-dashboard-facility-add-post-json';
import { ApiDashboardFacilityAddPost$Json$Params } from '../fn/property-for-admin/api-dashboard-facility-add-post-json';
import { apiDashboardFacilityAddPost$Plain } from '../fn/property-for-admin/api-dashboard-facility-add-post-plain';
import { ApiDashboardFacilityAddPost$Plain$Params } from '../fn/property-for-admin/api-dashboard-facility-add-post-plain';
import { apiDashboardFacilityGetAllGet$Json } from '../fn/property-for-admin/api-dashboard-facility-get-all-get-json';
import { ApiDashboardFacilityGetAllGet$Json$Params } from '../fn/property-for-admin/api-dashboard-facility-get-all-get-json';
import { apiDashboardFacilityGetAllGet$Plain } from '../fn/property-for-admin/api-dashboard-facility-get-all-get-plain';
import { ApiDashboardFacilityGetAllGet$Plain$Params } from '../fn/property-for-admin/api-dashboard-facility-get-all-get-plain';
import { apiDashboardPropertyAddFromFormPost$Json } from '../fn/property-for-admin/api-dashboard-property-add-from-form-post-json';
import { ApiDashboardPropertyAddFromFormPost$Json$Params } from '../fn/property-for-admin/api-dashboard-property-add-from-form-post-json';
import { apiDashboardPropertyAddFromFormPost$Plain } from '../fn/property-for-admin/api-dashboard-property-add-from-form-post-plain';
import { ApiDashboardPropertyAddFromFormPost$Plain$Params } from '../fn/property-for-admin/api-dashboard-property-add-from-form-post-plain';
import { apiDashboardPropertyAddPost$Json } from '../fn/property-for-admin/api-dashboard-property-add-post-json';
import { ApiDashboardPropertyAddPost$Json$Params } from '../fn/property-for-admin/api-dashboard-property-add-post-json';
import { apiDashboardPropertyAddPost$Plain } from '../fn/property-for-admin/api-dashboard-property-add-post-plain';
import { ApiDashboardPropertyAddPost$Plain$Params } from '../fn/property-for-admin/api-dashboard-property-add-post-plain';
import { apiDashboardPropertyImagesAddPost$Json } from '../fn/property-for-admin/api-dashboard-property-images-add-post-json';
import { ApiDashboardPropertyImagesAddPost$Json$Params } from '../fn/property-for-admin/api-dashboard-property-images-add-post-json';
import { apiDashboardPropertyImagesAddPost$Plain } from '../fn/property-for-admin/api-dashboard-property-images-add-post-plain';
import { ApiDashboardPropertyImagesAddPost$Plain$Params } from '../fn/property-for-admin/api-dashboard-property-images-add-post-plain';
import { apiDashboardPropertyImagesGetAllGet$Json } from '../fn/property-for-admin/api-dashboard-property-images-get-all-get-json';
import { ApiDashboardPropertyImagesGetAllGet$Json$Params } from '../fn/property-for-admin/api-dashboard-property-images-get-all-get-json';
import { apiDashboardPropertyImagesGetAllGet$Plain } from '../fn/property-for-admin/api-dashboard-property-images-get-all-get-plain';
import { ApiDashboardPropertyImagesGetAllGet$Plain$Params } from '../fn/property-for-admin/api-dashboard-property-images-get-all-get-plain';
import { FacilityViewModelForAdminListApiResult } from '../models/facility-view-model-for-admin-list-api-result';
import { Int32ApiResult } from '../models/int-32-api-result';
import { StringApiResult } from '../models/string-api-result';
import { StringListApiResult } from '../models/string-list-api-result';

@Injectable({ providedIn: 'root' })
export class PropertyForAdminService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiDashboardPropertyAddPost()` */
  static readonly ApiDashboardPropertyAddPostPath = '/api/Dashboard/Property/Add';

  /**
   * Add new property ==> Type 1- resedintial 2- commercial.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDashboardPropertyAddPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDashboardPropertyAddPost$Plain$Response(params?: ApiDashboardPropertyAddPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Int32ApiResult>> {
    return apiDashboardPropertyAddPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Add new property ==> Type 1- resedintial 2- commercial.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDashboardPropertyAddPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDashboardPropertyAddPost$Plain(params?: ApiDashboardPropertyAddPost$Plain$Params, context?: HttpContext): Observable<Int32ApiResult> {
    return this.apiDashboardPropertyAddPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Int32ApiResult>): Int32ApiResult => r.body)
    );
  }

  /**
   * Add new property ==> Type 1- resedintial 2- commercial.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDashboardPropertyAddPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDashboardPropertyAddPost$Json$Response(params?: ApiDashboardPropertyAddPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Int32ApiResult>> {
    return apiDashboardPropertyAddPost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * Add new property ==> Type 1- resedintial 2- commercial.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDashboardPropertyAddPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDashboardPropertyAddPost$Json(params?: ApiDashboardPropertyAddPost$Json$Params, context?: HttpContext): Observable<Int32ApiResult> {
    return this.apiDashboardPropertyAddPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Int32ApiResult>): Int32ApiResult => r.body)
    );
  }

  /** Path part for operation `apiDashboardPropertyAddFromFormPost()` */
  static readonly ApiDashboardPropertyAddFromFormPostPath = '/api/Dashboard/Property/AddFromForm';

  /**
   * Add new property ==> Type 1- resedintial 2- commercial.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDashboardPropertyAddFromFormPost$Plain()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiDashboardPropertyAddFromFormPost$Plain$Response(params?: ApiDashboardPropertyAddFromFormPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Int32ApiResult>> {
    return apiDashboardPropertyAddFromFormPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Add new property ==> Type 1- resedintial 2- commercial.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDashboardPropertyAddFromFormPost$Plain$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiDashboardPropertyAddFromFormPost$Plain(params?: ApiDashboardPropertyAddFromFormPost$Plain$Params, context?: HttpContext): Observable<Int32ApiResult> {
    return this.apiDashboardPropertyAddFromFormPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Int32ApiResult>): Int32ApiResult => r.body)
    );
  }

  /**
   * Add new property ==> Type 1- resedintial 2- commercial.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDashboardPropertyAddFromFormPost$Json()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiDashboardPropertyAddFromFormPost$Json$Response(params?: ApiDashboardPropertyAddFromFormPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Int32ApiResult>> {
    return apiDashboardPropertyAddFromFormPost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * Add new property ==> Type 1- resedintial 2- commercial.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDashboardPropertyAddFromFormPost$Json$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiDashboardPropertyAddFromFormPost$Json(params?: ApiDashboardPropertyAddFromFormPost$Json$Params, context?: HttpContext): Observable<Int32ApiResult> {
    return this.apiDashboardPropertyAddFromFormPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Int32ApiResult>): Int32ApiResult => r.body)
    );
  }

  /** Path part for operation `apiDashboardFacilityAddPost()` */
  static readonly ApiDashboardFacilityAddPostPath = '/api/Dashboard/Facility/Add';

  /**
   * Add new facility.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDashboardFacilityAddPost$Plain()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiDashboardFacilityAddPost$Plain$Response(params?: ApiDashboardFacilityAddPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<StringApiResult>> {
    return apiDashboardFacilityAddPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Add new facility.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDashboardFacilityAddPost$Plain$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiDashboardFacilityAddPost$Plain(params?: ApiDashboardFacilityAddPost$Plain$Params, context?: HttpContext): Observable<StringApiResult> {
    return this.apiDashboardFacilityAddPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<StringApiResult>): StringApiResult => r.body)
    );
  }

  /**
   * Add new facility.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDashboardFacilityAddPost$Json()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiDashboardFacilityAddPost$Json$Response(params?: ApiDashboardFacilityAddPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<StringApiResult>> {
    return apiDashboardFacilityAddPost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * Add new facility.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDashboardFacilityAddPost$Json$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiDashboardFacilityAddPost$Json(params?: ApiDashboardFacilityAddPost$Json$Params, context?: HttpContext): Observable<StringApiResult> {
    return this.apiDashboardFacilityAddPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<StringApiResult>): StringApiResult => r.body)
    );
  }

  /** Path part for operation `apiDashboardPropertyImagesAddPost()` */
  static readonly ApiDashboardPropertyImagesAddPostPath = '/api/Dashboard/PropertyImages/Add';

  /**
   * Add property images.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDashboardPropertyImagesAddPost$Plain()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiDashboardPropertyImagesAddPost$Plain$Response(params?: ApiDashboardPropertyImagesAddPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<StringApiResult>> {
    return apiDashboardPropertyImagesAddPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Add property images.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDashboardPropertyImagesAddPost$Plain$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiDashboardPropertyImagesAddPost$Plain(params?: ApiDashboardPropertyImagesAddPost$Plain$Params, context?: HttpContext): Observable<StringApiResult> {
    return this.apiDashboardPropertyImagesAddPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<StringApiResult>): StringApiResult => r.body)
    );
  }

  /**
   * Add property images.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDashboardPropertyImagesAddPost$Json()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiDashboardPropertyImagesAddPost$Json$Response(params?: ApiDashboardPropertyImagesAddPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<StringApiResult>> {
    return apiDashboardPropertyImagesAddPost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * Add property images.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDashboardPropertyImagesAddPost$Json$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiDashboardPropertyImagesAddPost$Json(params?: ApiDashboardPropertyImagesAddPost$Json$Params, context?: HttpContext): Observable<StringApiResult> {
    return this.apiDashboardPropertyImagesAddPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<StringApiResult>): StringApiResult => r.body)
    );
  }

  /** Path part for operation `apiDashboardPropertyImagesGetAllGet()` */
  static readonly ApiDashboardPropertyImagesGetAllGetPath = '/api/Dashboard/PropertyImages/GetAll';

  /**
   * Get all property images.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDashboardPropertyImagesGetAllGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDashboardPropertyImagesGetAllGet$Plain$Response(params: ApiDashboardPropertyImagesGetAllGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<StringListApiResult>> {
    return apiDashboardPropertyImagesGetAllGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Get all property images.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDashboardPropertyImagesGetAllGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDashboardPropertyImagesGetAllGet$Plain(params: ApiDashboardPropertyImagesGetAllGet$Plain$Params, context?: HttpContext): Observable<StringListApiResult> {
    return this.apiDashboardPropertyImagesGetAllGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<StringListApiResult>): StringListApiResult => r.body)
    );
  }

  /**
   * Get all property images.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDashboardPropertyImagesGetAllGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDashboardPropertyImagesGetAllGet$Json$Response(params: ApiDashboardPropertyImagesGetAllGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<StringListApiResult>> {
    return apiDashboardPropertyImagesGetAllGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * Get all property images.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDashboardPropertyImagesGetAllGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDashboardPropertyImagesGetAllGet$Json(params: ApiDashboardPropertyImagesGetAllGet$Json$Params, context?: HttpContext): Observable<StringListApiResult> {
    return this.apiDashboardPropertyImagesGetAllGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<StringListApiResult>): StringListApiResult => r.body)
    );
  }

  /** Path part for operation `apiDashboardFacilityGetAllGet()` */
  static readonly ApiDashboardFacilityGetAllGetPath = '/api/Dashboard/Facility/GetAll';

  /**
   * Get all facilities.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDashboardFacilityGetAllGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDashboardFacilityGetAllGet$Plain$Response(params?: ApiDashboardFacilityGetAllGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<FacilityViewModelForAdminListApiResult>> {
    return apiDashboardFacilityGetAllGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Get all facilities.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDashboardFacilityGetAllGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDashboardFacilityGetAllGet$Plain(params?: ApiDashboardFacilityGetAllGet$Plain$Params, context?: HttpContext): Observable<FacilityViewModelForAdminListApiResult> {
    return this.apiDashboardFacilityGetAllGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<FacilityViewModelForAdminListApiResult>): FacilityViewModelForAdminListApiResult => r.body)
    );
  }

  /**
   * Get all facilities.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDashboardFacilityGetAllGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDashboardFacilityGetAllGet$Json$Response(params?: ApiDashboardFacilityGetAllGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<FacilityViewModelForAdminListApiResult>> {
    return apiDashboardFacilityGetAllGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * Get all facilities.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDashboardFacilityGetAllGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDashboardFacilityGetAllGet$Json(params?: ApiDashboardFacilityGetAllGet$Json$Params, context?: HttpContext): Observable<FacilityViewModelForAdminListApiResult> {
    return this.apiDashboardFacilityGetAllGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<FacilityViewModelForAdminListApiResult>): FacilityViewModelForAdminListApiResult => r.body)
    );
  }

}
