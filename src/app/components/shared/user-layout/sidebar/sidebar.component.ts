import { AccordionModule } from 'primeng/accordion';
import { Component, EventEmitter, Input, Output, ViewEncapsulation, output } from '@angular/core';
import {  Router, RouterModule } from '@angular/router';
import { AsyncPipe, NgClass, NgIf } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { AuthHelper } from '../../../../helpers/auth-helper';
import { Helper } from '../../../../helpers/helper';
import { Roles } from '../../../../enums/roles.enum';
import { DividerModule } from 'primeng/divider';

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
    TooltipModule,
    NgClass,
    DividerModule
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
      },
      {
        title:"FAQ",
        url:"faq",
        iconClass:"pi-question-circle"
      },
      {
        title:"Blog",
        url:"blog",
        iconClass:"pi-comments"
      },
      {
        title:"Managers",
        url:"edit-managers",
        iconClass:"pi-users"
      },
      {
        title:"Team Members",
        url:"edit-team-members",
        iconClass:"pi-users"
      },
      {
        title:"Support",
        url:"support",
        iconClass:"pi-info-circle"
      },
      {
        title:"About Us",
        url:"edit-about-us",
        iconClass:"pi-at"
      },
    ]);
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
          title:"Portfolio",
          url:"portfolio",
          iconClass:"pi-th-large"
        },
        {
          title:"Rewards",
          url:"rewards",
          iconClass:"pi-star"
        },
        {
          title:"Orders",
          url:"orders",
          iconClass:"pi-cart-plus"
        },
        {
          title:"Profile",
          url:"info",
          iconClass:"pi-user"
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
    this.login()
  }
}
