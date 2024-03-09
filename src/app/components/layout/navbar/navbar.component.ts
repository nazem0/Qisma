import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AuthHelper } from '../../../services/auth-helper';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Input() expanded = false;
  @Output() togglerEvent: EventEmitter<boolean> = new EventEmitter(this.expanded);
  home=location.href.endsWith('/home');
  constructor(
    private _router:Router
    ){
    this._router.events.subscribe({
      next:next=>{
        if (next instanceof NavigationEnd) {
          this.home = next.url==='/home'
          
        }
      }
    })
  }
}
