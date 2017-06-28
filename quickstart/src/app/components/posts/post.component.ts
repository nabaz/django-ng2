import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Http } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { DjangoService } from '../../services/djangoService';
import 'rxjs/RX';

@Component({
    selector: 'posts',
    template: `
    <ul>
  	    <li *ngFor="let post of result"><a href="{{post.url}}">{{post.title}}</a></li>
  	  </ul>
        <form [formGroup]="addNewForm">
          <input formControlName="title" placeholder="add title">
          <input formControlName="body" placeholder="add body">
          <input (click)="add()" type="submit" value="add new">
        </form>
        `,
})

export class PostComponent {
    title: FormControl;
    body: FormControl;
	  addNewForm: FormGroup;

    constructor(private dj:DjangoService, private fb:FormBuilder) {

    }
    ngOnInit() {
        this.addNewForm = new FormGroup({
            title : new FormControl('Todd motto'),
            body : new FormControl('England, Uk')
        })
    }

    add() {
        let data = this.addNewForm.value
        this.dj.createPost(data).subscribe(
          data => {
            this.dj.getPost();
            return true;
          },
          error => {
            console.error("Error Saving Data");
            return Observable.throw(error)
          }
        )
    }



}
