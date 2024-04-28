import { LayoutComponent } from './components/shared/layout/layout.component';
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component';
import { Routes } from '@angular/router';
import { UserLayoutComponent } from './components/shared/user-layout/user-layout.component';
import { UserAuthGuard } from './guards/user.guard';
import { OrderComponent } from './components/user/order/order.component';
import { UserOrdersComponent } from './components/user/user-orders/user-orders.component';
import { ProfileInfoComponent } from './components/user/profile-info/profile-info.component';
import { PortfolioComponent } from './components/user/portfolio/portfolio.component';
import { adminRoutes } from './components/admin/admin.routing';
import { guestRoutes } from './components/guest/guest.routing';
import { userRoutes } from './components/user/user.routing';

export const routes: Routes = [
  { path: 'admin', loadChildren: () => import('./components/admin/admin.routing').then(mod => mod.adminRoutes) },
  ...guestRoutes,
  ...userRoutes,
  { path: '**', component: PageNotFoundComponent },

];