import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { AvatarModule } from 'primeng/avatar';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss'],
  standalone:true,
  imports:[ButtonModule, DialogModule, AvatarModule],
})
export class ConfirmComponent {
  @Input() label:string="";
  @Input() severity:string="primary"
  @Input() title:string=""
  @Input() description:string=""
  @Output() confirmation = new EventEmitter<boolean>();
  constructor() {
  }
  visible: boolean = false;

  showDialog() {
      this.visible = true;
  }
}
