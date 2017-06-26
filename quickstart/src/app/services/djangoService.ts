import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class DjangoService {
    private apiUrl = 'http://localhost:7002/api/posts/?format=json'
    constructor(private http: Http) {}
    getPost() {
        return this.http.get(this.apiUrl)
            .map(response => response.json())
            .catch(this.handleError)
    }

    createPost() {
        
    }
    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}

