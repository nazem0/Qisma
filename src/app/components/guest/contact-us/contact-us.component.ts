import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
  content:contentItem[]=[
    {
      title:"Phone Number",
      content:["+201066611700"],
      href:"tel:",
      type:"phone"
    },
    {
      title:"Email",
      content:["kmousad@identityeg.com","sabouhussein@identityeg.com","agresh@identityeg.com"],
      href:"mailto:",
      type:"email"
    }
  ]
}

interface contentItem{
  title:string;
  content:string[];
  href:string;
  type:string
}