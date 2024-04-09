import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { PropertyCardComponent } from '../../../shared/property-card/property-card.component';
import { RouterModule } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home-section-2',
  templateUrl: './home-section-2.component.html',
  styleUrl: './home-section-2.component.css',
  standalone:true,
  imports:[
    ButtonModule,
    PropertyCardComponent,
    RouterModule,
    NgFor
  ]
})
export class HomeSection2Component {

}
