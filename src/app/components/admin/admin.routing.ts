import { BlogActionsComponent } from './blog-actions/blog-actions.component';
import { Routes, mapToResolve } from '@angular/router';
import { AdminAuthGuard } from '../../guards/admin.guard';
import { PropertyDetailsComponent } from '../guest/property-details/property-details.component';
import { UserLayoutComponent } from '../shared/user-layout/user-layout.component';
import { EditImagesComponent } from './edit-images/edit-images.component';
import { PropertyActionsComponent } from './property-actions/property-actions.component';

export const adminRoutes: Routes = [
  {
    path: 'admin',
    component: UserLayoutComponent,
    children: [
      { path: '', redirectTo: 'marketplace', pathMatch: 'full' },
      {
        path: 'orders',
        loadComponent: () =>
          import('./admin-orders/admin-orders.component').then(
            (m) => m.AdminOrdersComponent
          ),
        title: 'Orders',
      },
      {
        path: 'marketplace',
        children: [
          {
            path: '',
            loadComponent: () =>
              import('../guest/marketplace/marketplace.component').then(
                (m) => m.MarketplaceComponent
              ),
            title: 'Marketplace',
            resolve: {
              isAdmin: () => true,
            },
          },
          {
            path: 'property-details/:id',
            loadComponent: () =>
              import(
                '../guest/property-details/property-details.component'
              ).then((c) => c.PropertyDetailsComponent),
            title: 'Property Details',
            resolve: {
              isAdmin: () => true,
            },
          },
          {
            path: 'property-images/:id',
            loadComponent: () =>
              import(
                './edit-images/edit-images.component'
              ).then((c) => c.EditImagesComponent),
            title: 'Property Images',
          },
          {
            path: 'property-actions',
            loadComponent: () =>
              import(
                './property-actions/property-actions.component'
              ).then((c) => c.PropertyActionsComponent),
            title: 'Property Actions',
          },
          {
            path: 'property-actions/:id',
            loadComponent: () =>
              import(
                './property-actions/property-actions.component'
              ).then((c) => c.PropertyActionsComponent),
            title: 'Property Actions',
          },
        ],
      },
      {
        path: 'faq',
        loadComponent: () =>
          import('../guest/faq/faq.component').then((c) => c.FaqComponent),
        title: 'FAQ',
        resolve: {
          isAdmin: () => true,
        },
      },
      {
        path: 'support',
        loadComponent: () =>
          import('./edit-support/edit-support.component').then(
            (c) => c.EditSupportComponent
          ),
        title: 'Support Data',
      },
      {
        path: 'edit-team-members',
        loadComponent: () =>
          import('./edit-team-members/edit-team-members.component').then(
            (c) => c.EditTeamMembersComponent
          ),
        title: 'Edit Team Members',
      },
      {
        path: 'edit-managers',
        loadComponent: () =>
          import('./edit-managers/edit-managers.component').then(
            (c) => c.EditManagersComponent
          ),
        title: 'Edit Managers',
      },
      {
        path: 'edit-about-us',
        loadComponent: () =>
          import('./edit-about-us/edit-about-us.component').then(
            (c) => c.EditAboutUsComponent
          ),
        title: 'Edit About Us',
      },
      {
        path: 'blog',
        children: [
          {
            path: '',
            loadComponent: () =>
              import('../guest/blog/blog.component').then(
                (c) => c.BlogComponent
              ),
            title: 'Blog',
            resolve: {
              isAdmin: () => true,
            },
          },
          {
            path: 'details/:id',
            loadComponent: () =>
              import('../guest/blog-details/blog-details.component').then(
                (c) => c.BlogDetailsComponent
              ),
            title: 'Blog Details',
            resolve: {
              isAdmin: () => true,
            },
          },
          {
            path: 'actions',
            children:[
              {
                path:'',

                loadComponent: () =>
                  import('./blog-actions/blog-actions.component').then(
                    (c) => c.BlogActionsComponent
                  ),
                title: 'Create Blog',
              },
              {
                path:':id',

                loadComponent: () =>
                  import('./blog-actions/blog-actions.component').then(
                    (c) => c.BlogActionsComponent
                  ),
                title: 'Edit Blog',
              }
            ]
          },
        ],
      },
    ],
    canActivate: [AdminAuthGuard],
  },
];
