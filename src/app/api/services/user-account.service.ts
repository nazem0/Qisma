/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiSignUpForCustomerPost$Json } from '../fn/user-account/api-sign-up-for-customer-post-json';
import { ApiSignUpForCustomerPost$Json$Params } from '../fn/user-account/api-sign-up-for-customer-post-json';
import { apiSignUpForCustomerPost$Plain } from '../fn/user-account/api-sign-up-for-customer-post-plain';
import { ApiSignUpForCustomerPost$Plain$Params } from '../fn/user-account/api-sign-up-for-customer-post-plain';
import { UserDataViewModelApiResult } from '../models/user-data-view-model-api-result';

@Injectable({ providedIn: 'root' })
export class UserAccountService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiSignUpForCustomerPost()` */
  static readonly ApiSignUpForCustomerPostPath = '/api/SignUpForCustomer';

  /**
   * Sign up for customers ==> InvestoreType 1- Retail 2- Institutional.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSignUpForCustomerPost$Plain()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiSignUpForCustomerPost$Plain$Response(params?: ApiSignUpForCustomerPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<UserDataViewModelApiResult>> {
    return apiSignUpForCustomerPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Sign up for customers ==> InvestoreType 1- Retail 2- Institutional.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiSignUpForCustomerPost$Plain$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiSignUpForCustomerPost$Plain(params?: ApiSignUpForCustomerPost$Plain$Params, context?: HttpContext): Observable<UserDataViewModelApiResult> {
    return this.apiSignUpForCustomerPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<UserDataViewModelApiResult>): UserDataViewModelApiResult => r.body)
    );
  }

  /**
   * Sign up for customers ==> InvestoreType 1- Retail 2- Institutional.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSignUpForCustomerPost$Json()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiSignUpForCustomerPost$Json$Response(params?: ApiSignUpForCustomerPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<UserDataViewModelApiResult>> {
    return apiSignUpForCustomerPost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * Sign up for customers ==> InvestoreType 1- Retail 2- Institutional.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiSignUpForCustomerPost$Json$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiSignUpForCustomerPost$Json(params?: ApiSignUpForCustomerPost$Json$Params, context?: HttpContext): Observable<UserDataViewModelApiResult> {
    return this.apiSignUpForCustomerPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<UserDataViewModelApiResult>): UserDataViewModelApiResult => r.body)
    );
  }

}
