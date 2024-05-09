import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Faq, UpdateFaqIndexViewModel } from '../../../api/models';
import { FaqService } from '../../../api/services';
import { Roles } from '../../../enums/roles.enum';
import { AuthHelper } from '../../../helpers/auth-helper';
import { NgClass } from '@angular/common';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { OrderListModule } from 'primeng/orderlist';
import { ConfirmComponent } from '../../shared/confirm/confirm.component';
import { FaqActionsComponent } from '../faq-actions/faq-actions.component';

@Component({
  selector: 'app-faq-list-actions',
  templateUrl: './faq-list-actions.component.html',
  styleUrls: ['./faq-list-actions.component.css'],
  standalone: true,
  imports: [
    AccordionModule,
    ConfirmComponent,
    ButtonModule,
    RouterModule,
    FaqActionsComponent,
    DialogModule,
    NgClass,
    OrderListModule
  ],
})
export class FaqListActionsComponent implements OnInit {

  faqList: Faq[] = [];
  selectedFaq?: Faq;
  adminRole = Roles.Admin;
  isInAdminPanel = false;
  showCreateFaq = false;
  constructor(
    public _authHelper: AuthHelper,
    private _faqService: FaqService,
    private _route: ActivatedRoute,
  ) {
    this.isInAdminPanel = this._route.snapshot.data['isAdmin'];
  }

  ngOnInit() {
    this.getFaqList();
  }

  getFaqList() {
    this._faqService
      .apiFaqGetAllGet$Json()
      .subscribe({
        next: (next) => {
          this.faqList = next.data ?? [];
        },
      });
  }

  deleteFaq(id: number) {
    this._faqService
      .apiDashboardFaqDeleteDelete$Json({ Id: id })
      .subscribe({
        next: () => this.getFaqList(),
      });
  }

  onDrag(e: any) {
    console.log(e);

  }

  order() {
    let orderList = this.faqList.map(e => this.mapFaqToOrderFaq(e))
    this._faqService
    .apiFaqUpdateIndexPut$Json({body: orderList})
    .subscribe()

  }

  mapFaqToOrderFaq(faq: Faq):UpdateFaqIndexViewModel {
    let result : UpdateFaqIndexViewModel;
    result = {
      id:faq.id,
      number:this.faqList.indexOf(faq)
    };
    return result;
  }

}
