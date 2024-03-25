import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/guest/login/login.component';

import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InputTextModule } from 'primeng/inputtext';

import { ButtonModule } from 'primeng/button';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CalendarModule } from 'primeng/calendar';
import { FileUploadModule } from 'primeng/fileupload';
import { MessagesModule } from 'primeng/messages';
import { FieldsetModule } from 'primeng/fieldset';
import { AccordionModule } from 'primeng/accordion';
import { DropdownModule } from 'primeng/dropdown';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { TreeTableModule } from 'primeng/treetable';
import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';
import { RatingModule } from 'primeng/rating';
import { ChartModule } from 'primeng/chart';
import { TabViewModule } from 'primeng/tabview';
import { CarouselModule } from 'primeng/carousel';
import { GalleriaModule } from 'primeng/galleria';
import { SliderModule } from 'primeng/slider';


import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogTitle, MatDialogContent, } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';


import { RegisterComponent } from './components/guest/register/register.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MessageService, SharedModule } from 'primeng/api';
import { Http } from './interceptors/http.interceptor';
import { ForgotPasswordComponent } from './components/guest/forgot-password/forgot-password.component';
import { AuthHelper } from './services/auth-helper';
import { ContactUsComponent } from './components/guest/contact-us/contact-us.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { LayoutComponent } from './components/layout/layout.component';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';
import { UserAuthGuard } from './guards/user.guard';
import { DialogComponent } from './components/shared/dialog/dialog.component';
import { Helper } from './services/helper';
import { PaymentComponent } from './components/guest/payment/payment.component';
import { ResetPasswordComponent } from './components/guest/reset-password/reset-password.component';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { DevComponent } from './components/guest/dev/dev.component';
import { AboutUsComponent } from './components/guest/about-us/about-us.component';
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { ConfirmComponent } from './components/shared/confirm/confirm.component';
import { HomeComponent } from './components/guest/home/home.component';
import { HeroSectionComponent } from './components/guest/home/hero-section/hero-section.component';
import { HomeSection1Component } from './components/guest/home/home-section-1/home-section-1.component';
import { PropertyCardComponent } from './components/guest/home/home-section-2/property-card/property-card.component';
import { HomeSection2Component } from './components/guest/home/home-section-2/home-section-2.component';
import { HomeSection3Component } from './components/guest/home/home-section-3/home-section-3.component';
import { HomeSection4Component } from './components/guest/home/home-section-4/home-section-4.component';
import { HomeSection5Component } from './components/guest/home/home-section-5/home-section-5.component';
import { HomeSection6Component } from './components/guest/home/home-section-6/home-section-6.component';
import { MarketplaceComponent } from './components/guest/marketplace/marketplace.component';
import { PropertyCard2Component } from './components/guest/marketplace/property-card-2/property-card-2.component';
import { PropertyDetailsComponent } from './components/guest/property-details/property-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    LayoutComponent,
    SidebarComponent,
    ContactUsComponent,
    NavbarComponent,
    LayoutComponent,
    DialogComponent,
    PaymentComponent,
    HomeComponent,
    ResetPasswordComponent,
    DevComponent,
    AboutUsComponent,
    PageNotFoundComponent,
    ConfirmComponent,
    HeroSectionComponent,
    HomeSection1Component,
    HomeSection2Component,
    PropertyCardComponent,
    HomeSection3Component,
    HomeSection4Component,
    HomeSection5Component,
    HomeSection6Component,
    FooterComponent,
    MarketplaceComponent,
    PropertyCard2Component,
    PropertyDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    //PrimeNg Modules
    CheckboxModule,
    InputTextModule,
    ButtonModule,
    InputMaskModule,
    InputNumberModule,
    RadioButtonModule,
    CalendarModule,
    FileUploadModule,
    MessagesModule,
    FieldsetModule,
    AccordionModule,
    DropdownModule,
    InputGroupModule,
    InputGroupAddonModule,
    TreeTableModule,
    MenubarModule,
    MenuModule,
    RatingModule,
    ChartModule,
    TabViewModule,
    CarouselModule,
    GalleriaModule,
    SliderModule,
    // Angular Material Modules
    MatStepperModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDialogTitle,
    MatDialogContent,
    MatSnackBarModule,
    // for HttpClient use:
    LoadingBarHttpClientModule,
  ],
  providers: [
    provideAnimationsAsync(),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Http,
      multi: true,
    },
    MessageService,
    Helper,
    AuthHelper,
    UserAuthGuard,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
