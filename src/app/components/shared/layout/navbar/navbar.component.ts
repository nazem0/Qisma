import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { AsyncPipe, NgClass } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { Helper } from '../../../../services/helper';
import { AuthHelper } from '../../../../services/auth-helper';
import { Roles } from '../../../../enums/roles.enum';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  standalone: true,
  imports: [
    MenubarModule,
    ButtonModule,
    NgClass,
    AsyncPipe,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
  ]
})
export class NavbarComponent {
  @Input() collapse: boolean = false;
  navbarCollapse=true;
  links: { label: string, routerLink: string }[];
  guestLinks: { label: string, routerLink: string }[];
  adminLinks: { label: string, routerLink: string }[];
  navlinksDiv!: HTMLDivElement;
  @Input() showSidebarMenuButton: boolean = false;
  @Output() collapseChange: EventEmitter<boolean> = new EventEmitter();
  helper = Helper;
  roles = Roles;
  userLinks: MenuItem[] = []
  constructor(
    public authHelper: AuthHelper,
    private router:Router
  ) {
    this.links = [
      { label: 'Staking', routerLink: '/staking' },
      { label: 'Marketplace', routerLink: '/marketplace' },
      { label: 'About Us', routerLink: '/about-us' },
      { label: 'Learn', routerLink: '/learn' },
      { label: 'Blog', routerLink: '/blog' },
      { label: 'List Property', routerLink: 'property-actions' },
    ];
    this.guestLinks = [
      { label: 'Login', routerLink: '/login' },
      { label: 'Sign Up', routerLink: '/register' }
    ];
    this.adminLinks = [{ label: "Admin Panel", routerLink: "/admin" }]
    this.userLinks = [{ label: 'Profile', routerLink: '/profile' }]
  }
  toggleCollapse() {
    this.collapse = !this.collapse;
    this.collapseChange.emit(this.collapse);
    
  }

  toggleNavbarCollapse() {
    this.navbarCollapse = !this.navbarCollapse;
  }

  logout(){
    this.authHelper.logout();
    this.router.navigate(["login"]);
  }
}
