import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component';
import { Routes } from '@angular/router';
import { adminRoutes } from './components/admin/admin.routing';
import { guestRoutes } from './components/guest/guest.routing';
import { userRoutes } from './components/user/user.routing';

export const routes: Routes = [
  ...guestRoutes,
  ...userRoutes,
  ...adminRoutes,
  {
    path: '**',
    loadComponent: () =>
      import(
        './components/shared/page-not-found/page-not-found.component'
      ).then((c) => c.PageNotFoundComponent),
    title: 'Not Found',
  },
];
