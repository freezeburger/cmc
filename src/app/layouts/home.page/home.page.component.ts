import {Component, OnInit} from '@angular/core';
import {InstagramService} from '../../services/instagram.service';

@Component({selector: 'cmc-home-page', templateUrl: './home.page.component.html', styleUrls: ['./home.page.component.css']})
export class HomePageComponent implements OnInit {

  isLoggedIn : boolean;
  loginURL : string;
  medias;

  constructor(private instaFeed : InstagramService) {

    this.isLoggedIn = this.instaFeed.isLoggedIn;
    this.loginURL = this.instaFeed.URLs.auth;
  }

  ngOnInit() {
    this
      .instaFeed
      .medias
      .subscribe(res => {
        this.medias = res
        console.log(JSON.stringify(this.medias[0]))
      })
    
  }

}
