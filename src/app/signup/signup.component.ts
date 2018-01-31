import { Component, OnInit } from '@angular/core';
import { AbstractControlDirective, AbstractControl} from '@angular/forms';
import { Users} from './../interfaces/users';
import { Address} from './../interfaces/address';
import { Geo} from './../interfaces/geo';
import { NgForm , FormsModule } from '@angular/forms';
import { CountryDataService} from './../services/country-data.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers : [CountryDataService]
})
export class SignupComponent implements OnInit {

  isFormSubmitted : false
  countries : Array<any>=[]
  states : Array<any> =[]
  countryData :Array<any> = []

  constructor( private countryDataServices : CountryDataService) { 
  }

  ngOnInit() {
   this._getCountries();
   this._getStates()
  }

  _getCountries(){
    return this.countryDataServices.getCountrylist().subscribe( data=> this.countries =data);
     
  }

  _getStates(){
     return this.countryDataServices.getStateList().subscribe( item => this.states = item);
  }

  selectStates( stateId : number) {
    if( stateId > 0 ) {
      return this.countryDataServices.getStatesByCountryId(stateId).subscribe(data => this.states = data);
    } 
    else {
     return this._getStates()
    }
  }

  doRegister (signupForm: NgForm) {
  	console.log('Successful registration');
  	console.log(signupForm);
  }

}
