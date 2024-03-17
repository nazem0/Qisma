import { Component, ViewEncapsulation } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  encapsulation:ViewEncapsulation.None
})
export class AppComponent {
  title = 'Lofty';
  constructor(
    public messageService: MessageService
  ) {
    this.subscribeToMessageObserver();
  }
  subscribeToMessageObserver() {
    this.messageService.messageObserver.subscribe()
  }

}
