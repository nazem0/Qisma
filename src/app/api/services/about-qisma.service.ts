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
import { apiAboutQismaGetAllTeamMembersGet$Json } from '../fn/about-qisma/api-about-qisma-get-all-team-members-get-json';
import { ApiAboutQismaGetAllTeamMembersGet$Json$Params } from '../fn/about-qisma/api-about-qisma-get-all-team-members-get-json';
import { apiAboutQismaGetAllTeamMembersGet$Plain } from '../fn/about-qisma/api-about-qisma-get-all-team-members-get-plain';
import { ApiAboutQismaGetAllTeamMembersGet$Plain$Params } from '../fn/about-qisma/api-about-qisma-get-all-team-members-get-plain';
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
import { apiDashboardAboutQismaUpdateSupportPut$Json } from '../fn/about-qisma/api-dashboard-about-qisma-update-support-put-json';
import { ApiDashboardAboutQismaUpdateSupportPut$Json$Params } from '../fn/about-qisma/api-dashboard-about-qisma-update-support-put-json';
import { apiDashboardAboutQismaUpdateSupportPut$Plain } from '../fn/about-qisma/api-dashboard-about-qisma-update-support-put-plain';
import { ApiDashboardAboutQismaUpdateSupportPut$Plain$Params } from '../fn/about-qisma/api-dashboard-about-qisma-update-support-put-plain';
import { apiDashboardAboutQismaUpdateTeamMemberPut$Json } from '../fn/about-qisma/api-dashboard-about-qisma-update-team-member-put-json';
import { ApiDashboardAboutQismaUpdateTeamMemberPut$Json$Params } from '../fn/about-qisma/api-dashboard-about-qisma-update-team-member-put-json';
import { apiDashboardAboutQismaUpdateTeamMemberPut$Plain } from '../fn/about-qisma/api-dashboard-about-qisma-update-team-member-put-plain';
import { ApiDashboardAboutQismaUpdateTeamMemberPut$Plain$Params } from '../fn/about-qisma/api-dashboard-about-qisma-update-team-member-put-plain';
import { StringApiResult } from '../models/string-api-result';
import { SupportViewModelApiResult } from '../models/support-view-model-api-result';
import { TeamMemberListApiResult } from '../models/team-member-list-api-result';

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
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
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
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
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
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
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
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
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

  /** Path part for operation `apiAboutQismaGetAllTeamMembersGet()` */
  static readonly ApiAboutQismaGetAllTeamMembersGetPath = '/api/AboutQisma/GetAllTeamMembers';

  /**
   * Get all team members.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAboutQismaGetAllTeamMembersGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAboutQismaGetAllTeamMembersGet$Plain$Response(params?: ApiAboutQismaGetAllTeamMembersGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<TeamMemberListApiResult>> {
    return apiAboutQismaGetAllTeamMembersGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * Get all team members.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAboutQismaGetAllTeamMembersGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAboutQismaGetAllTeamMembersGet$Plain(params?: ApiAboutQismaGetAllTeamMembersGet$Plain$Params, context?: HttpContext): Observable<TeamMemberListApiResult> {
    return this.apiAboutQismaGetAllTeamMembersGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<TeamMemberListApiResult>): TeamMemberListApiResult => r.body)
    );
  }

  /**
   * Get all team members.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAboutQismaGetAllTeamMembersGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAboutQismaGetAllTeamMembersGet$Json$Response(params?: ApiAboutQismaGetAllTeamMembersGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<TeamMemberListApiResult>> {
    return apiAboutQismaGetAllTeamMembersGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * Get all team members.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAboutQismaGetAllTeamMembersGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAboutQismaGetAllTeamMembersGet$Json(params?: ApiAboutQismaGetAllTeamMembersGet$Json$Params, context?: HttpContext): Observable<TeamMemberListApiResult> {
    return this.apiAboutQismaGetAllTeamMembersGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<TeamMemberListApiResult>): TeamMemberListApiResult => r.body)
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
