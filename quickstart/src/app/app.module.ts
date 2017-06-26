import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import  { Http } from '@angular/http';
import { DjangoService } from './services/djangoService';
import {HttpModule} from '@angular/http';
import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent],
  providers:    [DjangoService, HttpModule]

})
export class AppModule { }
