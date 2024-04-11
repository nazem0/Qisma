import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InputTextModule } from 'primeng/inputtext';

import { ButtonModule } from 'primeng/button';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { FileUploadModule } from 'primeng/fileupload';
// import { MessagesModule } from 'primeng/messages';
import { FieldsetModule } from 'primeng/fieldset';
import { DropdownModule } from 'primeng/dropdown';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';
import { TabViewModule } from 'primeng/tabview';
import { SliderModule } from 'primeng/slider';
import { StepperModule } from 'primeng/stepper';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';

import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogTitle, MatDialogContent, } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';


import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { Http } from './interceptors/http.interceptor';
import { ForgotPasswordComponent } from './components/guest/forgot-password/forgot-password.component';
import { AuthHelper } from './services/auth-helper';
import { ContactUsComponent } from './components/guest/contact-us/contact-us.component';
import { UserAuthGuard } from './guards/user.guard';
import { DialogComponent } from './components/shared/dialog/dialog.component';
import { Helper } from './services/helper';
import { PaymentComponent } from './components/guest/payment/payment.component';
import { ResetPasswordComponent } from './components/guest/reset-password/reset-password.component';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { DevComponent } from './components/guest/dev/dev.component';
import { AboutUsComponent } from './components/guest/about-us/about-us.component';
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component';
import { ApiModule } from './api/api.module';
import { environment } from '../environments/environment';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { AdminAuthGuard } from './guards/admin.guard';
import { BusinessHelper } from './services/business-helper';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    ForgotPasswordComponent,
    ContactUsComponent,
    DialogComponent,
    PaymentComponent,
    ResetPasswordComponent,
    DevComponent,
    AboutUsComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    //PrimeNg Modules
    CheckboxModule,
    InputTextModule,
    ButtonModule,
    InputMaskModule,
    InputNumberModule,
    FileUploadModule,
    // MessagesModule,
    FieldsetModule,
    DropdownModule,
    InputGroupModule,
    InputGroupAddonModule,
    MenubarModule,
    MenuModule,
    TabViewModule,
    SliderModule,
    StepperModule,
    IconFieldModule,
    InputIconModule,
    // Angular Material Modules
    MatStepperModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDialogTitle,
    MatDialogContent,
    MatSnackBarModule,
    // for HttpClient use:
    LoadingBarHttpClientModule,
    // Api Module,
    ApiModule.forRoot({
      rootUrl: environment.api,
    }),
  ],
  providers: [
    provideAnimationsAsync(),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Http,
      multi: true,
    },
    Helper,
    AuthHelper,
    AdminAuthGuard,
    BusinessHelper,
    UserAuthGuard,
    { provide: NZ_I18N, useValue: en_US },
    provideHttpClient(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
