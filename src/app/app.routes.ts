import { LayoutComponent } from './components/shared/layout/layout.component';
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component';
import { Routes } from '@angular/router';
import { LoginComponent } from './components/guest/login/login.component';
import { RegisterComponent } from './components/guest/register/register.component';
import { ForgotPasswordComponent } from './components/guest/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/guest/reset-password/reset-password.component';
import { DevComponent } from './components/guest/dev/dev.component';
import { HomeComponent } from './components/guest/home/home.component';
import { MarketplaceComponent } from './components/guest/marketplace/marketplace.component';
import { PropertyDetailsComponent } from './components/guest/property-details/property-details.component';
import { PropertyActionsComponent } from './components/admin/property-actions/property-actions.component';
import { EditImagesComponent } from './components/admin/edit-images/edit-images.component';
import { AdminAuthGuard } from './guards/admin.guard';
import { UserLayoutComponent } from './components/shared/user-layout/user-layout.component';
import { UserAuthGuard } from './guards/user.guard';

export const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  {
    path: "admin", component: UserLayoutComponent, children: [
      { path: "marketplace", component: MarketplaceComponent, title: "Marketplace" },
      { path: "marketplace/property-details/:id", component: PropertyDetailsComponent, title: "Property Details" },
      { path: "marketplace/property-images/:id", component: EditImagesComponent, title: "Property Images" },
      { path: "marketplace/property-actions", component: PropertyActionsComponent, title: "Property Actions" },
      { path: "marketplace/property-actions/:id", component: PropertyActionsComponent, title: "Property Actions" },
    ], canActivate: [AdminAuthGuard]
  },
  {
    path: "profile", component: UserLayoutComponent, children: [
      { path: "marketplace", component: MarketplaceComponent, title: "Marketplace" },
      { path: "marketplace/property-details/:id", component: PropertyDetailsComponent, title: "Property Details" },
    ], canActivate: [UserAuthGuard]
  },
  {
    path: "", component: LayoutComponent, children: [
      { path: "login", component: LoginComponent, title: "Login" },
      { path: "register", component: RegisterComponent, title: "Create Account" },
      { path: "forgot-password", component: ForgotPasswordComponent, title: "Forgot Password" },
      { path: "reset-password", component: ResetPasswordComponent, title: "Reset Password" },
      { path: "dev", component: DevComponent, title: "Nazem" },
      { path: "home", component: HomeComponent, title: "Home" },
      { path: "marketplace", component: MarketplaceComponent, title: "Marketplace" },
      { path: "marketplace/property-details/:id", component: PropertyDetailsComponent, title: "Property Details" },
    ]
  },
  { path: '**', component: PageNotFoundComponent }

];