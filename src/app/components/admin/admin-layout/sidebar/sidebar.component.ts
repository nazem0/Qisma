import { AccordionModule } from 'primeng/accordion';
import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AuthHelper } from '../../../../services/auth-helper';
import { AsyncPipe, NgIf } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { MatDividerModule } from '@angular/material/divider';
import { Helper } from '../../../../services/helper';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
  standalone:true,
  imports:[
    NgIf,
    RouterModule,
    AccordionModule,
    AsyncPipe,
    ButtonModule,
    MatDividerModule
  ]
})
export class SidebarComponent {
  roles: string[] = []
  links : {title:string, url:string, iconClass:string}[];
  helper=Helper;
  constructor(
    public _authHelper: AuthHelper,
    private _router: Router,
    private _route: ActivatedRoute,
  ) {
    this._authHelper.$roleObservable.subscribe({
      next: next => this.roles = next
    })
    this.roles = this._authHelper.getRoles()
    this.links=[
      {
        title:"Properties",
        url:"marketplace",
        iconClass:"pi-home"
      },
      {
        title:"Wallet",
        url:"wallet",
        iconClass:"pi-wallet"
      },
      {
        title:"Portofolio",
        url:"portofolio",
        iconClass:"pi-th-large"
      },
      {
        title:"Rewards",
        url:"rewards",
        iconClass:"pi-star"
      },
      {
        title:"Cart",
        url:"cart",
        iconClass:"pi-cart-plus"
      }
    ]
  }

  login() {
    this._router.navigate(["login"])
  }
  logout() {
    this._authHelper.logout();
  }
  requiredLoop(tab:number){
    // return this.tournamentTypes.filter(e=>e.sports.includes(tab)).map(e=>e.types)
  }
}