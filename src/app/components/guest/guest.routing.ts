import { Routes } from '@angular/router';
import { LayoutComponent } from '../shared/layout/layout.component';
import { DevComponent } from './dev/dev.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { PropertyDetailsComponent } from './property-details/property-details.component';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

export const guestRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'login',
        loadComponent: () =>
          import('./login/login.component').then((c) => c.LoginComponent),
        title: 'Login',
      },
      {
        path: 'register',
        loadComponent: () =>
          import('./register/register.component').then(
            (c) => c.RegisterComponent
          ),
        title: 'Create Account',
      },
      {
        path: 'forgot-password',
        loadComponent: () =>
          import('./forgot-password/forgot-password.component').then(
            (c) => c.ForgotPasswordComponent
          ),
        title: 'Forgot Password',
      },
      {
        path: 'reset-password',
        loadComponent: () =>
          import('./reset-password/reset-password.component').then(
            (c) => c.ResetPasswordComponent
          ),
        title: 'Reset Password',
      },
      {
        path: 'dev',
        loadComponent: () =>
          import('./dev/dev.component').then((c) => c.DevComponent),
        title: 'Nazem',
      },
      {
        path: 'home',
        loadComponent: () =>
          import('./home/home.component').then((c) => c.HomeComponent),
        title: 'Home',
      },
      {
        path: 'marketplace',
        children: [
          {
            path: '',
            loadComponent: () =>
              import('./marketplace/marketplace.component').then(
                (c) => c.MarketplaceComponent
              ),
            title: 'Marketplace',
          },
          {
            path: 'property-details/:id',
            loadComponent: () =>
              import('./property-details/property-details.component').then(
                (c) => c.PropertyDetailsComponent
              ),
            title: 'Property Details',
          },
        ],
      },
      {
        path: 'faq',
        loadComponent: () =>
          import('./faq/faq.component').then((c) => c.FaqComponent),
        title: 'FAQ',
      },
      {
        path: 'about-us',
        loadComponent: () =>
          import('./about-us/about-us.component').then(
            (c) => c.AboutUsComponent
          ),
        title: 'About Us',
      },
      {
        path: 'blog',
        children: [
          {
            path: '',
            loadComponent: () =>
              import('./blog/blog.component').then((c) => c.BlogComponent),
            title: 'Blog',
          },
          {
            path: 'details/:id',
            loadComponent: () =>
              import('./blog-details/blog-details.component').then(
                (c) => c.BlogDetailsComponent
              ),
            title: 'Blog Details',
          },
        ],
      },
    ],
  },
];
