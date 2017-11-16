import { Injectable } from '@angular/core';
import { Http , Request, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/map";
import 'rxjs/add/operator/catch';
import "rxjs/add/observable/throw";

@Injectable()
export class UserService {
  constructor( private http : Http) {
 }

  getAllUsers(){
  	return this.http.get( 'https://jsonplaceholder.typicode.com/users/')
  	.map( res => res.json())
  	.catch((err:Response) => {
            let details = err.json();
            return Observable.throw(new Error(details));
         });
  }

}
