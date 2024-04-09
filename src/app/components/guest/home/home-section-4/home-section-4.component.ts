import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';

@Component({
  selector: 'app-home-section-4',
  templateUrl: './home-section-4.component.html',
  styleUrl: './home-section-4.component.css',
  standalone:true,
  imports:[
    FormsModule,
    RatingModule,
    ButtonModule
  ]
})
export class HomeSection4Component {
  contentSections : {rate:number, review:string, reviewer:{name:string, ref?:{title:string, url:string}, img:string}}[];
  constructor(){
   this.contentSections=[
     {
       rate:5,
       review:
       `Before the week is up I will be at $200 in rental income on Lofty.

       Can't Wait to see the compounding of this account.

       Reinvest = Magic 🎇`,
       reviewer:{
        name:"Wacky Madness",
        ref:{
          title:"@wackymadness",
          url:"https://twitter.com/wackymadness"
        },
        img:"https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg"
       },
     },
     {
      rate:3,
      review:
      `Before the week is up I will be at $200 in rental income on Lofty.

      Can't Wait to see the compounding of this account.

      Reinvest = Magic 🎇`,
      reviewer:{
       name:"Wacky Madness",
       ref:{
         title:"@wackymadness",
         url:"https://twitter.com/wackymadness"
       },
       img:"https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg"
      },
    },
    {
      rate:1,
      review:
      `Before the week is up I will be at $200 in rental income on Lofty.

      Can't Wait to see the compounding of this account.
      
      Reinvest = Magic 🎇`,
      reviewer:{
       name:"Wacky Madness",
       ref:{
         title:"@wackymadness",
         url:"https://twitter.com/wackymadness"
       },
       img:"https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg"
      },
    }
   ]
  }
}
