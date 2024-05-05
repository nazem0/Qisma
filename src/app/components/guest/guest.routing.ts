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
      { path: 'login', component: LoginComponent, title: 'Login' },
      {
        path: 'register',
        component: RegisterComponent,
        title: 'Create Account',
      },
      {
        path: 'forgot-password',
        component: ForgotPasswordComponent,
        title: 'Forgot Password',
      },
      {
        path: 'reset-password',
        component: ResetPasswordComponent,
        title: 'Reset Password',
      },
      { path: 'dev', component: DevComponent, title: 'Nazem' },
      { path: 'home', component: HomeComponent, title: 'Home' },
      {
        path: 'marketplace',
        children: [
          {
            path: '',
            component: MarketplaceComponent,
            title: 'Marketplace',
          },
          {
            path: 'property-details/:id',
            component: PropertyDetailsComponent,
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
        path:"blog",
        children:[
          {
            path:"",
            loadComponent:()=>
              import('./blog/blog.component').then(c=>c.BlogComponent),
            title:"Blog"
          },
          {
            path:"details/:id",
            loadComponent:()=>
              import('./blog-details/blog-details.component').then(c=>c.BlogDetailsComponent),
            title:"Blog Details"
          }
        ]

      },

    ],
  },
];
