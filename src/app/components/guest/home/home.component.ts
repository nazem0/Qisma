import { Component } from '@angular/core';
import { PropertyCardComponent } from '../../shared/property-card/property-card.component';
import { HomeSection1Component } from './home-section-1/home-section-1.component';
import { HomeSection2Component } from './home-section-2/home-section-2.component';
import { HomeSection3Component } from './home-section-3/home-section-3.component';
import { HomeSection4Component } from './home-section-4/home-section-4.component';
import { HomeSection5Component } from './home-section-5/home-section-5.component';
import { HomeSection6Component } from './home-section-6/home-section-6.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  standalone:true,
  imports:[
    HeroSectionComponent,
    HomeSection1Component,
    HomeSection2Component,
    PropertyCardComponent,
    HomeSection3Component,
    HomeSection4Component,
    HomeSection5Component,
    HomeSection6Component,
  ]
})
export class HomeComponent {
}
