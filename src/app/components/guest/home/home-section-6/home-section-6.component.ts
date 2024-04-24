import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-section-6',
  templateUrl: './home-section-6.component.html',
  styleUrl: './home-section-6.component.css',
  standalone:true,
  imports:[RouterModule]
})
export class HomeSection6Component {
  content: { title: string, content:{title:string, url:string}[] }[];
  constructor() {
    this.content = [
      { title: "Qisma Performance Report", content: [{title:"Read the Report arrow",url:""}] },
      { title: "FAQ", content: 
      [
        {title:"How Qisma Works",url:""},
        {title:"How to Buy Qisma Properties",url:""},
        {title:"How to Conduct Due Diligence",url:""},
        {title:"How Qisma Makes Money",url:""},
      ] },
      { title: "Topics", content: [
        {title:"Real Estate Investing 101",url:""},
        {title:"Qisma News",url:""},
        {title:"Investment Markets",url:""},
      ] },
    ]
  }
}
