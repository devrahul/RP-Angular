import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import { Crib} from  './../interfaces/crib'

@Injectable()
export class CribsService {

  public newCribSubject = new Subject<any>();

  constructor(private http: Http) { }

  getAllCribs() {
    return this.http.get('data/cribs.json').map(res => res.json());
  }

  getCrib(id : number) {
    return this.http.get('data/cribs.json').
    map(res => res.json().find(propertryData => propertryData.id == id))
  }

  addCrib(data) {
    data.image = 'default-crib';
    console.log( data)
    //this.newCribSubject.next(data);
  }

}
