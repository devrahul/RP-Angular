import { Injectable } from '@angular/core';
//import {Post } from './../interfaces/post';
import {Http , Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

//import 'rxjs/add/operator/toPromise';
@Injectable()
export class PostService {

  constructor( private http : Http) { }

  getAllPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts/')
    .map(res => res.json())
    .catch((err:Response) => {
            let details = err.json();
            return Observable.throw(new Error(details));
         });
  }


}
