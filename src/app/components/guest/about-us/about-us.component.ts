import { Component, OnInit } from '@angular/core';
import { AboutQismaService } from '../../../api/services';
import { AboutUsViewModel } from '../../../api/models';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
  standalone:true,

})
export class AboutUsComponent implements OnInit {
  aboutUs?: AboutUsViewModel;
  constructor(private _aboutService: AboutQismaService) {}

  ngOnInit() {
    this.getAboutData();
  }

  getAboutData() {
    this._aboutService.apiAboutQismaGetAboutUsGet$Json().subscribe({
      next: (next) => {
        this.aboutUs = next.data;
      },
    });
  }
}
