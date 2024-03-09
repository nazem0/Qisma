import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppConfirmComponent } from './app-confirm.component';
import { Observable } from 'rxjs';

type Icons = 'warning' | 'delete' | 'publish';
type OkColors = 'primary' | 'danger' | 'success' | 'info' | 'dark' | 'warning';

@Injectable({
  providedIn: 'root'
})
export class AppConfirmService {

  constructor(private dialog: MatDialog) { }

  confirm(title: string, message: string) {
    return this.dialog.open(AppConfirmComponent, { data: { title, message } }).afterClosed() as Observable<boolean>;
  }
}

