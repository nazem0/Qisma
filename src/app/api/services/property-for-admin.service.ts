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
import { apiDashboardPropertyEnableAndDisablePut$Json } from '../fn/property-for-admin/api-dashboard-property-enable-and-disable-put-json';
import { ApiDashboardPropertyEnableAndDisablePut$Json$Params } from '../fn/property-for-admin/api-dashboard-property-enable-and-disable-put-json';
import { apiDashboardPropertyEnableAndDisablePut$Plain } from '../fn/property-for-admin/api-dashboard-property-enable-and-disable-put-plain';
import { ApiDashboardPropertyEnableAndDisablePut$Plain$Params } from '../fn/property-for-admin/api-dashboard-property-enable-and-disable-put-plain';
import { apiDashboardPropertyFacilityAddPost$Json } from '../fn/property-for-admin/api-dashboard-property-facility-add-post-json';
import { ApiDashboardPropertyFacilityAddPost$Json$Params } from '../fn/property-for-admin/api-dashboard-property-facility-add-post-json';
import { apiDashboardPropertyFacilityAddPost$Plain } from '../fn/property-for-admin/api-dashboard-property-facility-add-post-plain';
import { ApiDashboardPropertyFacilityAddPost$Plain$Params } from '../fn/property-for-admin/api-dashboard-property-facility-add-post-plain';
import { apiDashboardPropertyFacilityDeleteDelete$Json } from '../fn/property-for-admin/api-dashboard-property-facility-delete-delete-json';
import { ApiDashboardPropertyFacilityDeleteDelete$Json$Params } from '../fn/property-for-admin/api-dashboard-property-facility-delete-delete-json';
import { apiDashboardPropertyFacilityDeleteDelete$Plain } from '../fn/property-for-admin/api-dashboard-property-facility-delete-delete-plain';
import { ApiDashboardPropertyFacilityDeleteDelete$Plain$Params } from '../fn/property-for-admin/api-dashboard-property-facility-delete-delete-plain';
import { apiDashboardPropertyGetByIdGet$Json } from '../fn/property-for-admin/api-dashboard-property-get-by-id-get-json';
import { ApiDashboardPropertyGetByIdGet$Json$Params } from '../fn/property-for-admin/api-dashboard-property-get-by-id-get-json';
import { apiDashboardPropertyGetByIdGet$Plain } from '../fn/property-for-admin/api-dashboard-property-get-by-id-get-plain';
import { ApiDashboardPropertyGetByIdGet$Plain$Params } from '../fn/property-for-admin/api-dashboard-property-get-by-id-get-plain';
import { apiDashboardPropertyImageDeleteDelete$Json } from '../fn/property-for-admin/api-dashboard-property-image-delete-delete-json';
import { ApiDashboardPropertyImageDeleteDelete$Json$Params } from '../fn/property-for-admin/api-dashboard-property-image-delete-delete-json';
import { apiDashboardPropertyImageDeleteDelete$Plain } from '../fn/property-for-admin/api-dashboard-property-image-delete-delete-plain';
import { ApiDashboardPropertyImageDeleteDelete$Plain$Params } from '../fn/property-for-admin/api-dashboard-property-image-delete-delete-plain';
import { apiDashboardPropertyImagesAddPost$Json } from '../fn/property-for-admin/api-dashboard-property-images-add-post-json';
import { ApiDashboardPropertyImagesAddPost$Json$Params } from '../fn/property-for-admin/api-dashboard-property-images-add-post-json';
import { apiDashboardPropertyImagesAddPost$Plain } from '../fn/property-for-admin/api-dashboard-property-images-add-post-plain';
import { ApiDashboardPropertyImagesAddPost$Plain$Params } from '../fn/property-for-admin/api-dashboard-property-images-add-post-plain';
import { apiDashboardPropertyImagesGetAllGet$Json } from '../fn/property-for-admin/api-dashboard-property-images-get-all-get-json';
import { ApiDashboardPropertyImagesGetAllGet$Json$Params } from '../fn/property-for-admin/api-dashboard-property-images-get-all-get-json';
import { apiDashboardPropertyImagesGetAllGet$Plain } from '../fn/property-for-admin/api-dashboard-property-images-get-all-get-plain';
import { ApiDashboardPropertyImagesGetAllGet$Plain$Params } from '../fn/property-for-admin/api-dashboard-property-images-get-all-get-plain';
import { apiDashboardPropertyUpdatePut$Json } from '../fn/property-for-admin/api-dashboard-property-update-put-json';
import { ApiDashboardPropertyUpdatePut$Json$Params } from '../fn/property-for-admin/api-dashboard-property-update-put-json';
import { apiDashboardPropertyUpdatePut$Plain } from '../fn/property-for-admin/api-dashboard-property-update-put-plain';
import { ApiDashboardPropertyUpdatePut$Plain$Params } from '../fn/property-for-admin/api-dashboard-property-update-put-plain';
import { FacilityViewModelForAdminListApiResult } from '../models/facility-view-model-for-admin-list-api-result';
import { Int32ApiResult } from '../models/int-32-api-result';
import { PropertyDetailsViewModelForAdminApiResult } from '../models/property-details-view-model-for-admin-api-result';
import { PropertyFacilityViewModelForAdminApiResult } from '../models/property-facility-view-model-for-admin-api-result';
import { PropertyImageViewModelforAdminApiResult } from '../models/property-image-view-modelfor-admin-api-result';
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
   * Add new property ==> Type 1- resedintial 2- commercial ==> Status 1- Under construction 2- Ready to move and rent.
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
   * Add new property ==> Type 1- resedintial 2- commercial ==> Status 1- Under construction 2- Ready to move and rent.
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
   * Add new property ==> Type 1- resedintial 2- commercial ==> Status 1- Under construction 2- Ready to move and rent.
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
   * Add new property ==> Type 1- resedintial 2- commercial ==> Status 1- Under construction 2- Ready to move and rent.
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
   * Add new property ==> Type 1- resedintial 2- commercial ==> Status 1- Under construction 2- Ready to move and rent.
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
   * Add new property ==> Type 1- resedintial 2- commercial ==> Status 1- Under construction 2- Ready to move and rent.
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
   * Add new property ==> Type 1- resedintial 2- commercial ==> Status 1- Under construction 2- Ready to move and rent.
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
   * Add new property ==> Type 1- resedintial 2- commercial ==> Status 1- Under construction 2- Ready to move and rent.
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
  apiDashboardPropertyImagesAddPost$Plain$Response(params?: ApiDashboardPropertyImagesAddPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<PropertyImageViewModelforAdminApiResult>> {
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
  apiDashboardPropertyImagesAddPost$Plain(params?: ApiDashboardPropertyImagesAddPost$Plain$Params, context?: HttpContext): Observable<PropertyImageViewModelforAdminApiResult> {
    return this.apiDashboardPropertyImagesAddPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<PropertyImageViewModelforAdminApiResult>): PropertyImageViewModelforAdminApiResult => r.body)
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
  apiDashboardPropertyImagesAddPost$Json$Response(params?: ApiDashboardPropertyImagesAddPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<PropertyImageViewModelforAdminApiResult>> {
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
  apiDashboardPropertyImagesAddPost$Json(params?: ApiDashboardPropertyImagesAddPost$Json$Params, context?: HttpContext): Observable<PropertyImageViewModelforAdminApiResult> {
    return this.apiDashboardPropertyImagesAddPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<PropertyImageViewModelforAdminApiResult>): PropertyImageViewModelforAdminApiResult => r.body)
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

  /** Path part for operation `apiDashboardPropertyImageDeleteDelete()` */
  static readonly ApiDashboardPropertyImageDeleteDeletePath = '/api/Dashboard/PropertyImage/Delete';

  /**
   * Delete property image.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDashboardPropertyImageDeleteDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDashboardPropertyImageDeleteDelete$Plain$Response(params: ApiDashboardPropertyImageDeleteDelete$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<StringApiResult>> {
    return apiDashboardPropertyImageDeleteDelete$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Delete property image.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDashboardPropertyImageDeleteDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDashboardPropertyImageDeleteDelete$Plain(params: ApiDashboardPropertyImageDeleteDelete$Plain$Params, context?: HttpContext): Observable<StringApiResult> {
    return this.apiDashboardPropertyImageDeleteDelete$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<StringApiResult>): StringApiResult => r.body)
    );
  }

  /**
   * Delete property image.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDashboardPropertyImageDeleteDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDashboardPropertyImageDeleteDelete$Json$Response(params: ApiDashboardPropertyImageDeleteDelete$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<StringApiResult>> {
    return apiDashboardPropertyImageDeleteDelete$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * Delete property image.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDashboardPropertyImageDeleteDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDashboardPropertyImageDeleteDelete$Json(params: ApiDashboardPropertyImageDeleteDelete$Json$Params, context?: HttpContext): Observable<StringApiResult> {
    return this.apiDashboardPropertyImageDeleteDelete$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<StringApiResult>): StringApiResult => r.body)
    );
  }

  /** Path part for operation `apiDashboardPropertyFacilityAddPost()` */
  static readonly ApiDashboardPropertyFacilityAddPostPath = '/api/Dashboard/PropertyFacility/Add';

  /**
   * Add property facility.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDashboardPropertyFacilityAddPost$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDashboardPropertyFacilityAddPost$Plain$Response(params: ApiDashboardPropertyFacilityAddPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<PropertyFacilityViewModelForAdminApiResult>> {
    return apiDashboardPropertyFacilityAddPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Add property facility.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDashboardPropertyFacilityAddPost$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDashboardPropertyFacilityAddPost$Plain(params: ApiDashboardPropertyFacilityAddPost$Plain$Params, context?: HttpContext): Observable<PropertyFacilityViewModelForAdminApiResult> {
    return this.apiDashboardPropertyFacilityAddPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<PropertyFacilityViewModelForAdminApiResult>): PropertyFacilityViewModelForAdminApiResult => r.body)
    );
  }

  /**
   * Add property facility.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDashboardPropertyFacilityAddPost$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDashboardPropertyFacilityAddPost$Json$Response(params: ApiDashboardPropertyFacilityAddPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<PropertyFacilityViewModelForAdminApiResult>> {
    return apiDashboardPropertyFacilityAddPost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * Add property facility.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDashboardPropertyFacilityAddPost$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDashboardPropertyFacilityAddPost$Json(params: ApiDashboardPropertyFacilityAddPost$Json$Params, context?: HttpContext): Observable<PropertyFacilityViewModelForAdminApiResult> {
    return this.apiDashboardPropertyFacilityAddPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<PropertyFacilityViewModelForAdminApiResult>): PropertyFacilityViewModelForAdminApiResult => r.body)
    );
  }

  /** Path part for operation `apiDashboardPropertyFacilityDeleteDelete()` */
  static readonly ApiDashboardPropertyFacilityDeleteDeletePath = '/api/Dashboard/PropertyFacility/Delete';

  /**
   * Delete property facility.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDashboardPropertyFacilityDeleteDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDashboardPropertyFacilityDeleteDelete$Plain$Response(params: ApiDashboardPropertyFacilityDeleteDelete$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<StringApiResult>> {
    return apiDashboardPropertyFacilityDeleteDelete$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Delete property facility.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDashboardPropertyFacilityDeleteDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDashboardPropertyFacilityDeleteDelete$Plain(params: ApiDashboardPropertyFacilityDeleteDelete$Plain$Params, context?: HttpContext): Observable<StringApiResult> {
    return this.apiDashboardPropertyFacilityDeleteDelete$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<StringApiResult>): StringApiResult => r.body)
    );
  }

  /**
   * Delete property facility.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDashboardPropertyFacilityDeleteDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDashboardPropertyFacilityDeleteDelete$Json$Response(params: ApiDashboardPropertyFacilityDeleteDelete$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<StringApiResult>> {
    return apiDashboardPropertyFacilityDeleteDelete$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * Delete property facility.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDashboardPropertyFacilityDeleteDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDashboardPropertyFacilityDeleteDelete$Json(params: ApiDashboardPropertyFacilityDeleteDelete$Json$Params, context?: HttpContext): Observable<StringApiResult> {
    return this.apiDashboardPropertyFacilityDeleteDelete$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<StringApiResult>): StringApiResult => r.body)
    );
  }

  /** Path part for operation `apiDashboardPropertyGetByIdGet()` */
  static readonly ApiDashboardPropertyGetByIdGetPath = '/api/Dashboard/Property/GetById';

  /**
   * Get property details for admin by property id ==> Type 1- resedintial 2- commercial ==> Status 1- Under construction 2- Ready to move and rent.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDashboardPropertyGetByIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDashboardPropertyGetByIdGet$Plain$Response(params: ApiDashboardPropertyGetByIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<PropertyDetailsViewModelForAdminApiResult>> {
    return apiDashboardPropertyGetByIdGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Get property details for admin by property id ==> Type 1- resedintial 2- commercial ==> Status 1- Under construction 2- Ready to move and rent.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDashboardPropertyGetByIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDashboardPropertyGetByIdGet$Plain(params: ApiDashboardPropertyGetByIdGet$Plain$Params, context?: HttpContext): Observable<PropertyDetailsViewModelForAdminApiResult> {
    return this.apiDashboardPropertyGetByIdGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<PropertyDetailsViewModelForAdminApiResult>): PropertyDetailsViewModelForAdminApiResult => r.body)
    );
  }

  /**
   * Get property details for admin by property id ==> Type 1- resedintial 2- commercial ==> Status 1- Under construction 2- Ready to move and rent.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDashboardPropertyGetByIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDashboardPropertyGetByIdGet$Json$Response(params: ApiDashboardPropertyGetByIdGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<PropertyDetailsViewModelForAdminApiResult>> {
    return apiDashboardPropertyGetByIdGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * Get property details for admin by property id ==> Type 1- resedintial 2- commercial ==> Status 1- Under construction 2- Ready to move and rent.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDashboardPropertyGetByIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDashboardPropertyGetByIdGet$Json(params: ApiDashboardPropertyGetByIdGet$Json$Params, context?: HttpContext): Observable<PropertyDetailsViewModelForAdminApiResult> {
    return this.apiDashboardPropertyGetByIdGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<PropertyDetailsViewModelForAdminApiResult>): PropertyDetailsViewModelForAdminApiResult => r.body)
    );
  }

  /** Path part for operation `apiDashboardPropertyUpdatePut()` */
  static readonly ApiDashboardPropertyUpdatePutPath = '/api/Dashboard/Property/Update';

  /**
   * Update property ==> Type 1- resedintial 2- commercial ==> Status 1- Under construction 2- Ready to move and rent.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDashboardPropertyUpdatePut$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDashboardPropertyUpdatePut$Plain$Response(params?: ApiDashboardPropertyUpdatePut$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<StringApiResult>> {
    return apiDashboardPropertyUpdatePut$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Update property ==> Type 1- resedintial 2- commercial ==> Status 1- Under construction 2- Ready to move and rent.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDashboardPropertyUpdatePut$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDashboardPropertyUpdatePut$Plain(params?: ApiDashboardPropertyUpdatePut$Plain$Params, context?: HttpContext): Observable<StringApiResult> {
    return this.apiDashboardPropertyUpdatePut$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<StringApiResult>): StringApiResult => r.body)
    );
  }

  /**
   * Update property ==> Type 1- resedintial 2- commercial ==> Status 1- Under construction 2- Ready to move and rent.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDashboardPropertyUpdatePut$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDashboardPropertyUpdatePut$Json$Response(params?: ApiDashboardPropertyUpdatePut$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<StringApiResult>> {
    return apiDashboardPropertyUpdatePut$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * Update property ==> Type 1- resedintial 2- commercial ==> Status 1- Under construction 2- Ready to move and rent.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDashboardPropertyUpdatePut$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDashboardPropertyUpdatePut$Json(params?: ApiDashboardPropertyUpdatePut$Json$Params, context?: HttpContext): Observable<StringApiResult> {
    return this.apiDashboardPropertyUpdatePut$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<StringApiResult>): StringApiResult => r.body)
    );
  }

  /** Path part for operation `apiDashboardPropertyEnableAndDisablePut()` */
  static readonly ApiDashboardPropertyEnableAndDisablePutPath = '/api/Dashboard/Property/EnableAndDisable';

  /**
   * Enable and disable property.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDashboardPropertyEnableAndDisablePut$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDashboardPropertyEnableAndDisablePut$Plain$Response(params: ApiDashboardPropertyEnableAndDisablePut$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<StringApiResult>> {
    return apiDashboardPropertyEnableAndDisablePut$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Enable and disable property.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDashboardPropertyEnableAndDisablePut$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDashboardPropertyEnableAndDisablePut$Plain(params: ApiDashboardPropertyEnableAndDisablePut$Plain$Params, context?: HttpContext): Observable<StringApiResult> {
    return this.apiDashboardPropertyEnableAndDisablePut$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<StringApiResult>): StringApiResult => r.body)
    );
  }

  /**
   * Enable and disable property.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDashboardPropertyEnableAndDisablePut$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDashboardPropertyEnableAndDisablePut$Json$Response(params: ApiDashboardPropertyEnableAndDisablePut$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<StringApiResult>> {
    return apiDashboardPropertyEnableAndDisablePut$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * Enable and disable property.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDashboardPropertyEnableAndDisablePut$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDashboardPropertyEnableAndDisablePut$Json(params: ApiDashboardPropertyEnableAndDisablePut$Json$Params, context?: HttpContext): Observable<StringApiResult> {
    return this.apiDashboardPropertyEnableAndDisablePut$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<StringApiResult>): StringApiResult => r.body)
    );
  }

}
