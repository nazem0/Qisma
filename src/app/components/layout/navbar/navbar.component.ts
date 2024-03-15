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
      { label: 'Staking', routerLink: 'Staking', routerLinkActiveOptions:{class:'text-danger'} },
      { label: 'Marketplace', routerLink: 'Marketplace', routerLinkActiveOptions:{class:'text-danger'} },
      { label: 'About Us', routerLink: 'About-Us', routerLinkActiveOptions:{class:'text-danger'} },
      { label: 'Learn', routerLink: 'Learn', routerLinkActiveOptions:{class:'text-danger'} },
      { label: 'Blog', routerLink: 'Blog', routerLinkActiveOptions:{class:'text-danger'} },
      { label: 'List Property', routerLink: 'List-Property', routerLinkActiveOptions:{class:'text-danger'} },
      { label: 'Log In', routerLink: 'Log-In', routerLinkActiveOptions:{class:'text-danger'} },
      { label: 'Sign Up', styleClass: 'signup-button', command: () => this.signUp(), routerLinkActiveOptions:{class:'text-danger'} }
    ];
  }
  signUp() {
    // Your sign-up logic here
  }
}
