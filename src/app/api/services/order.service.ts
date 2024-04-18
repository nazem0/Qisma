/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiCheckOutPlaceOrderPost$Json } from '../fn/order/api-check-out-place-order-post-json';
import { ApiCheckOutPlaceOrderPost$Json$Params } from '../fn/order/api-check-out-place-order-post-json';
import { apiCheckOutPlaceOrderPost$Plain } from '../fn/order/api-check-out-place-order-post-plain';
import { ApiCheckOutPlaceOrderPost$Plain$Params } from '../fn/order/api-check-out-place-order-post-plain';
import { apiDashboardOrderGetAllGet$Json } from '../fn/order/api-dashboard-order-get-all-get-json';
import { ApiDashboardOrderGetAllGet$Json$Params } from '../fn/order/api-dashboard-order-get-all-get-json';
import { apiDashboardOrderGetAllGet$Plain } from '../fn/order/api-dashboard-order-get-all-get-plain';
import { ApiDashboardOrderGetAllGet$Plain$Params } from '../fn/order/api-dashboard-order-get-all-get-plain';
import { apiDashboardOrdersConfirmOrderPost$Json } from '../fn/order/api-dashboard-orders-confirm-order-post-json';
import { ApiDashboardOrdersConfirmOrderPost$Json$Params } from '../fn/order/api-dashboard-orders-confirm-order-post-json';
import { apiDashboardOrdersConfirmOrderPost$Plain } from '../fn/order/api-dashboard-orders-confirm-order-post-plain';
import { ApiDashboardOrdersConfirmOrderPost$Plain$Params } from '../fn/order/api-dashboard-orders-confirm-order-post-plain';
import { apiOrderGetAllGet$Json } from '../fn/order/api-order-get-all-get-json';
import { ApiOrderGetAllGet$Json$Params } from '../fn/order/api-order-get-all-get-json';
import { apiOrderGetAllGet$Plain } from '../fn/order/api-order-get-all-get-plain';
import { ApiOrderGetAllGet$Plain$Params } from '../fn/order/api-order-get-all-get-plain';
import { OrderViewModelForAdminPaginationViewModelApiResult } from '../models/order-view-model-for-admin-pagination-view-model-api-result';
import { OrderViewModelForUserPaginationViewModelApiResult } from '../models/order-view-model-for-user-pagination-view-model-api-result';
import { StringApiResult } from '../models/string-api-result';

