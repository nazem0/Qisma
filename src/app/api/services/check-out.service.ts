/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiCheckOutPlaceOrderPost$Json } from '../fn/check-out/api-check-out-place-order-post-json';
import { ApiCheckOutPlaceOrderPost$Json$Params } from '../fn/check-out/api-check-out-place-order-post-json';
import { apiCheckOutPlaceOrderPost$Plain } from '../fn/check-out/api-check-out-place-order-post-plain';
import { ApiCheckOutPlaceOrderPost$Plain$Params } from '../fn/check-out/api-check-out-place-order-post-plain';
import { apiCheckOutProceedWithBuyPost$Json } from '../fn/check-out/api-check-out-proceed-with-buy-post-json';
import { ApiCheckOutProceedWithBuyPost$Json$Params } from '../fn/check-out/api-check-out-proceed-with-buy-post-json';
import { apiCheckOutProceedWithBuyPost$Plain } from '../fn/check-out/api-check-out-proceed-with-buy-post-plain';
import { ApiCheckOutProceedWithBuyPost$Plain$Params } from '../fn/check-out/api-check-out-proceed-with-buy-post-plain';
import { StringApiResult } from '../models/string-api-result';

@Injectable({ providedIn: 'root' })
export class CheckOutService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiCheckOutProceedWithBuyPost()` */
  static readonly ApiCheckOutProceedWithBuyPostPath = '/api/CheckOut/ProceedWithBuy';

  /**
   * Proceed with buy.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCheckOutProceedWithBuyPost$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCheckOutProceedWithBuyPost$Plain$Response(params: ApiCheckOutProceedWithBuyPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<StringApiResult>> {
    return apiCheckOutProceedWithBuyPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Proceed with buy.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCheckOutProceedWithBuyPost$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCheckOutProceedWithBuyPost$Plain(params: ApiCheckOutProceedWithBuyPost$Plain$Params, context?: HttpContext): Observable<StringApiResult> {
    return this.apiCheckOutProceedWithBuyPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<StringApiResult>): StringApiResult => r.body)
    );
  }

  /**
   * Proceed with buy.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCheckOutProceedWithBuyPost$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCheckOutProceedWithBuyPost$Json$Response(params: ApiCheckOutProceedWithBuyPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<StringApiResult>> {
    return apiCheckOutProceedWithBuyPost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * Proceed with buy.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCheckOutProceedWithBuyPost$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCheckOutProceedWithBuyPost$Json(params: ApiCheckOutProceedWithBuyPost$Json$Params, context?: HttpContext): Observable<StringApiResult> {
    return this.apiCheckOutProceedWithBuyPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<StringApiResult>): StringApiResult => r.body)
    );
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

}
