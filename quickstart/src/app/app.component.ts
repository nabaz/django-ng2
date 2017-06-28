import { Component, OnInit } from '@angular/core';
import { DjangoService } from './services/djangoService';
import {Http} from '@angular/http';
import 'rxjs/Rx';

@Component({
  selector: 'my-app',
  template: `<ul>
	    <li *ngFor="let post of result"><a href="{{post.url}}">{{post.title}}</a></li>
	  </ul>
  <router-outlet></router-outlet>`,
  providers: [DjangoService]
})

export class AppComponent { 
  result: string;
  title: string;
  constructor(http: Http, private _dj: DjangoService){
    this._dj.getPost()
    .subscribe(result => {
        this.result = result
    });
  }
  
 }
