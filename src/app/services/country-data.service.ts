import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
@Injectable()
export class CountryDataService {
 
  constructor( private http : Http) { }

  getCountrylist(){
  	return this.http.get('data/countrylist.json').map( res => res.json());
  }

  getStateList(){
  	return this.http.get('data/statelist.json').map( res => res.json());
  }

  getStatesByCountryId( id :number) {
   return this.http.get('data/statelist.json')
   .map(res => {
   	    let data = []
   		let req = res.json().filter( item => 
   			{
   				if(item.id == id) {
    			return data.push(item)
    		}
    	})
    	if( data.length > 0 ){
    		return data;
    	} 
    	
   	});
  }

}
