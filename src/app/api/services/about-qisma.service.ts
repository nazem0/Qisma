/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { AboutUsViewModelApiResult } from '../models/about-us-view-model-api-result';
import { apiAboutQismaGetAboutUsGet$Json } from '../fn/about-qisma/api-about-qisma-get-about-us-get-json';
import { ApiAboutQismaGetAboutUsGet$Json$Params } from '../fn/about-qisma/api-about-qisma-get-about-us-get-json';
import { apiAboutQismaGetAboutUsGet$Plain } from '../fn/about-qisma/api-about-qisma-get-about-us-get-plain';
import { ApiAboutQismaGetAboutUsGet$Plain$Params } from '../fn/about-qisma/api-about-qisma-get-about-us-get-plain';
import { apiAboutQismaGetAllManagersGet$Json } from '../fn/about-qisma/api-about-qisma-get-all-managers-get-json';
import { ApiAboutQismaGetAllManagersGet$Json$Params } from '../fn/about-qisma/api-about-qisma-get-all-managers-get-json';
import { apiAboutQismaGetAllManagersGet$Plain } from '../fn/about-qisma/api-about-qisma-get-all-managers-get-plain';
import { ApiAboutQismaGetAllManagersGet$Plain$Params } from '../fn/about-qisma/api-about-qisma-get-all-managers-get-plain';
import { apiAboutQismaGetAllMembersGet$Json } from '../fn/about-qisma/api-about-qisma-get-all-members-get-json';
import { ApiAboutQismaGetAllMembersGet$Json$Params } from '../fn/about-qisma/api-about-qisma-get-all-members-get-json';
import { apiAboutQismaGetAllMembersGet$Plain } from '../fn/about-qisma/api-about-qisma-get-all-members-get-plain';
import { ApiAboutQismaGetAllMembersGet$Plain$Params } from '../fn/about-qisma/api-about-qisma-get-all-members-get-plain';
import { apiAboutQismaGetSupportGet$Json } from '../fn/about-qisma/api-about-qisma-get-support-get-json';
import { ApiAboutQismaGetSupportGet$Json$Params } from '../fn/about-qisma/api-about-qisma-get-support-get-json';
import { apiAboutQismaGetSupportGet$Plain } from '../fn/about-qisma/api-about-qisma-get-support-get-plain';
import { ApiAboutQismaGetSupportGet$Plain$Params } from '../fn/about-qisma/api-about-qisma-get-support-get-plain';
import { apiDashboardAboutQismaAddTeamMemberPost$Json } from '../fn/about-qisma/api-dashboard-about-qisma-add-team-member-post-json';
import { ApiDashboardAboutQismaAddTeamMemberPost$Json$Params } from '../fn/about-qisma/api-dashboard-about-qisma-add-team-member-post-json';
import { apiDashboardAboutQismaAddTeamMemberPost$Plain } from '../fn/about-qisma/api-dashboard-about-qisma-add-team-member-post-plain';
import { ApiDashboardAboutQismaAddTeamMemberPost$Plain$Params } from '../fn/about-qisma/api-dashboard-about-qisma-add-team-member-post-plain';
import { apiDashboardAboutQismaDeleteTeamMemberDelete$Json } from '../fn/about-qisma/api-dashboard-about-qisma-delete-team-member-delete-json';
import { ApiDashboardAboutQismaDeleteTeamMemberDelete$Json$Params } from '../fn/about-qisma/api-dashboard-about-qisma-delete-team-member-delete-json';
import { apiDashboardAboutQismaDeleteTeamMemberDelete$Plain } from '../fn/about-qisma/api-dashboard-about-qisma-delete-team-member-delete-plain';
import { ApiDashboardAboutQismaDeleteTeamMemberDelete$Plain$Params } from '../fn/about-qisma/api-dashboard-about-qisma-delete-team-member-delete-plain';
import { apiDashboardAboutQismaUpdateAboutUsPut$Json } from '../fn/about-qisma/api-dashboard-about-qisma-update-about-us-put-json';
import { ApiDashboardAboutQismaUpdateAboutUsPut$Json$Params } from '../fn/about-qisma/api-dashboard-about-qisma-update-about-us-put-json';
import { apiDashboardAboutQismaUpdateAboutUsPut$Plain } from '../fn/about-qisma/api-dashboard-about-qisma-update-about-us-put-plain';
import { ApiDashboardAboutQismaUpdateAboutUsPut$Plain$Params } from '../fn/about-qisma/api-dashboard-about-qisma-update-about-us-put-plain';
import { apiDashboardAboutQismaUpdateManagersTitlePut$Json } from '../fn/about-qisma/api-dashboard-about-qisma-update-managers-title-put-json';
import { ApiDashboardAboutQismaUpdateManagersTitlePut$Json$Params } from '../fn/about-qisma/api-dashboard-about-qisma-update-managers-title-put-json';
import { apiDashboardAboutQismaUpdateManagersTitlePut$Plain } from '../fn/about-qisma/api-dashboard-about-qisma-update-managers-title-put-plain';
import { ApiDashboardAboutQismaUpdateManagersTitlePut$Plain$Params } from '../fn/about-qisma/api-dashboard-about-qisma-update-managers-title-put-plain';
import { apiDashboardAboutQismaUpdateSupportPut$Json } from '../fn/about-qisma/api-dashboard-about-qisma-update-support-put-json';
import { ApiDashboardAboutQismaUpdateSupportPut$Json$Params } from '../fn/about-qisma/api-dashboard-about-qisma-update-support-put-json';
import { apiDashboardAboutQismaUpdateSupportPut$Plain } from '../fn/about-qisma/api-dashboard-about-qisma-update-support-put-plain';
import { ApiDashboardAboutQismaUpdateSupportPut$Plain$Params } from '../fn/about-qisma/api-dashboard-about-qisma-update-support-put-plain';
import { apiDashboardAboutQismaUpdateTeamMemberPut$Json } from '../fn/about-qisma/api-dashboard-about-qisma-update-team-member-put-json';
import { ApiDashboardAboutQismaUpdateTeamMemberPut$Json$Params } from '../fn/about-qisma/api-dashboard-about-qisma-update-team-member-put-json';
import { apiDashboardAboutQismaUpdateTeamMemberPut$Plain } from '../fn/about-qisma/api-dashboard-about-qisma-update-team-member-put-plain';
import { ApiDashboardAboutQismaUpdateTeamMemberPut$Plain$Params } from '../fn/about-qisma/api-dashboard-about-qisma-update-team-member-put-plain';
import { apiDashboardAboutQismaUpdateTeamMembersTitlePut$Json } from '../fn/about-qisma/api-dashboard-about-qisma-update-team-members-title-put-json';
import { ApiDashboardAboutQismaUpdateTeamMembersTitlePut$Json$Params } from '../fn/about-qisma/api-dashboard-about-qisma-update-team-members-title-put-json';
import { apiDashboardAboutQismaUpdateTeamMembersTitlePut$Plain } from '../fn/about-qisma/api-dashboard-about-qisma-update-team-members-title-put-plain';
import { ApiDashboardAboutQismaUpdateTeamMembersTitlePut$Plain$Params } from '../fn/about-qisma/api-dashboard-about-qisma-update-team-members-title-put-plain';
import { StringApiResult } from '../models/string-api-result';
import { SupportViewModelApiResult } from '../models/support-view-model-api-result';
import { TeamViewModelApiResult } from '../models/team-view-model-api-result';

