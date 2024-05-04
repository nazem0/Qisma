import { Component, Input, OnInit } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { AboutQismaService } from '../../../../api/services';
import { SupportViewModel } from '../../../../api/models';

@Component({
  selector: 'app-support-dialog',
  templateUrl: './support-dialog.component.html',
  styleUrls: ['./support-dialog.component.css'],
  standalone:true,
  imports:[
    DialogModule
  ]
})
export class SupportDialogComponent implements OnInit {
  @Input() visible=false;
  support? : SupportViewModel;
  constructor(
    private _aboutQismaService:AboutQismaService
  ) { }

  ngOnInit() {
    this.getSupportData();
  }

  getSupportData(){
    this._aboutQismaService
    .apiAboutQismaGetSupportGet$Json()
    .subscribe({
      next:next=>{
        this.support = next.data
      }
    })
  }
}
