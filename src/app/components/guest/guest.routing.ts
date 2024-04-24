import { Routes } from "@angular/router";
import { LayoutComponent } from "../shared/layout/layout.component";
import { DevComponent } from "./dev/dev.component";
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { MarketplaceComponent } from "./marketplace/marketplace.component";
import { PropertyDetailsComponent } from "./property-details/property-details.component";
import { RegisterComponent } from "./register/register.component";
import { ResetPasswordComponent } from "./reset-password/reset-password.component";

export const guestRoutes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
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
  }
];