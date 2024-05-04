import { Routes, RouterModule } from '@angular/router';
import { AdminAuthGuard } from '../../guards/admin.guard';
import { MarketplaceComponent } from '../guest/marketplace/marketplace.component';
import { PropertyDetailsComponent } from '../guest/property-details/property-details.component';
import { UserLayoutComponent } from '../shared/user-layout/user-layout.component';
import { AdminOrdersComponent } from './admin-orders/admin-orders.component';
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
        loadComponent: () =>
          import('../guest/marketplace/marketplace.component').then(
            (m) => m.MarketplaceComponent
          ),
        title: 'Marketplace',
      },
      {
        path: 'marketplace/property-details/:id',
        component: PropertyDetailsComponent,
        title: 'Property Details',
      },
      {
        path: 'marketplace/property-images/:id',
        component: EditImagesComponent,
        title: 'Property Images',
      },
      {
        path: 'marketplace/property-actions',
        component: PropertyActionsComponent,
        title: 'Property Actions',
      },
      {
        path: 'marketplace/property-actions/:id',
        component: PropertyActionsComponent,
        title: 'Property Actions',
      },
      {
        path: 'faq',
        loadComponent: () =>
          import('../guest/faq/faq.component').then((c) => c.FaqComponent),
        title: 'FAQ',
      },
      {
        path: 'support',
        loadComponent: () =>
          import('./edit-support/edit-support.component').then(
            (c) => c.EditSupportComponent
          ),
        title: 'Support Data',
      },
    ],
    canActivate: [AdminAuthGuard],
  },
];
