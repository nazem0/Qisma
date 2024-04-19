import { AccordionModule } from 'primeng/accordion';
import { Component, EventEmitter, Input, Output, ViewEncapsulation, output } from '@angular/core';
import {  Router, RouterModule } from '@angular/router';
import { AsyncPipe, NgIf } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { MatDividerModule } from '@angular/material/divider';
import { TooltipModule } from 'primeng/tooltip';
import { AuthHelper } from '../../../../services/auth-helper';
import { Helper } from '../../../../services/helper';
import { Roles } from '../../../../enums/roles.enum';

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
    MatDividerModule,
    TooltipModule
  ]
})
export class SidebarComponent {
  links : {title:string, url:string, iconClass:string}[]=[];
  @Input() collapse:boolean = false;
  @Output() collapseChange=new EventEmitter<boolean>();
  helper=Helper;
  constructor(
    public _authHelper: AuthHelper,
    private _router: Router,
  ) {

    if(_authHelper.hasRole(Roles.Admin)){
      this.links.push(...[{
        title:"Properties",
        url:"marketplace",
        iconClass:"pi-home"
      },
      {
        title:"Orders",
        url:"orders",
        iconClass:"pi-money-bill"
      }]);
    }
    if(_authHelper.hasRole(Roles.Customer))
    {
      this.links.push(...[
        {
          title:"Properties",
          url:"/marketplace",
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
      ])

    }
    
  }
  toggleCollapse(){
    if(this.collapse == false){
      this.collapse = !this.collapse;
      this.collapseChange.emit(this.collapse)
    }
  }
  login() {
    this._router.navigate(["/login"])
  }
  logout() {
    this._authHelper.logout();
  }
}