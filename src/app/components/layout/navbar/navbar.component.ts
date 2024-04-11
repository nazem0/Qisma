import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { AuthHelper } from '../../../services/auth-helper';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { AsyncPipe, NgClass } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  standalone:true,
  imports:[
    MenubarModule,
    ButtonModule,
    NgClass,
    AsyncPipe,
    MatIconModule
  ]
})
export class NavbarComponent implements AfterViewInit {
  collapse:boolean=true;
  links: {label:string, routerLink:string}[];
  guestLinks:{label:string, routerLink:string}[];
  @ViewChild("navlinks") navlinksRef!: ElementRef;
  navlinksDiv!: HTMLDivElement;
  constructor(
    public authHelper: AuthHelper,
  ) {
    this.links = [
      { label: 'Staking', routerLink: 'staking' },
      { label: 'Marketplace', routerLink: 'marketplace' },
      { label: 'About Us', routerLink: 'about-us' },
      { label: 'Learn', routerLink: 'learn' },
      { label: 'Blog', routerLink: 'blog' },
      { label: 'List Property', routerLink: 'property-actions' },
    ];
    this.guestLinks = [
      { label: 'Login', routerLink: 'login' },
      { label: 'Sign Up', routerLink: 'register' }
    ];
  }
  ngAfterViewInit(): void {
    this.navlinksDiv = this.navlinksRef.nativeElement;
    this.toggleCollapse()
  }
  signUp() {
    // Your sign-up logic here
  }
  toggleCollapse(){
    this.collapse = !this.collapse;
    let height = this.collapse ? 0 : 430;
    let margin = this.collapse ? 0 : 6;
    this.navlinksDiv.style.marginTop = `${margin}px`;
    this.navlinksDiv.style.height = `${height}px`;
  }
}
