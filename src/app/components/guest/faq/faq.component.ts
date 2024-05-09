import { AccordionModule } from 'primeng/accordion';
import { FaqService } from './../../../api/services/faq.service';
import { Component, OnInit, Input } from '@angular/core';
import { AuthHelper } from '../../../helpers/auth-helper';
import { Roles } from '../../../enums/roles.enum';
import { ConfirmComponent } from '../../shared/confirm/confirm.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Faq } from '../../../api/models';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { NgClass } from '@angular/common';
import { FaqActionsComponent } from '../../admin/faq-actions/faq-actions.component';
import { OrderListModule } from 'primeng/orderlist';


@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css'],
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
export class FaqComponent implements OnInit {
  faqList: Faq[] = [];
  @Input() slice = 0;
  selectedFaq? : Faq;
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

  onDrag(e:any){
    console.log(e);
    
  }
}
