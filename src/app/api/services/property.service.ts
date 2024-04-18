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
import { apiPropertyGetOrderingPageGet$Json } from '../fn/property/api-property-get-ordering-page-get-json';
import { ApiPropertyGetOrderingPageGet$Json$Params } from '../fn/property/api-property-get-ordering-page-get-json';
import { apiPropertyGetOrderingPageGet$Plain } from '../fn/property/api-property-get-ordering-page-get-plain';
import { ApiPropertyGetOrderingPageGet$Plain$Params } from '../fn/property/api-property-get-ordering-page-get-plain';
import { apiPropertyGetOrderPreviewPageGet$Json } from '../fn/property/api-property-get-order-preview-page-get-json';
import { ApiPropertyGetOrderPreviewPageGet$Json$Params } from '../fn/property/api-property-get-order-preview-page-get-json';
import { apiPropertyGetOrderPreviewPageGet$Plain } from '../fn/property/api-property-get-order-preview-page-get-plain';
import { ApiPropertyGetOrderPreviewPageGet$Plain$Params } from '../fn/property/api-property-get-order-preview-page-get-plain';
import { OrderingPageViewModelApiResult } from '../models/ordering-page-view-model-api-result';
import { OrderPreviewPageViewModelApiResult } from '../models/order-preview-page-view-model-api-result';
import { PropertyDetailsViewModelForUserApiResult } from '../models/property-details-view-model-for-user-api-result';
import { PropertyViewModelInListViewPaginationViewModelApiResult } from '../models/property-view-model-in-list-view-pagination-view-model-api-result';

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
  apiPropertyGetAllGet$Plain$Response(params: ApiPropertyGetAllGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<PropertyViewModelInListViewPaginationViewModelApiResult>> {
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
  apiPropertyGetAllGet$Plain(params: ApiPropertyGetAllGet$Plain$Params, context?: HttpContext): Observable<PropertyViewModelInListViewPaginationViewModelApiResult> {
    return this.apiPropertyGetAllGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<PropertyViewModelInListViewPaginationViewModelApiResult>): PropertyViewModelInListViewPaginationViewModelApiResult => r.body)
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
  apiPropertyGetAllGet$Json$Response(params: ApiPropertyGetAllGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<PropertyViewModelInListViewPaginationViewModelApiResult>> {
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
  apiPropertyGetAllGet$Json(params: ApiPropertyGetAllGet$Json$Params, context?: HttpContext): Observable<PropertyViewModelInListViewPaginationViewModelApiResult> {
    return this.apiPropertyGetAllGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<PropertyViewModelInListViewPaginationViewModelApiResult>): PropertyViewModelInListViewPaginationViewModelApiResult => r.body)
    );
  }

  /** Path part for operation `apiPropertyGetByIdGet()` */
  static readonly ApiPropertyGetByIdGetPath = '/api/Property/GetById';

  /**
   * Get property details for user by property id ==> Type 1- resedintial 2- commercial ==> Status 1- Under construction 2- Ready to move and rent.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPropertyGetByIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPropertyGetByIdGet$Plain$Response(params: ApiPropertyGetByIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<PropertyDetailsViewModelForUserApiResult>> {
    return apiPropertyGetByIdGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Get property details for user by property id ==> Type 1- resedintial 2- commercial ==> Status 1- Under construction 2- Ready to move and rent.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPropertyGetByIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPropertyGetByIdGet$Plain(params: ApiPropertyGetByIdGet$Plain$Params, context?: HttpContext): Observable<PropertyDetailsViewModelForUserApiResult> {
    return this.apiPropertyGetByIdGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<PropertyDetailsViewModelForUserApiResult>): PropertyDetailsViewModelForUserApiResult => r.body)
    );
  }

  /**
   * Get property details for user by property id ==> Type 1- resedintial 2- commercial ==> Status 1- Under construction 2- Ready to move and rent.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPropertyGetByIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPropertyGetByIdGet$Json$Response(params: ApiPropertyGetByIdGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<PropertyDetailsViewModelForUserApiResult>> {
    return apiPropertyGetByIdGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * Get property details for user by property id ==> Type 1- resedintial 2- commercial ==> Status 1- Under construction 2- Ready to move and rent.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPropertyGetByIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPropertyGetByIdGet$Json(params: ApiPropertyGetByIdGet$Json$Params, context?: HttpContext): Observable<PropertyDetailsViewModelForUserApiResult> {
    return this.apiPropertyGetByIdGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<PropertyDetailsViewModelForUserApiResult>): PropertyDetailsViewModelForUserApiResult => r.body)
    );
  }

  /** Path part for operation `apiPropertyGetOrderingPageGet()` */
  static readonly ApiPropertyGetOrderingPageGetPath = '/api/Property/GetOrderingPage';

  /**
   * Get Ordering page.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPropertyGetOrderingPageGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPropertyGetOrderingPageGet$Plain$Response(params: ApiPropertyGetOrderingPageGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<OrderingPageViewModelApiResult>> {
    return apiPropertyGetOrderingPageGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Get Ordering page.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPropertyGetOrderingPageGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPropertyGetOrderingPageGet$Plain(params: ApiPropertyGetOrderingPageGet$Plain$Params, context?: HttpContext): Observable<OrderingPageViewModelApiResult> {
    return this.apiPropertyGetOrderingPageGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<OrderingPageViewModelApiResult>): OrderingPageViewModelApiResult => r.body)
    );
  }

  /**
   * Get Ordering page.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPropertyGetOrderingPageGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPropertyGetOrderingPageGet$Json$Response(params: ApiPropertyGetOrderingPageGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<OrderingPageViewModelApiResult>> {
    return apiPropertyGetOrderingPageGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * Get Ordering page.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPropertyGetOrderingPageGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPropertyGetOrderingPageGet$Json(params: ApiPropertyGetOrderingPageGet$Json$Params, context?: HttpContext): Observable<OrderingPageViewModelApiResult> {
    return this.apiPropertyGetOrderingPageGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<OrderingPageViewModelApiResult>): OrderingPageViewModelApiResult => r.body)
    );
  }

  /** Path part for operation `apiPropertyGetOrderPreviewPageGet()` */
  static readonly ApiPropertyGetOrderPreviewPageGetPath = '/api/Property/GetOrderPreviewPage';

  /**
   * Get Order preview page.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPropertyGetOrderPreviewPageGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPropertyGetOrderPreviewPageGet$Plain$Response(params: ApiPropertyGetOrderPreviewPageGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<OrderPreviewPageViewModelApiResult>> {
    return apiPropertyGetOrderPreviewPageGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Get Order preview page.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPropertyGetOrderPreviewPageGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPropertyGetOrderPreviewPageGet$Plain(params: ApiPropertyGetOrderPreviewPageGet$Plain$Params, context?: HttpContext): Observable<OrderPreviewPageViewModelApiResult> {
    return this.apiPropertyGetOrderPreviewPageGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<OrderPreviewPageViewModelApiResult>): OrderPreviewPageViewModelApiResult => r.body)
    );
  }

  /**
   * Get Order preview page.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPropertyGetOrderPreviewPageGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPropertyGetOrderPreviewPageGet$Json$Response(params: ApiPropertyGetOrderPreviewPageGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<OrderPreviewPageViewModelApiResult>> {
    return apiPropertyGetOrderPreviewPageGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * Get Order preview page.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPropertyGetOrderPreviewPageGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPropertyGetOrderPreviewPageGet$Json(params: ApiPropertyGetOrderPreviewPageGet$Json$Params, context?: HttpContext): Observable<OrderPreviewPageViewModelApiResult> {
    return this.apiPropertyGetOrderPreviewPageGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<OrderPreviewPageViewModelApiResult>): OrderPreviewPageViewModelApiResult => r.body)
    );
  }

}
