import { Routes } from "@angular/router";
import { UserAuthGuard } from "../../guards/user.guard";
import { UserLayoutComponent } from "../shared/user-layout/user-layout.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { ProfileInfoComponent } from "./profile-info/profile-info.component";
import { UserOrdersComponent } from "./user-orders/user-orders.component";
import { LayoutComponent } from "../shared/layout/layout.component";
import { OrderComponent } from "./order/order.component";

export const userRoutes: Routes = [
  {
    path: "", component: LayoutComponent, children: [
      { path: "order/:id", component: OrderComponent, title: "Place Order" },
    ], canActivate: [UserAuthGuard]
  },
  {
    path: "profile", component: UserLayoutComponent, children: [
      { path: "orders", component: UserOrdersComponent, title: "Orders" },
      { path: "info", component: ProfileInfoComponent, title: "Profile Info" },
      { path :"portfolio", component:PortfolioComponent, title:"Portfolio"}
    ], canActivate: [UserAuthGuard]
  }
];