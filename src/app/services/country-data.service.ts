import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { ICountryData, IStateData } from './../model/country-data-type';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private _http: HttpClient) {}

  getCountrylist() {
    // http://services.groupkt.com/country/get/all
    return this._http.get<ICountryData[]>('data/countrylist.json').pipe(map(resp => resp));
  }

  getStateList() {
    return this._http.get<IStateData[]>('data/statelist.json').pipe(map(resp => resp));
  }

  getStatesByCountryId( code: number | string) {
    return this.getStateList().pipe(
      map(res => {
        return res.filter(state => state.code === code );
        })
      );
  }
}
