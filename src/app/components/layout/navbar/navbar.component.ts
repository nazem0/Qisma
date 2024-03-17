import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { AuthHelper } from '../../../services/auth-helper';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  encapsulation:ViewEncapsulation.None
})
export class NavbarComponent {
  items: MenuItem[];

  constructor() {
    this.items = [
      { label: 'Staking', routerLink: 'staking' },
      { label: 'Marketplace', routerLink: 'marketplace' },
      { label: 'About Us', routerLink: 'about-Us' },
      { label: 'Learn', routerLink: 'learn' },
      { label: 'Blog', routerLink: 'blog' },
      { label: 'List Property', routerLink: 'list-Property' },
      { label: 'Log In', routerLink: 'login' },
      { label: 'Sign Up', routerLink: 'register'}
    ];
  }
  signUp() {
    // Your sign-up logic here
  }
}
