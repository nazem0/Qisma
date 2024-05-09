import { Routes } from '@angular/router';
import { UserGuard } from '../../guards/user.guard';

export const userRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../shared/layout/layout.component').then(
        (c) => c.LayoutComponent
      ),
    children: [
      {
        path: 'order/:id',
        loadComponent: () =>
          import('./order/order.component').then((c) => c.OrderComponent),
        title: 'Place Order',
      },
    ],
    canActivate: [UserGuard],
  },
  {
    path: 'profile',
    loadComponent: () =>
      import('../shared/user-layout/user-layout.component').then(
        (c) => c.UserLayoutComponent
      ),
    children: [
      { path: '', redirectTo: 'portfolio', pathMatch: 'full' },
      {
        path: 'orders',
        loadComponent: () =>
          import('./user-orders/user-orders.component').then(
            (m) => m.UserOrdersComponent
          ),
        title: 'Orders',
      },
      {
        path: 'info',
        loadComponent: () =>
          import('./profile-info/profile-info.component').then(
            (m) => m.ProfileInfoComponent
          ),
        title: 'Profile Info',
      },
      {
        path: 'portfolio',
        loadComponent: () =>
          import('./portfolio/portfolio.component').then(
            (m) => m.PortfolioComponent
          ),
        title: 'Portfolio',
      },
    ],
    canActivate: [UserGuard],
  },
];
