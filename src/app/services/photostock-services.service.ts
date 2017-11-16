import { Injectable } from '@angular/core';
import { PhotoStockType} from '../model/photo-stock-type';
import { Http,Jsonp, Response } from '@angular/http';
//import { Http,Jsonp, Request, Response , Headers , RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';


@Injectable()
export class PhotostockServicesService {
  private api: string = 'http://api.bigstockphoto.com/2/883610/categories/?callback=JSONP_CALLBACK';

  constructor( private httpServices : Jsonp ) { }

  getPhotoStockCategories(){
  	const headers = new Headers();
  	//headers.append('Accept', 'application/json');
    //headers.append('Access-Control-Allow-Methods', 'GET');
    //headers.append('Access-Control-Allow-Origin', 'http://localhost:4200');
    //headers.append('Access-Control-Allow-Credentials', 'true');
    //headers.append('Access-Control-Allow-Headers', "X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding");
  	//let options = new RequestOptions( {headers : headers});
  	return this.httpServices.get( this.api )
  	.map( ( res : Response )  => res.json().data)
  	.catch( ( err : Response )  => {
  		let errorDetails = err.json().error
  		return  Observable.throw( errorDetails)});
  }


}
