import { Component, ViewEncapsulation } from '@angular/core';
import { AuthHelper } from '../../../services/auth-helper';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  encapsulation:ViewEncapsulation.None
})
export class NavbarComponent {
  items: MenuItem[];

  constructor(
    private authHelper:AuthHelper
  ) {
    this.items = [
      { label: 'Staking', routerLink: 'staking' },
      { label: 'Marketplace', routerLink: 'marketplace' },
      { label: 'About Us', routerLink: 'about-us' },
      { label: 'Learn', routerLink: 'learn' },
      { label: 'Blog', routerLink: 'blog' },
      { label: 'List Property', routerLink: 'property-actions' },
    ];
    if(!authHelper.isLoggedIn){
      this.items.push(
        { label: 'Login', routerLink: 'login' },
        { label: 'Sign Up', routerLink: 'register'}
    )
    }
    else{
      this.items.push({label:authHelper.getUserName()!, routerLink:""})
      if(authHelper.hasRole("Admin")){
        this.items.push({label:"Admin Panel", routerLink:"/admin/marketplace"})
      }
    }
  }
  signUp() {
    // Your sign-up logic here
  }
}
