import { Component } from '@angular/core';

@Component({
  selector: 'app-home-section-3',
  templateUrl: './home-section-3.component.html',
  styleUrl: './home-section-3.component.css',
  standalone:true,
})
export class HomeSection3Component {
 contentSections : {title:string, description:string, img:string}[];
 constructor(){
  this.contentSections=[
    {
      title:"Breaking Down Barriers",
      description:"Share-based ownership. Lower down-payments. Affordable installments.",
      img:"/assets/page-resources/home-section-3-icons/breaking-down-barriers.png"
    },
    {
      title:"High Liquidity",
      description:"Seamless trading of shares on our platform. Easy to buy & sell.",
      img:"/assets/page-resources/home-section-3-icons/high-liquidity.svg"
    },
    {
      title:"Passive Income",
      description:"Hassle free property management. Improve your asset performance.",
      img:"/assets/page-resources/home-section-3-icons/passive-income.png"
    },
    {
      title:"Diversified Portfolio",
      description:"Spread investment among different assets.",
      img:"/assets/page-resources/home-section-3-icons/diversified-portfolio.svg"
    },
  ]
 }
}
