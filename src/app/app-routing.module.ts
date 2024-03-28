import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/guest/login/login.component';
import { RegisterComponent } from './components/guest/register/register.component';
import { ForgotPasswordComponent } from './components/guest/forgot-password/forgot-password.component';
import { ContactUsComponent } from './components/guest/contact-us/contact-us.component';
import { LayoutComponent } from './components/layout/layout.component';
import { UserAuthGuard } from './guards/user.guard';
import { ResetPasswordComponent } from './components/guest/reset-password/reset-password.component';
import { DevComponent } from './components/guest/dev/dev.component';
import { AboutUsComponent } from './components/guest/about-us/about-us.component';
import { HomeComponent } from './components/guest/home/home.component';
import { MarketplaceComponent } from './components/guest/marketplace/marketplace.component';
import { PropertyDetailsComponent } from './components/guest/property-details/property-details.component';
import { PropertyActionsComponent } from './components/admin/property-actions/property-actions.component';
import { EditImagesComponent } from './components/admin/edit-images/edit-images.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  {
    path: "", component: LayoutComponent, children: [
      // { path: "login", component: LoginComponent, title: "Login" },
      // { path: "register", component: RegisterComponent, title: "Create Account" },
      // { path: "forgot-password", component: ForgotPasswordComponent, title: "Forgot Password" },
      // { path: "reset-password", component: ResetPasswordComponent, title: "Reset Password" },
      // { path: "contact-us", component: ContactUsComponent, title: "Contact Us" },
      // { path: "about-us", component: AboutUsComponent, title: "About Us" },
      { path: "dev", component: DevComponent, title: "Nazem" },
      { path: "home", component: HomeComponent, title: "Home" },
      { path: "marketplace", component: MarketplaceComponent, title: "Marketplace" },
      { path: "property-details/:id", component: PropertyDetailsComponent, title: "Property Details" },
      { path:"property-actions", component:PropertyActionsComponent, title:"Property Actions"},
      { path:"property-actions/:id", component:PropertyActionsComponent, title:"Property Actions"},
      { path:"property-images/:id", component:EditImagesComponent, title:"Property Images"},
      { path: '**', component: PageNotFoundComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: "enabled" })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
