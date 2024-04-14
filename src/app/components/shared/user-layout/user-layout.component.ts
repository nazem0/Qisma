import { NgClass, AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
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
  collapse = false;
  constructor(public authHelper:AuthHelper){}
  toggleCollapse() {    
    this.collapse = !this.collapse;
  }
}
