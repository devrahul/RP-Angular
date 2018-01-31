import { Pipe, PipeTransform } from '@angular/core';
import { Http} from '@angular/http';

const apiEndpoint  = 'https://randomuser.me/api/?';
@Pipe({
  name: 'limit'
})
export class LimitPipe implements PipeTransform {
	constructor( private http : Http){

	}

  transform(value: any, args?: any): any {
    if( !value) {
  		return null
  	}
  	else {
  		let apiEndpointURL =  apiEndpoint +'results='+ value;
  		return this.http.get( apiEndpointURL)
  		.map( ( res)  => res.json().results)
  	}
  }

}
