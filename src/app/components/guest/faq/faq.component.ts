import { AccordionModule } from 'primeng/accordion';
import { FaqService } from './../../../api/services/faq.service';
import { Component, OnInit } from '@angular/core';
import { AuthHelper } from '../../../helpers/auth-helper';
import { Roles } from '../../../enums/roles.enum';
import { ConfirmComponent } from '../../shared/confirm/confirm.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Faq } from '../../../api/models';
import { ButtonModule } from 'primeng/button';
import { CreateFaqComponent } from '../../admin/create-faq/create-faq.component';
import { DialogModule } from 'primeng/dialog';

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
    CreateFaqComponent,
    DialogModule
  ],
})
export class FaqComponent implements OnInit {
  faqList: Faq[] = [];
  adminRole = Roles.Admin;
  isInAdminPanel = false;
  showCreateFaq = false;
  constructor(
    public _authHelper: AuthHelper,
    private _faqService: FaqService,
    private _route: ActivatedRoute,
  ) {
    this.isInAdminPanel = _authHelper.isInAdminPanel(this._route);
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
}
