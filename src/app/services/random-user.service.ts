import { Injectable } from '@angular/core';
import { Http,Response} from '@angular/http'
import {Observable} from 'rxjs/Observable';
import { RandomUser } from '../model/random-user.app.module';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

const apiEndpoint  = 'https://randomuser.me/api/?';
@Injectable()
export class RandomUserService {
	private accessLimit  :number = 10;
	//private apiEndpointURL = apiEndpoint +'results='+ this.accessLimit;

  constructor( private rndUserServices : Http) { }
  
  getAllRandomUsers() {
    let apiEndpointURL =  apiEndpoint +'results='+ this.accessLimit;
  	return this.rndUserServices.get( apiEndpointURL)
          .map( ( res : Response )  => res.json().results)
  	      .catch( ( err : Response )  => {
  		    let errorDetails = err.json()
  		    return  Observable.throw( errorDetails)});
  }

  getUserByLimit( limit :any ) {
    let apiEndpointURL =  apiEndpoint +'results='+ limit;
    return this.rndUserServices.get( apiEndpointURL)
        .map( res => res.json() )
        .catch( ( err : Response )  => {
        let errorDetails = err.json()
        return  Observable.throw( errorDetails)});
  }

}