@Injectable({ providedIn: 'root' })
export class OrderService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiCheckOutPlaceOrderPost()` */
  static readonly ApiCheckOutPlaceOrderPostPath = '/api/CheckOut/PlaceOrder';

  /**
   * Place order.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCheckOutPlaceOrderPost$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCheckOutPlaceOrderPost$Plain$Response(params: ApiCheckOutPlaceOrderPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<StringApiResult>> {
    return apiCheckOutPlaceOrderPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Place order.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCheckOutPlaceOrderPost$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCheckOutPlaceOrderPost$Plain(params: ApiCheckOutPlaceOrderPost$Plain$Params, context?: HttpContext): Observable<StringApiResult> {
    return this.apiCheckOutPlaceOrderPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<StringApiResult>): StringApiResult => r.body)
    );
  }

  /**
   * Place order.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCheckOutPlaceOrderPost$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCheckOutPlaceOrderPost$Json$Response(params: ApiCheckOutPlaceOrderPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<StringApiResult>> {
    return apiCheckOutPlaceOrderPost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * Place order.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCheckOutPlaceOrderPost$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCheckOutPlaceOrderPost$Json(params: ApiCheckOutPlaceOrderPost$Json$Params, context?: HttpContext): Observable<StringApiResult> {
    return this.apiCheckOutPlaceOrderPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<StringApiResult>): StringApiResult => r.body)
    );
  }

  /** Path part for operation `apiDashboardOrderGetAllGet()` */
  static readonly ApiDashboardOrderGetAllGetPath = '/api/Dashboard/Order/GetAll';

  /**
   * Get all orders.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDashboardOrderGetAllGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDashboardOrderGetAllGet$Plain$Response(params: ApiDashboardOrderGetAllGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<OrderViewModelForAdminPaginationViewModelApiResult>> {
    return apiDashboardOrderGetAllGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Get all orders.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDashboardOrderGetAllGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDashboardOrderGetAllGet$Plain(params: ApiDashboardOrderGetAllGet$Plain$Params, context?: HttpContext): Observable<OrderViewModelForAdminPaginationViewModelApiResult> {
    return this.apiDashboardOrderGetAllGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<OrderViewModelForAdminPaginationViewModelApiResult>): OrderViewModelForAdminPaginationViewModelApiResult => r.body)
    );
  }

  /**
   * Get all orders.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDashboardOrderGetAllGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDashboardOrderGetAllGet$Json$Response(params: ApiDashboardOrderGetAllGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<OrderViewModelForAdminPaginationViewModelApiResult>> {
    return apiDashboardOrderGetAllGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * Get all orders.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDashboardOrderGetAllGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDashboardOrderGetAllGet$Json(params: ApiDashboardOrderGetAllGet$Json$Params, context?: HttpContext): Observable<OrderViewModelForAdminPaginationViewModelApiResult> {
    return this.apiDashboardOrderGetAllGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<OrderViewModelForAdminPaginationViewModelApiResult>): OrderViewModelForAdminPaginationViewModelApiResult => r.body)
    );
  }

  /** Path part for operation `apiDashboardOrdersConfirmOrderPost()` */
  static readonly ApiDashboardOrdersConfirmOrderPostPath = '/api/Dashboard/Orders/ConfirmOrder';

  /**
   * Confirm order payment.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDashboardOrdersConfirmOrderPost$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDashboardOrdersConfirmOrderPost$Plain$Response(params: ApiDashboardOrdersConfirmOrderPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<StringApiResult>> {
    return apiDashboardOrdersConfirmOrderPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Confirm order payment.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDashboardOrdersConfirmOrderPost$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDashboardOrdersConfirmOrderPost$Plain(params: ApiDashboardOrdersConfirmOrderPost$Plain$Params, context?: HttpContext): Observable<StringApiResult> {
    return this.apiDashboardOrdersConfirmOrderPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<StringApiResult>): StringApiResult => r.body)
    );
  }

  /**
   * Confirm order payment.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDashboardOrdersConfirmOrderPost$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDashboardOrdersConfirmOrderPost$Json$Response(params: ApiDashboardOrdersConfirmOrderPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<StringApiResult>> {
    return apiDashboardOrdersConfirmOrderPost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * Confirm order payment.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDashboardOrdersConfirmOrderPost$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDashboardOrdersConfirmOrderPost$Json(params: ApiDashboardOrdersConfirmOrderPost$Json$Params, context?: HttpContext): Observable<StringApiResult> {
    return this.apiDashboardOrdersConfirmOrderPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<StringApiResult>): StringApiResult => r.body)
    );
  }

  /** Path part for operation `apiOrderGetAllGet()` */
  static readonly ApiOrderGetAllGetPath = '/api/Order/GetAll';

  /**
   * Get all user orders.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOrderGetAllGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOrderGetAllGet$Plain$Response(params: ApiOrderGetAllGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<OrderViewModelForUserPaginationViewModelApiResult>> {
    return apiOrderGetAllGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Get all user orders.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiOrderGetAllGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOrderGetAllGet$Plain(params: ApiOrderGetAllGet$Plain$Params, context?: HttpContext): Observable<OrderViewModelForUserPaginationViewModelApiResult> {
    return this.apiOrderGetAllGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<OrderViewModelForUserPaginationViewModelApiResult>): OrderViewModelForUserPaginationViewModelApiResult => r.body)
    );
  }

  /**
   * Get all user orders.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOrderGetAllGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOrderGetAllGet$Json$Response(params: ApiOrderGetAllGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<OrderViewModelForUserPaginationViewModelApiResult>> {
    return apiOrderGetAllGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * Get all user orders.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiOrderGetAllGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOrderGetAllGet$Json(params: ApiOrderGetAllGet$Json$Params, context?: HttpContext): Observable<OrderViewModelForUserPaginationViewModelApiResult> {
    return this.apiOrderGetAllGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<OrderViewModelForUserPaginationViewModelApiResult>): OrderViewModelForUserPaginationViewModelApiResult => r.body)
    );
  }

}
