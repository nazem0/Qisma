import { AccordionModule } from 'primeng/accordion';
import { FaqViewModel } from '../../../api/models';
import { FaqService } from './../../../api/services/faq.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css'],
  standalone:true,
  imports:[
    AccordionModule
  ]
})
export class FaqComponent implements OnInit {
  faqList: FaqViewModel[] = [];
  constructor(private _faqService: FaqService) {}

  ngOnInit() {
    this.getFaqList()
  }

  getFaqList() {
    this._faqService.apiDashboardFaqGetAllGet$Json().subscribe({
      next: (next) => {
        this.faqList = next.data??[];
      },
    });
  }
}
