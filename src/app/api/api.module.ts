/* tslint:disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationParams } from './api-configuration';

import { AboutQismaService } from './services/about-qisma.service';
import { BlogService } from './services/blog.service';
import { FaqService } from './services/faq.service';
import { GovernorateAndCityService } from './services/governorate-and-city.service';
import { OrderService } from './services/order.service';
import { PropertyService } from './services/property.service';
import { PropertyForAdminService } from './services/property-for-admin.service';
import { UserAccountService } from './services/user-account.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    AboutQismaService,
    BlogService,
    FaqService,
    GovernorateAndCityService,
    OrderService,
    PropertyService,
    PropertyForAdminService,
    UserAccountService,
    ApiConfiguration
  ],
})
export class ApiModule {
  static forRoot(params: ApiConfigurationParams): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor( 
    @Optional() @SkipSelf() parentModule: ApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
