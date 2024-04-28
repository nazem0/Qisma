/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiSignInPost$Json } from '../fn/user-account/api-sign-in-post-json';
import { ApiSignInPost$Json$Params } from '../fn/user-account/api-sign-in-post-json';
import { apiSignInPost$Plain } from '../fn/user-account/api-sign-in-post-plain';
import { ApiSignInPost$Plain$Params } from '../fn/user-account/api-sign-in-post-plain';
import { apiSignUpForCustomerPost$Json } from '../fn/user-account/api-sign-up-for-customer-post-json';
import { ApiSignUpForCustomerPost$Json$Params } from '../fn/user-account/api-sign-up-for-customer-post-json';
import { apiSignUpForCustomerPost$Plain } from '../fn/user-account/api-sign-up-for-customer-post-plain';
import { ApiSignUpForCustomerPost$Plain$Params } from '../fn/user-account/api-sign-up-for-customer-post-plain';
import { apiUserGetFullInformationGet$Json } from '../fn/user-account/api-user-get-full-information-get-json';
import { ApiUserGetFullInformationGet$Json$Params } from '../fn/user-account/api-user-get-full-information-get-json';
import { apiUserGetFullInformationGet$Plain } from '../fn/user-account/api-user-get-full-information-get-plain';
import { ApiUserGetFullInformationGet$Plain$Params } from '../fn/user-account/api-user-get-full-information-get-plain';
import { apiUserGetPortfolioGet$Json } from '../fn/user-account/api-user-get-portfolio-get-json';
import { ApiUserGetPortfolioGet$Json$Params } from '../fn/user-account/api-user-get-portfolio-get-json';
import { apiUserGetPortfolioGet$Plain } from '../fn/user-account/api-user-get-portfolio-get-plain';
import { ApiUserGetPortfolioGet$Plain$Params } from '../fn/user-account/api-user-get-portfolio-get-plain';
import { apiUserUpdateInformationPut$Json } from '../fn/user-account/api-user-update-information-put-json';
import { ApiUserUpdateInformationPut$Json$Params } from '../fn/user-account/api-user-update-information-put-json';
import { apiUserUpdateInformationPut$Plain } from '../fn/user-account/api-user-update-information-put-plain';
import { ApiUserUpdateInformationPut$Plain$Params } from '../fn/user-account/api-user-update-information-put-plain';
import { StringApiResult } from '../models/string-api-result';
import { UserDataViewModelApiResult } from '../models/user-data-view-model-api-result';
import { UserFullInformationViewModelApiResult } from '../models/user-full-information-view-model-api-result';
import { UserPortfolioViewModelApiResult } from '../models/user-portfolio-view-model-api-result';

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

  /** Path part for operation `apiSignInPost()` */
  static readonly ApiSignInPostPath = '/api/SignIn';

  /**
   * Sign in.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSignInPost$Plain()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiSignInPost$Plain$Response(params?: ApiSignInPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<UserDataViewModelApiResult>> {
    return apiSignInPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Sign in.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiSignInPost$Plain$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiSignInPost$Plain(params?: ApiSignInPost$Plain$Params, context?: HttpContext): Observable<UserDataViewModelApiResult> {
    return this.apiSignInPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<UserDataViewModelApiResult>): UserDataViewModelApiResult => r.body)
    );
  }

  /**
   * Sign in.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSignInPost$Json()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiSignInPost$Json$Response(params?: ApiSignInPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<UserDataViewModelApiResult>> {
    return apiSignInPost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * Sign in.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiSignInPost$Json$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiSignInPost$Json(params?: ApiSignInPost$Json$Params, context?: HttpContext): Observable<UserDataViewModelApiResult> {
    return this.apiSignInPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<UserDataViewModelApiResult>): UserDataViewModelApiResult => r.body)
    );
  }

  /** Path part for operation `apiUserGetFullInformationGet()` */
  static readonly ApiUserGetFullInformationGetPath = '/api/User/GetFullInformation';

  /**
   * User full informations.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserGetFullInformationGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserGetFullInformationGet$Plain$Response(params?: ApiUserGetFullInformationGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<UserFullInformationViewModelApiResult>> {
    return apiUserGetFullInformationGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * User full informations.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserGetFullInformationGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserGetFullInformationGet$Plain(params?: ApiUserGetFullInformationGet$Plain$Params, context?: HttpContext): Observable<UserFullInformationViewModelApiResult> {
    return this.apiUserGetFullInformationGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<UserFullInformationViewModelApiResult>): UserFullInformationViewModelApiResult => r.body)
    );
  }

  /**
   * User full informations.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserGetFullInformationGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserGetFullInformationGet$Json$Response(params?: ApiUserGetFullInformationGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<UserFullInformationViewModelApiResult>> {
    return apiUserGetFullInformationGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * User full informations.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserGetFullInformationGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserGetFullInformationGet$Json(params?: ApiUserGetFullInformationGet$Json$Params, context?: HttpContext): Observable<UserFullInformationViewModelApiResult> {
    return this.apiUserGetFullInformationGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<UserFullInformationViewModelApiResult>): UserFullInformationViewModelApiResult => r.body)
    );
  }

  /** Path part for operation `apiUserGetPortfolioGet()` */
  static readonly ApiUserGetPortfolioGetPath = '/api/User/GetPortfolio';

  /**
   * Get user portfolio.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserGetPortfolioGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserGetPortfolioGet$Plain$Response(params?: ApiUserGetPortfolioGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<UserPortfolioViewModelApiResult>> {
    return apiUserGetPortfolioGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Get user portfolio.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserGetPortfolioGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserGetPortfolioGet$Plain(params?: ApiUserGetPortfolioGet$Plain$Params, context?: HttpContext): Observable<UserPortfolioViewModelApiResult> {
    return this.apiUserGetPortfolioGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<UserPortfolioViewModelApiResult>): UserPortfolioViewModelApiResult => r.body)
    );
  }

  /**
   * Get user portfolio.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserGetPortfolioGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserGetPortfolioGet$Json$Response(params?: ApiUserGetPortfolioGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<UserPortfolioViewModelApiResult>> {
    return apiUserGetPortfolioGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * Get user portfolio.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserGetPortfolioGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserGetPortfolioGet$Json(params?: ApiUserGetPortfolioGet$Json$Params, context?: HttpContext): Observable<UserPortfolioViewModelApiResult> {
    return this.apiUserGetPortfolioGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<UserPortfolioViewModelApiResult>): UserPortfolioViewModelApiResult => r.body)
    );
  }

  /** Path part for operation `apiUserUpdateInformationPut()` */
  static readonly ApiUserUpdateInformationPutPath = '/api/User/UpdateInformation';

  /**
   * Update user porfile informations.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserUpdateInformationPut$Plain()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiUserUpdateInformationPut$Plain$Response(params?: ApiUserUpdateInformationPut$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<StringApiResult>> {
    return apiUserUpdateInformationPut$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Update user porfile informations.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserUpdateInformationPut$Plain$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiUserUpdateInformationPut$Plain(params?: ApiUserUpdateInformationPut$Plain$Params, context?: HttpContext): Observable<StringApiResult> {
    return this.apiUserUpdateInformationPut$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<StringApiResult>): StringApiResult => r.body)
    );
  }

  /**
   * Update user porfile informations.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserUpdateInformationPut$Json()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiUserUpdateInformationPut$Json$Response(params?: ApiUserUpdateInformationPut$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<StringApiResult>> {
    return apiUserUpdateInformationPut$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * Update user porfile informations.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserUpdateInformationPut$Json$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiUserUpdateInformationPut$Json(params?: ApiUserUpdateInformationPut$Json$Params, context?: HttpContext): Observable<StringApiResult> {
    return this.apiUserUpdateInformationPut$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<StringApiResult>): StringApiResult => r.body)
    );
  }

}
