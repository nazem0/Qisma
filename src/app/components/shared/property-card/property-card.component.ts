import { Component, Input } from '@angular/core';
import { PropertyViewModelInListView } from '../../../api/models';
import { Helper } from '../../../helpers/helper';
import { PercentPipe } from '@angular/common';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrl: './property-card.component.css',
  standalone:true,
  imports:[PercentPipe]
})
export class PropertyCardComponent {
  @Input({required:true}) property!:PropertyViewModelInListView;
  appHelper = Helper;
  constructor(){}
}