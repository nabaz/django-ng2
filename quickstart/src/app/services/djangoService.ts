import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { PostComponent } from '../components/posts/post.component'
@Injectable()
export class DjangoService {
    private apiUrl = 'http://localhost:7002/api/posts/?format=json'
    constructor(private http: Http) {}
    getPost() {
        return this.http.get(this.apiUrl)
            .map(response => response.json())
            .catch(this.handleError)
    }

    createPost(data: PostComponent) {
        let headers = new Headers({'Content-Type' : 'application/json'});
        let options = new RequestOptions({ headers: headers });
        let body = JSON.stringify(data);
        return this.http.post('http://localhost:7002/api/posts/', body, options).map((res: Response) => res.json());
    }
    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
