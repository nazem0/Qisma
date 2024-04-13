import { Component } from '@angular/core';
import { AuthHelper } from '../../services/auth-helper';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
  standalone: true,
  imports: [
    NavbarComponent,
    RouterModule,
    FooterComponent,
    SidebarComponent,
    NgClass
  ]
})
export class LayoutComponent {

  expanded = true;
  toggleExpanded() {
    console.log("Clicked");
    
    this.expanded = !this.expanded;
  }
}
