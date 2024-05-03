import { DialogHelper } from './../../../helpers/dialog.service';
import { AccordionModule } from 'primeng/accordion';
import { FaqViewModel } from '../../../api/models';
import { FaqService } from './../../../api/services/faq.service';
import { Component, OnInit } from '@angular/core';
import { AuthHelper } from '../../../helpers/auth-helper';
import { Roles } from '../../../enums/roles.enum';
import { ConfirmComponent } from '../../shared/confirm/confirm.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css'],
  standalone: true,
  imports: [AccordionModule, ConfirmComponent],
})
export class FaqComponent implements OnInit {
  faqList: FaqViewModel[] = [];
  adminRole = Roles.Admin;
  isInAdminPanel=false;
  constructor(
    public _authHelper: AuthHelper,
    private _faqService: FaqService,
    private _route:ActivatedRoute
  ) {
    this.isInAdminPanel = _authHelper.isInAdminPanel(_route)
  }

  ngOnInit() {
    this.getFaqList();
  }

  getFaqList() {
    this._faqService.apiDashboardFaqGetAllGet$Json().subscribe({
      next: (next) => {
        this.faqList = next.data ?? [];
      },
    });
  }

  deleteFaq(id:number){
    this._faqService
    .apiDashboardFaqDeleteDelete$Json({Id:id})
    .subscribe({
      next:()=>this.getFaqList()
    })
  }
}
