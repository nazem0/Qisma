import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css',
  standalone:true,
  imports:[MatDialogModule]
})
export class DialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: {title:string, messages:string[][],img?:string}) {}

}
