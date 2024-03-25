/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiPropertyGetAllGet$Json } from '../fn/property/api-property-get-all-get-json';
import { ApiPropertyGetAllGet$Json$Params } from '../fn/property/api-property-get-all-get-json';
import { apiPropertyGetAllGet$Plain } from '../fn/property/api-property-get-all-get-plain';
import { ApiPropertyGetAllGet$Plain$Params } from '../fn/property/api-property-get-all-get-plain';
import { apiPropertyGetByIdGet$Json } from '../fn/property/api-property-get-by-id-get-json';
import { ApiPropertyGetByIdGet$Json$Params } from '../fn/property/api-property-get-by-id-get-json';
import { apiPropertyGetByIdGet$Plain } from '../fn/property/api-property-get-by-id-get-plain';
import { ApiPropertyGetByIdGet$Plain$Params } from '../fn/property/api-property-get-by-id-get-plain';
import { PropertyViewModelInListViewForUserPaginationViewModelApiResult } from '../models/property-view-model-in-list-view-for-user-pagination-view-model-api-result';

@Injectable({ providedIn: 'root' })
export class PropertyService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiPropertyGetAllGet()` */
  static readonly ApiPropertyGetAllGetPath = '/api/Property/GetAll';

  /**
   * Get all properties for user.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPropertyGetAllGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPropertyGetAllGet$Plain$Response(params: ApiPropertyGetAllGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<PropertyViewModelInListViewForUserPaginationViewModelApiResult>> {
    return apiPropertyGetAllGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Get all properties for user.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPropertyGetAllGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPropertyGetAllGet$Plain(params: ApiPropertyGetAllGet$Plain$Params, context?: HttpContext): Observable<PropertyViewModelInListViewForUserPaginationViewModelApiResult> {
    return this.apiPropertyGetAllGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<PropertyViewModelInListViewForUserPaginationViewModelApiResult>): PropertyViewModelInListViewForUserPaginationViewModelApiResult => r.body)
    );
  }

  /**
   * Get all properties for user.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPropertyGetAllGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPropertyGetAllGet$Json$Response(params: ApiPropertyGetAllGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<PropertyViewModelInListViewForUserPaginationViewModelApiResult>> {
    return apiPropertyGetAllGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * Get all properties for user.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPropertyGetAllGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPropertyGetAllGet$Json(params: ApiPropertyGetAllGet$Json$Params, context?: HttpContext): Observable<PropertyViewModelInListViewForUserPaginationViewModelApiResult> {
    return this.apiPropertyGetAllGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<PropertyViewModelInListViewForUserPaginationViewModelApiResult>): PropertyViewModelInListViewForUserPaginationViewModelApiResult => r.body)
    );
  }

  /** Path part for operation `apiPropertyGetByIdGet()` */
  static readonly ApiPropertyGetByIdGetPath = '/api/Property/GetById';

  /**
   * Get property details for user by property id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPropertyGetByIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPropertyGetByIdGet$Plain$Response(params: ApiPropertyGetByIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<PropertyViewModelInListViewForUserPaginationViewModelApiResult>> {
    return apiPropertyGetByIdGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Get property details for user by property id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPropertyGetByIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPropertyGetByIdGet$Plain(params: ApiPropertyGetByIdGet$Plain$Params, context?: HttpContext): Observable<PropertyViewModelInListViewForUserPaginationViewModelApiResult> {
    return this.apiPropertyGetByIdGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<PropertyViewModelInListViewForUserPaginationViewModelApiResult>): PropertyViewModelInListViewForUserPaginationViewModelApiResult => r.body)
    );
  }

  /**
   * Get property details for user by property id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPropertyGetByIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPropertyGetByIdGet$Json$Response(params: ApiPropertyGetByIdGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<PropertyViewModelInListViewForUserPaginationViewModelApiResult>> {
    return apiPropertyGetByIdGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * Get property details for user by property id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPropertyGetByIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPropertyGetByIdGet$Json(params: ApiPropertyGetByIdGet$Json$Params, context?: HttpContext): Observable<PropertyViewModelInListViewForUserPaginationViewModelApiResult> {
    return this.apiPropertyGetByIdGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<PropertyViewModelInListViewForUserPaginationViewModelApiResult>): PropertyViewModelInListViewForUserPaginationViewModelApiResult => r.body)
    );
  }

}
