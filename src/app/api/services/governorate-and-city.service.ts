/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiCitiesGetByGovernorateIdGet$Json } from '../fn/governorate-and-city/api-cities-get-by-governorate-id-get-json';
import { ApiCitiesGetByGovernorateIdGet$Json$Params } from '../fn/governorate-and-city/api-cities-get-by-governorate-id-get-json';
import { apiCitiesGetByGovernorateIdGet$Plain } from '../fn/governorate-and-city/api-cities-get-by-governorate-id-get-plain';
import { ApiCitiesGetByGovernorateIdGet$Plain$Params } from '../fn/governorate-and-city/api-cities-get-by-governorate-id-get-plain';
import { apiGovernorateGetAllGet$Json } from '../fn/governorate-and-city/api-governorate-get-all-get-json';
import { ApiGovernorateGetAllGet$Json$Params } from '../fn/governorate-and-city/api-governorate-get-all-get-json';
import { apiGovernorateGetAllGet$Plain } from '../fn/governorate-and-city/api-governorate-get-all-get-plain';
import { ApiGovernorateGetAllGet$Plain$Params } from '../fn/governorate-and-city/api-governorate-get-all-get-plain';
import { GovernorateAndCityViewModelListApiResult } from '../models/governorate-and-city-view-model-list-api-result';

@Injectable({ providedIn: 'root' })
export class GovernorateAndCityService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiGovernorateGetAllGet()` */
  static readonly ApiGovernorateGetAllGetPath = '/api/Governorate/GetAll';

  /**
   * Get all governorates.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGovernorateGetAllGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGovernorateGetAllGet$Plain$Response(params?: ApiGovernorateGetAllGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<GovernorateAndCityViewModelListApiResult>> {
    return apiGovernorateGetAllGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Get all governorates.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiGovernorateGetAllGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGovernorateGetAllGet$Plain(params?: ApiGovernorateGetAllGet$Plain$Params, context?: HttpContext): Observable<GovernorateAndCityViewModelListApiResult> {
    return this.apiGovernorateGetAllGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<GovernorateAndCityViewModelListApiResult>): GovernorateAndCityViewModelListApiResult => r.body)
    );
  }

  /**
   * Get all governorates.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGovernorateGetAllGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGovernorateGetAllGet$Json$Response(params?: ApiGovernorateGetAllGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<GovernorateAndCityViewModelListApiResult>> {
    return apiGovernorateGetAllGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * Get all governorates.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiGovernorateGetAllGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGovernorateGetAllGet$Json(params?: ApiGovernorateGetAllGet$Json$Params, context?: HttpContext): Observable<GovernorateAndCityViewModelListApiResult> {
    return this.apiGovernorateGetAllGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<GovernorateAndCityViewModelListApiResult>): GovernorateAndCityViewModelListApiResult => r.body)
    );
  }

  /** Path part for operation `apiCitiesGetByGovernorateIdGet()` */
  static readonly ApiCitiesGetByGovernorateIdGetPath = '/api/Cities/GetByGovernorateId';

  /**
   * Get cities by governorate id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCitiesGetByGovernorateIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCitiesGetByGovernorateIdGet$Plain$Response(params?: ApiCitiesGetByGovernorateIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<GovernorateAndCityViewModelListApiResult>> {
    return apiCitiesGetByGovernorateIdGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Get cities by governorate id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCitiesGetByGovernorateIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCitiesGetByGovernorateIdGet$Plain(params?: ApiCitiesGetByGovernorateIdGet$Plain$Params, context?: HttpContext): Observable<GovernorateAndCityViewModelListApiResult> {
    return this.apiCitiesGetByGovernorateIdGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<GovernorateAndCityViewModelListApiResult>): GovernorateAndCityViewModelListApiResult => r.body)
    );
  }

  /**
   * Get cities by governorate id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCitiesGetByGovernorateIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCitiesGetByGovernorateIdGet$Json$Response(params?: ApiCitiesGetByGovernorateIdGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<GovernorateAndCityViewModelListApiResult>> {
    return apiCitiesGetByGovernorateIdGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * Get cities by governorate id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCitiesGetByGovernorateIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCitiesGetByGovernorateIdGet$Json(params?: ApiCitiesGetByGovernorateIdGet$Json$Params, context?: HttpContext): Observable<GovernorateAndCityViewModelListApiResult> {
    return this.apiCitiesGetByGovernorateIdGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<GovernorateAndCityViewModelListApiResult>): GovernorateAndCityViewModelListApiResult => r.body)
    );
  }

}
