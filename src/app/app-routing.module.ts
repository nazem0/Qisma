import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/guest/login/login.component';
import { RegisterComponent } from './components/guest/register/register.component';
import { ForgotPasswordComponent } from './components/guest/forgot-password/forgot-password.component';
import { ContactUsComponent } from './components/guest/contact-us/contact-us.component';
import { LayoutComponent } from './components/layout/layout.component';
import { UserAuthGuard } from './guards/user.guard';
import { HomeComponent } from './components/user/home/home.component';
import { ResetPasswordComponent } from './components/guest/reset-password/reset-password.component';
import { DevComponent } from './components/guest/dev/dev.component';
import { AboutUsComponent } from './components/guest/about-us/about-us.component';

const routes: Routes = [
  {path:"", redirectTo:"login", pathMatch:"full"},
  {
    path: "", component: LayoutComponent, children: [
      { path: "login", component: LoginComponent, title: "Login" },
      { path: "register", component: RegisterComponent, title: "Create Account" },
      { path: "forgot-password", component: ForgotPasswordComponent, title: "Forgot Password" },
      { path: "reset-password", component: ResetPasswordComponent, title: "Reset Password" },
      { path: "contact-us", component: ContactUsComponent, title: "Contact Us" },
      { path: "about-us", component: AboutUsComponent, title: "About Us" },
      { path: "dev", component: DevComponent, title: "Nazem" },
      {
        path: "home", children: [
          { path: "", component: HomeComponent, title: "Home" },
        ],
        // canActivate: [UserAuthGuard]
      },
      { path: '**', component: PageNotFoundComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
