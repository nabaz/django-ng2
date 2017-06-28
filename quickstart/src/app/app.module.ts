import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import  { Http } from '@angular/http';
import { DjangoService } from './services/djangoService';
import {HttpModule} from '@angular/http';
import { AppComponent }  from './app.component';
import { PostComponent }  from './components/posts/post.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routing } from './app.routes';

@NgModule({
imports: [ 
      BrowserModule, 
      HttpModule,  
      BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      routing
  ],
  declarations: [ AppComponent, PostComponent ],
  bootstrap:    [ AppComponent],
  providers:    [ DjangoService, HttpModule ]

})
export class AppModule { }
