import { Component } from '@angular/core';
import { AuthHelper } from '../../services/auth-helper';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  expanded = false;
  home=location.href.endsWith('/home');
  constructor(
    private _authHelper:AuthHelper,
    private _router:Router
  ){
    this._authHelper.isLoggedIn.subscribe({
      next:next=>this.expanded = next
    })

    this._router.events.subscribe({
      next:next=>{
        if (next instanceof NavigationEnd) {
          this.home = next.url==='/home'
          
        }
      }
    })
    
  }
}