@Injectable({ providedIn: 'root' })
export class AboutQismaService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiAboutQismaGetSupportGet()` */
  static readonly ApiAboutQismaGetSupportGetPath = '/api/AboutQisma/GetSupport';

  /**
   * Get support email, support phone number.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAboutQismaGetSupportGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAboutQismaGetSupportGet$Plain$Response(params?: ApiAboutQismaGetSupportGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<SupportViewModelApiResult>> {
    return apiAboutQismaGetSupportGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Get support email, support phone number.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAboutQismaGetSupportGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAboutQismaGetSupportGet$Plain(params?: ApiAboutQismaGetSupportGet$Plain$Params, context?: HttpContext): Observable<SupportViewModelApiResult> {
    return this.apiAboutQismaGetSupportGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<SupportViewModelApiResult>): SupportViewModelApiResult => r.body)
    );
  }

  /**
   * Get support email, support phone number.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAboutQismaGetSupportGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAboutQismaGetSupportGet$Json$Response(params?: ApiAboutQismaGetSupportGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<SupportViewModelApiResult>> {
    return apiAboutQismaGetSupportGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * Get support email, support phone number.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAboutQismaGetSupportGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAboutQismaGetSupportGet$Json(params?: ApiAboutQismaGetSupportGet$Json$Params, context?: HttpContext): Observable<SupportViewModelApiResult> {
    return this.apiAboutQismaGetSupportGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<SupportViewModelApiResult>): SupportViewModelApiResult => r.body)
    );
  }

  /** Path part for operation `apiDashboardAboutQismaUpdateSupportPut()` */
  static readonly ApiDashboardAboutQismaUpdateSupportPutPath = '/api/Dashboard/AboutQisma/UpdateSupport';

  /**
   * Update support email, support phone number.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDashboardAboutQismaUpdateSupportPut$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDashboardAboutQismaUpdateSupportPut$Plain$Response(params?: ApiDashboardAboutQismaUpdateSupportPut$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<StringApiResult>> {
    return apiDashboardAboutQismaUpdateSupportPut$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Update support email, support phone number.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDashboardAboutQismaUpdateSupportPut$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDashboardAboutQismaUpdateSupportPut$Plain(params?: ApiDashboardAboutQismaUpdateSupportPut$Plain$Params, context?: HttpContext): Observable<StringApiResult> {
    return this.apiDashboardAboutQismaUpdateSupportPut$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<StringApiResult>): StringApiResult => r.body)
    );
  }

  /**
   * Update support email, support phone number.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDashboardAboutQismaUpdateSupportPut$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDashboardAboutQismaUpdateSupportPut$Json$Response(params?: ApiDashboardAboutQismaUpdateSupportPut$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<StringApiResult>> {
    return apiDashboardAboutQismaUpdateSupportPut$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * Update support email, support phone number.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDashboardAboutQismaUpdateSupportPut$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDashboardAboutQismaUpdateSupportPut$Json(params?: ApiDashboardAboutQismaUpdateSupportPut$Json$Params, context?: HttpContext): Observable<StringApiResult> {
    return this.apiDashboardAboutQismaUpdateSupportPut$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<StringApiResult>): StringApiResult => r.body)
    );
  }

  /** Path part for operation `apiAboutQismaGetAboutUsGet()` */
  static readonly ApiAboutQismaGetAboutUsGetPath = '/api/AboutQisma/GetAboutUs';

  /**
   * Get about us 1st and 2nd frame.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAboutQismaGetAboutUsGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAboutQismaGetAboutUsGet$Plain$Response(params?: ApiAboutQismaGetAboutUsGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<AboutUsViewModelApiResult>> {
    return apiAboutQismaGetAboutUsGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Get about us 1st and 2nd frame.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAboutQismaGetAboutUsGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAboutQismaGetAboutUsGet$Plain(params?: ApiAboutQismaGetAboutUsGet$Plain$Params, context?: HttpContext): Observable<AboutUsViewModelApiResult> {
    return this.apiAboutQismaGetAboutUsGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<AboutUsViewModelApiResult>): AboutUsViewModelApiResult => r.body)
    );
  }

  /**
   * Get about us 1st and 2nd frame.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAboutQismaGetAboutUsGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAboutQismaGetAboutUsGet$Json$Response(params?: ApiAboutQismaGetAboutUsGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<AboutUsViewModelApiResult>> {
    return apiAboutQismaGetAboutUsGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * Get about us 1st and 2nd frame.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAboutQismaGetAboutUsGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAboutQismaGetAboutUsGet$Json(params?: ApiAboutQismaGetAboutUsGet$Json$Params, context?: HttpContext): Observable<AboutUsViewModelApiResult> {
    return this.apiAboutQismaGetAboutUsGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<AboutUsViewModelApiResult>): AboutUsViewModelApiResult => r.body)
    );
  }

  /** Path part for operation `apiDashboardAboutQismaUpdateAboutUsPut()` */
  static readonly ApiDashboardAboutQismaUpdateAboutUsPutPath = '/api/Dashboard/AboutQisma/UpdateAboutUs';

  /**
   * Update about us 1st and 2nd frame.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDashboardAboutQismaUpdateAboutUsPut$Plain()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiDashboardAboutQismaUpdateAboutUsPut$Plain$Response(params?: ApiDashboardAboutQismaUpdateAboutUsPut$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<StringApiResult>> {
    return apiDashboardAboutQismaUpdateAboutUsPut$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Update about us 1st and 2nd frame.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDashboardAboutQismaUpdateAboutUsPut$Plain$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiDashboardAboutQismaUpdateAboutUsPut$Plain(params?: ApiDashboardAboutQismaUpdateAboutUsPut$Plain$Params, context?: HttpContext): Observable<StringApiResult> {
    return this.apiDashboardAboutQismaUpdateAboutUsPut$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<StringApiResult>): StringApiResult => r.body)
    );
  }

  /**
   * Update about us 1st and 2nd frame.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDashboardAboutQismaUpdateAboutUsPut$Json()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiDashboardAboutQismaUpdateAboutUsPut$Json$Response(params?: ApiDashboardAboutQismaUpdateAboutUsPut$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<StringApiResult>> {
    return apiDashboardAboutQismaUpdateAboutUsPut$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * Update about us 1st and 2nd frame.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDashboardAboutQismaUpdateAboutUsPut$Json$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiDashboardAboutQismaUpdateAboutUsPut$Json(params?: ApiDashboardAboutQismaUpdateAboutUsPut$Json$Params, context?: HttpContext): Observable<StringApiResult> {
    return this.apiDashboardAboutQismaUpdateAboutUsPut$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<StringApiResult>): StringApiResult => r.body)
    );
  }

  /** Path part for operation `apiDashboardAboutQismaAddTeamMemberPost()` */
  static readonly ApiDashboardAboutQismaAddTeamMemberPostPath = '/api/Dashboard/AboutQisma/AddTeamMember';

  /**
   * Add team member.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDashboardAboutQismaAddTeamMemberPost$Plain()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiDashboardAboutQismaAddTeamMemberPost$Plain$Response(params?: ApiDashboardAboutQismaAddTeamMemberPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<StringApiResult>> {
    return apiDashboardAboutQismaAddTeamMemberPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Add team member.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDashboardAboutQismaAddTeamMemberPost$Plain$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiDashboardAboutQismaAddTeamMemberPost$Plain(params?: ApiDashboardAboutQismaAddTeamMemberPost$Plain$Params, context?: HttpContext): Observable<StringApiResult> {
    return this.apiDashboardAboutQismaAddTeamMemberPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<StringApiResult>): StringApiResult => r.body)
    );
  }

  /**
   * Add team member.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDashboardAboutQismaAddTeamMemberPost$Json()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiDashboardAboutQismaAddTeamMemberPost$Json$Response(params?: ApiDashboardAboutQismaAddTeamMemberPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<StringApiResult>> {
    return apiDashboardAboutQismaAddTeamMemberPost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * Add team member.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDashboardAboutQismaAddTeamMemberPost$Json$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiDashboardAboutQismaAddTeamMemberPost$Json(params?: ApiDashboardAboutQismaAddTeamMemberPost$Json$Params, context?: HttpContext): Observable<StringApiResult> {
    return this.apiDashboardAboutQismaAddTeamMemberPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<StringApiResult>): StringApiResult => r.body)
    );
  }

  /** Path part for operation `apiAboutQismaGetAllManagersGet()` */
  static readonly ApiAboutQismaGetAllManagersGetPath = '/api/AboutQisma/GetAllManagers';

  /**
   * Get all team members.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAboutQismaGetAllManagersGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAboutQismaGetAllManagersGet$Plain$Response(params?: ApiAboutQismaGetAllManagersGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<TeamViewModelApiResult>> {
    return apiAboutQismaGetAllManagersGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Get all team members.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAboutQismaGetAllManagersGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAboutQismaGetAllManagersGet$Plain(params?: ApiAboutQismaGetAllManagersGet$Plain$Params, context?: HttpContext): Observable<TeamViewModelApiResult> {
    return this.apiAboutQismaGetAllManagersGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<TeamViewModelApiResult>): TeamViewModelApiResult => r.body)
    );
  }

  /**
   * Get all team members.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAboutQismaGetAllManagersGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAboutQismaGetAllManagersGet$Json$Response(params?: ApiAboutQismaGetAllManagersGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<TeamViewModelApiResult>> {
    return apiAboutQismaGetAllManagersGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * Get all team members.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAboutQismaGetAllManagersGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAboutQismaGetAllManagersGet$Json(params?: ApiAboutQismaGetAllManagersGet$Json$Params, context?: HttpContext): Observable<TeamViewModelApiResult> {
    return this.apiAboutQismaGetAllManagersGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<TeamViewModelApiResult>): TeamViewModelApiResult => r.body)
    );
  }

  /** Path part for operation `apiAboutQismaGetAllMembersGet()` */
  static readonly ApiAboutQismaGetAllMembersGetPath = '/api/AboutQisma/GetAllMembers';

  /**
   * Get all members.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAboutQismaGetAllMembersGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAboutQismaGetAllMembersGet$Plain$Response(params?: ApiAboutQismaGetAllMembersGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<TeamViewModelApiResult>> {
    return apiAboutQismaGetAllMembersGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Get all members.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAboutQismaGetAllMembersGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAboutQismaGetAllMembersGet$Plain(params?: ApiAboutQismaGetAllMembersGet$Plain$Params, context?: HttpContext): Observable<TeamViewModelApiResult> {
    return this.apiAboutQismaGetAllMembersGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<TeamViewModelApiResult>): TeamViewModelApiResult => r.body)
    );
  }

  /**
   * Get all members.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAboutQismaGetAllMembersGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAboutQismaGetAllMembersGet$Json$Response(params?: ApiAboutQismaGetAllMembersGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<TeamViewModelApiResult>> {
    return apiAboutQismaGetAllMembersGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * Get all members.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAboutQismaGetAllMembersGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAboutQismaGetAllMembersGet$Json(params?: ApiAboutQismaGetAllMembersGet$Json$Params, context?: HttpContext): Observable<TeamViewModelApiResult> {
    return this.apiAboutQismaGetAllMembersGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<TeamViewModelApiResult>): TeamViewModelApiResult => r.body)
    );
  }

  /** Path part for operation `apiDashboardAboutQismaUpdateTeamMemberPut()` */
  static readonly ApiDashboardAboutQismaUpdateTeamMemberPutPath = '/api/Dashboard/AboutQisma/UpdateTeamMember';

  /**
   * Update team members.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDashboardAboutQismaUpdateTeamMemberPut$Plain()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiDashboardAboutQismaUpdateTeamMemberPut$Plain$Response(params?: ApiDashboardAboutQismaUpdateTeamMemberPut$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<StringApiResult>> {
    return apiDashboardAboutQismaUpdateTeamMemberPut$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Update team members.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDashboardAboutQismaUpdateTeamMemberPut$Plain$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiDashboardAboutQismaUpdateTeamMemberPut$Plain(params?: ApiDashboardAboutQismaUpdateTeamMemberPut$Plain$Params, context?: HttpContext): Observable<StringApiResult> {
    return this.apiDashboardAboutQismaUpdateTeamMemberPut$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<StringApiResult>): StringApiResult => r.body)
    );
  }

  /**
   * Update team members.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDashboardAboutQismaUpdateTeamMemberPut$Json()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiDashboardAboutQismaUpdateTeamMemberPut$Json$Response(params?: ApiDashboardAboutQismaUpdateTeamMemberPut$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<StringApiResult>> {
    return apiDashboardAboutQismaUpdateTeamMemberPut$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * Update team members.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDashboardAboutQismaUpdateTeamMemberPut$Json$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiDashboardAboutQismaUpdateTeamMemberPut$Json(params?: ApiDashboardAboutQismaUpdateTeamMemberPut$Json$Params, context?: HttpContext): Observable<StringApiResult> {
    return this.apiDashboardAboutQismaUpdateTeamMemberPut$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<StringApiResult>): StringApiResult => r.body)
    );
  }

  /** Path part for operation `apiDashboardAboutQismaUpdateManagersTitlePut()` */
  static readonly ApiDashboardAboutQismaUpdateManagersTitlePutPath = '/api/Dashboard/AboutQisma/UpdateManagersTitle';

  /**
   * Update manager title.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDashboardAboutQismaUpdateManagersTitlePut$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDashboardAboutQismaUpdateManagersTitlePut$Plain$Response(params: ApiDashboardAboutQismaUpdateManagersTitlePut$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<StringApiResult>> {
    return apiDashboardAboutQismaUpdateManagersTitlePut$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Update manager title.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDashboardAboutQismaUpdateManagersTitlePut$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDashboardAboutQismaUpdateManagersTitlePut$Plain(params: ApiDashboardAboutQismaUpdateManagersTitlePut$Plain$Params, context?: HttpContext): Observable<StringApiResult> {
    return this.apiDashboardAboutQismaUpdateManagersTitlePut$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<StringApiResult>): StringApiResult => r.body)
    );
  }

  /**
   * Update manager title.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDashboardAboutQismaUpdateManagersTitlePut$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDashboardAboutQismaUpdateManagersTitlePut$Json$Response(params: ApiDashboardAboutQismaUpdateManagersTitlePut$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<StringApiResult>> {
    return apiDashboardAboutQismaUpdateManagersTitlePut$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * Update manager title.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDashboardAboutQismaUpdateManagersTitlePut$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDashboardAboutQismaUpdateManagersTitlePut$Json(params: ApiDashboardAboutQismaUpdateManagersTitlePut$Json$Params, context?: HttpContext): Observable<StringApiResult> {
    return this.apiDashboardAboutQismaUpdateManagersTitlePut$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<StringApiResult>): StringApiResult => r.body)
    );
  }

  /** Path part for operation `apiDashboardAboutQismaUpdateTeamMembersTitlePut()` */
  static readonly ApiDashboardAboutQismaUpdateTeamMembersTitlePutPath = '/api/Dashboard/AboutQisma/UpdateTeamMembersTitle';

  /**
   * Update team member title.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDashboardAboutQismaUpdateTeamMembersTitlePut$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDashboardAboutQismaUpdateTeamMembersTitlePut$Plain$Response(params: ApiDashboardAboutQismaUpdateTeamMembersTitlePut$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<StringApiResult>> {
    return apiDashboardAboutQismaUpdateTeamMembersTitlePut$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Update team member title.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDashboardAboutQismaUpdateTeamMembersTitlePut$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDashboardAboutQismaUpdateTeamMembersTitlePut$Plain(params: ApiDashboardAboutQismaUpdateTeamMembersTitlePut$Plain$Params, context?: HttpContext): Observable<StringApiResult> {
    return this.apiDashboardAboutQismaUpdateTeamMembersTitlePut$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<StringApiResult>): StringApiResult => r.body)
    );
  }

  /**
   * Update team member title.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDashboardAboutQismaUpdateTeamMembersTitlePut$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDashboardAboutQismaUpdateTeamMembersTitlePut$Json$Response(params: ApiDashboardAboutQismaUpdateTeamMembersTitlePut$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<StringApiResult>> {
    return apiDashboardAboutQismaUpdateTeamMembersTitlePut$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * Update team member title.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDashboardAboutQismaUpdateTeamMembersTitlePut$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDashboardAboutQismaUpdateTeamMembersTitlePut$Json(params: ApiDashboardAboutQismaUpdateTeamMembersTitlePut$Json$Params, context?: HttpContext): Observable<StringApiResult> {
    return this.apiDashboardAboutQismaUpdateTeamMembersTitlePut$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<StringApiResult>): StringApiResult => r.body)
    );
  }

  /** Path part for operation `apiDashboardAboutQismaDeleteTeamMemberDelete()` */
  static readonly ApiDashboardAboutQismaDeleteTeamMemberDeletePath = '/api/Dashboard/AboutQisma/DeleteTeamMember';

  /**
   * Delete team members.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDashboardAboutQismaDeleteTeamMemberDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDashboardAboutQismaDeleteTeamMemberDelete$Plain$Response(params: ApiDashboardAboutQismaDeleteTeamMemberDelete$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<StringApiResult>> {
    return apiDashboardAboutQismaDeleteTeamMemberDelete$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Delete team members.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDashboardAboutQismaDeleteTeamMemberDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDashboardAboutQismaDeleteTeamMemberDelete$Plain(params: ApiDashboardAboutQismaDeleteTeamMemberDelete$Plain$Params, context?: HttpContext): Observable<StringApiResult> {
    return this.apiDashboardAboutQismaDeleteTeamMemberDelete$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<StringApiResult>): StringApiResult => r.body)
    );
  }

  /**
   * Delete team members.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDashboardAboutQismaDeleteTeamMemberDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDashboardAboutQismaDeleteTeamMemberDelete$Json$Response(params: ApiDashboardAboutQismaDeleteTeamMemberDelete$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<StringApiResult>> {
    return apiDashboardAboutQismaDeleteTeamMemberDelete$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * Delete team members.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDashboardAboutQismaDeleteTeamMemberDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDashboardAboutQismaDeleteTeamMemberDelete$Json(params: ApiDashboardAboutQismaDeleteTeamMemberDelete$Json$Params, context?: HttpContext): Observable<StringApiResult> {
    return this.apiDashboardAboutQismaDeleteTeamMemberDelete$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<StringApiResult>): StringApiResult => r.body)
    );
  }

}
