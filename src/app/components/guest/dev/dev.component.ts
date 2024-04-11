import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-dev',
  templateUrl: './dev.component.html',
  styleUrl: './dev.component.css',
  standalone:true,
  imports:[ButtonModule]
})
export class DevComponent {
constructor(){}
}
