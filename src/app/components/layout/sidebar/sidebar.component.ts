import { AuthHelper } from './../../../services/auth-helper';
import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  role: string = ""
  sportId: number = 0
  @Output() clicked = new EventEmitter();
  constructor(
    public _authHelper: AuthHelper,
    private _router: Router,
    private _route: ActivatedRoute,
  ) {
    this._authHelper.$roleObservable.subscribe({
      next: next => this.role = next
    })
    this.role = this._authHelper.getRole()
    
  }

  login() {
    this._router.navigate(["login"])
  }
  logout() {
    this._authHelper.logout();
  }
  requiredLoop(tab:number){
  }
}