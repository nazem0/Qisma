import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { AuthHelper } from '../../../services/auth-helper';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { AsyncPipe, NgClass } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Helper } from '../../../services/helper';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

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
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
  ]
})
export class NavbarComponent implements AfterViewInit {
  collapse:boolean=false;
  links: {label:string, routerLink:string}[];
  guestLinks:{label:string, routerLink:string}[];
  @ViewChild("navlinks") navlinksRef!: ElementRef;
  navlinksDiv!: HTMLDivElement;

  @Input() expanded = false;
  @Output() togglerEvent: EventEmitter<boolean> = new EventEmitter(this.expanded);
  helper=Helper;

  userLinks:MenuItem[]=[]
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
    this.userLinks= [
      { label: 'Profile', routerLink: 'profile' },
      { label: 'Logout', command:()=>this.authHelper.logout() },
    ]
    if(this.authHelper.hasRole("Admin")){
      this.userLinks.push({label:'Admin Panel', routerLink:'/admin/marketplace'})
    }
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
    if(!this.collapse){
      this.navlinksDiv.classList.add("expanded");
    }else{
      this.navlinksDiv.classList.remove("expanded");
    }
  }
}
