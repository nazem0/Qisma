import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AsyncPipe, NgClass } from '@angular/common';
import { AuthHelper } from '../../../services/auth-helper';

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
    NgClass,
    AsyncPipe
  ]
})
export class LayoutComponent {
}
