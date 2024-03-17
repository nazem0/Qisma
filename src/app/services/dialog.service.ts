import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../components/shared/dialog/dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog:MatDialog) {}
  open(title:string, messages:string[][],img?:string) {
    this.dialog.open(DialogComponent, {
      data: {
        title: title,
        messages: messages,
        img:img
      }
    })
  }
}
