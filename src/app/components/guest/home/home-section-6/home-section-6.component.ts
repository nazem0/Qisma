import { Component } from '@angular/core';

@Component({
  selector: 'app-home-section-6',
  templateUrl: './home-section-6.component.html',
  styleUrl: './home-section-6.component.css',
  standalone:true,
})
export class HomeSection6Component {
  content: { title: string, content:{title:string, url:string}[] }[];
  constructor() {
    this.content = [
      { title: "Lofty Performance Report", content: [{title:"Read the Report arrow",url:""}] },
      { title: "FAQ", content: 
      [
        {title:"How Lofty Works",url:""},
        {title:"How to Buy Lofty Properties",url:""},
        {title:"How to Conduct Due Diligence",url:""},
        {title:"How Lofty Makes Money",url:""},
      ] },
      { title: "Topics", content: [
        {title:"Real Estate Investing 101",url:""},
        {title:"Lofty News",url:""},
        {title:"Investment Markets",url:""},
      ] },
    ]
  }
}
