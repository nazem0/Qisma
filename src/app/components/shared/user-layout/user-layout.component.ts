import { NgClass, AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FooterComponent } from '../layout/footer/footer.component';
import { NavbarComponent } from '../layout/navbar/navbar.component';
import { SidebarComponent } from '../layout/sidebar/sidebar.component';
import { AuthHelper } from '../../../services/auth-helper';

@Component({
  selector: 'app-user-layout',
  templateUrl: './user-layout.component.html',
  styleUrls: ['./user-layout.component.css'],
  standalone: true,
  imports: [
    NavbarComponent,
    RouterModule,
    FooterComponent,
    SidebarComponent,
    NgClass,
    AsyncPipe
  ]
})
export class UserLayoutComponent {
  expanded = true;
  constructor(public authHelper:AuthHelper){}
  toggleExpanded() {
    console.log("Clicked");
    
    this.expanded = !this.expanded;
  }
}
