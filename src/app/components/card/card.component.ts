import {Component, OnInit, Input} from '@angular/core';

@Component({selector: 'cmc-card', templateUrl: './card.component.html', styleUrls: ['./card.component.css']})
export class CardComponent {

  @Input() post = {
    "id": "",
    "user": {
      "id": "",
      "full_name": "",
      "profile_picture": "",
      "username": ""
    },
    "images": {
      "thumbnail": {
        "width": 150,
        "height": 150,
        "url": ""
      },
      "low_resolution": {
        "width": 320,
        "height": 320,
        "url": ""
      },
      "standard_resolution": {
        "width": 640,
        "height": 640,
        "url": ""
      }
    },
    "created_time": "",
    "caption": {
      "id": "",
      "text": "",
      "created_time": "",
      "from": {}
    },
    "user_has_liked": false,
    "likes": {
      "count": 0
    },
    "tags": [],
    "filter": "",
    "comments": {
      "count": 0
    },
    "type": "video",
    "link": "",
    "location": null,
    "attribution": null,
    "users_in_photo": [],
    "videos": {
      "standard_resolution": {
        "width": 640,
        "height": 640,
        "url": "",
        "id": ""
      },
      "low_bandwidth": {
        "width": 480,
        "height": 480,
        "url": "",
        "id": ""
      },
      "low_resolution": {
        "width": 480,
        "height": 480,
        "url": "",
        "id": ""
      }
    }
  };

  //uri = 'https://picsum.photos/300?' + Math.random();

}