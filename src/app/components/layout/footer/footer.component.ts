import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  navLinks:{title:string, url:string}[];
  constructor(){
    this.navLinks = [
      {title:"About Us", url:""},
      {title:"Learn", url:""},
      {title:"Blog", url:""},
      {title:"List Property", url:""},
      {title:"Privacy Policy", url:""},
      {title:"Terms of Service", url:""},
      {title:"Contact Us", url:""},
    ]
  }
}
