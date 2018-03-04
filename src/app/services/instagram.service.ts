import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router, ActivatedRoute} from '@angular/router';

import 'rxjs/add/operator/map'
import {Observable} from 'rxjs/Observable';

const 
  CLIENT_ID = '6b6332e4a7734deca3e99ac9baa51d7c',
  REDIRECT_URI = 'http://localhost:4200',
  USER_ID = 'groulite';

let ACCESS_TOKEN = '',
  JSON_CALLBACK = '';

@Injectable()
export class InstagramService {

  public get isLoggedIn() {
    return ACCESS_TOKEN !== '';
  }

  URLs = {
    auth: `https://api.instagram.com/oauth/authorize/?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=token`,
    user: 'https://api.instagram.com/v1/users/self/?access_token=',
    medias: `https://api.instagram.com/v1/users/self/media/recent?count=1000&access_token=`
  }

  constructor(private xhr : HttpClient, private route : ActivatedRoute, private router : Router) {

    this
      .route
      .fragment
      .subscribe((fragment : string = '') => {
        if (fragment) {
          ACCESS_TOKEN = fragment.replace('access_token=', '');
        }
      });

  }

  public get medias() {
    
    if(!this.isLoggedIn) { return <any>[]; } 
      
      return new Observable( observer => 
        this
          .xhr
          .get(this.URLs.medias + ACCESS_TOKEN)
          .subscribe(
            res => {
            observer.next(res['data']);
            observer.complete();
            }
        ));
  }
}