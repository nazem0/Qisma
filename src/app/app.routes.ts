import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component';
import { Routes } from '@angular/router';
import { LoginComponent } from './components/guest/login/login.component';
import { RegisterComponent } from './components/guest/register/register.component';
import { ForgotPasswordComponent } from './components/guest/forgot-password/forgot-password.component';
import { LayoutComponent } from './components/layout/layout.component';
import { ResetPasswordComponent } from './components/guest/reset-password/reset-password.component';
import { DevComponent } from './components/guest/dev/dev.component';
import { HomeComponent } from './components/guest/home/home.component';
import { MarketplaceComponent } from './components/guest/marketplace/marketplace.component';
import { PropertyDetailsComponent } from './components/guest/property-details/property-details.component';
import { PropertyActionsComponent } from './components/admin/property-actions/property-actions.component';
import { EditImagesComponent } from './components/admin/edit-images/edit-images.component';
import { AdminAuthGuard } from './guards/admin.guard';
import { MarketplacePropertiesPaginationComponent } from './components/guest/marketplace/marketplace-properties-pagination/marketplace-properties-pagination.component';

export const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  {
    path: "admin", component: LayoutComponent, children: [
      { path: "marketplace/property-images/:id", component: EditImagesComponent, title: "Property Images" },
      { path: "marketplace/property-actions", component: PropertyActionsComponent, title: "Property Actions" },
      { path: "marketplace/property-actions/:id", component: PropertyActionsComponent, title: "Property Actions" },
    ], canActivate: [AdminAuthGuard]
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
      { path: '**', component: PageNotFoundComponent }
    ]
  },

];