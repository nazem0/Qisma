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
      title:"Skip the down payment",
      description:"Acquire fractional ownership of rental properties.",
      img:"/assets/page-resources/skip-downpayment.webp"
    },
    {
      title:"Earn rent today, appreciation tomorrow",
      description:"Get daily rent payouts (not monthly or quarterly) and collect property appreciation when you cash out.",
      img:"/assets/page-resources/get-rent.webp"
    },
    {
      title:"Own multiple properties without the landlord headaches",
      description:"Diversify your portfolio without multiplying your workload. Vote on key property decisions, and professional property managers handle the rest.",
      img:"/assets/page-resources/multiple.webp"
    },
    {
      title:"Keep full control of your investments",
      description:"Forget expensive brokers and lock-in periods. Easily reinvest your rental income for the long term, or list your holdings for sale whenever you like.",
      img:"/assets/page-resources/full-control.webp"
    },
  ]
 }
}
