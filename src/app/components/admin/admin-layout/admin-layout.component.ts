import { Component } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { NgClass } from '@angular/common';
import { AuthHelper } from '../../../services/auth-helper';
import { AdminNavbarComponent } from './navbar/admin-navbar.component';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.css',
  standalone:true,
  imports:[
    SidebarComponent,
    AdminNavbarComponent,
    RouterModule,
    NgClass
  ]
})
export class AdminLayoutComponent {
  expanded = true;
  home=location.href.endsWith('/home');
  constructor(
    private _authHelper:AuthHelper,
    private _router:Router
  ){
    this._authHelper.isLoggedIn.subscribe({
      next:next=>this.expanded = next
    })

    this._router.events.subscribe({
      next:next=>{
        if (next instanceof NavigationEnd) {
          this.home = next.url==='/home'
          
        }
      }
    })
    
  }
}
