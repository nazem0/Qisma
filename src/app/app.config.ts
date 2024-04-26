import { ApplicationConfig, DEFAULT_CURRENCY_CODE, importProvidersFrom } from '@angular/core';
import { provideRouter, withInMemoryScrolling, withRouterConfig } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import {  MAT_DATE_LOCALE } from '@angular/material/core';
import { HTTP_INTERCEPTORS, provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { AdminAuthGuard } from './guards/admin.guard';
import { UserAuthGuard } from './guards/user.guard';
import { Http } from './interceptors/http.interceptor';
import en from '@angular/common/locales/en';
import { registerLocaleData } from '@angular/common';
import { routes } from './app.routes';
import { environment } from '../environments/environment';
import { ApiConfiguration } from './api/api-configuration';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';

registerLocaleData(en);

export const appConfig: ApplicationConfig = {
  providers: [
    {provide:ApiConfiguration, useValue:{rootUrl:environment.api}},
    importProvidersFrom(LoadingBarHttpClientModule),
    provideRouter(routes, withInMemoryScrolling({scrollPositionRestoration:'enabled'})),
    provideClientHydration(),
    provideAnimations(),
    provideHttpClient(),
    {
      provide: MAT_DATE_LOCALE,
      useValue: 'ar-EG'
    },
    provideAnimationsAsync(),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Http,
      multi: true,
    },
    AdminAuthGuard,
    UserAuthGuard,
    { provide: NZ_I18N, useValue: en_US },
    {
      provide: DEFAULT_CURRENCY_CODE , useValue: 'EGP'
    }
  ]
};