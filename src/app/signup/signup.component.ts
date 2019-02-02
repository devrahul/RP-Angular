import { Component, OnInit } from '@angular/core';
import { ICountryData, IStateData } from './../model/country-data-type';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';
import { DataService } from './../services/country-data.service';
import { Router, Route } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-psignup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  RegForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  isFormSubmitted: false;
  countries: ICountryData[];
  states: IStateData[];
  countryData: Observable<ICountryData[]>;
  default = 'IN';
  constructor(
    private _ds: DataService,
    private rt: Router,
    private _fb: FormBuilder
  ) {


  }

  ngOnInit() {
    this.RegForm = this._fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      password: [''],
      country: ['', Validators.required],
      state: ['', Validators.required],
      subscribe: ['']

    });
    this.RegForm.controls['country'].setValue(this.default, {onlySelf: true});
    this.countryData = this._getCountries();
    this._getStates();
  }

  _getCountries() {
    return this._ds.getCountrylist();
  }

  _getStates() {
    return this._ds.getStateList().subscribe(states => {
      this.states =  states;
    });
  }

  selectStates(code: number | string) {
    if (code ) {
      return this._ds.getStatesByCountryId(code)
        .subscribe(data => this.states = data);
    } else {
      return this._getStates();
    }
  }

  doRegister( signupForm ) {
    const data = localStorage.setItem(
      'ObjData',
      JSON.stringify(signupForm.value)
    );
    console.log('Successful registration');
    this.rt.navigateByUrl('/thankyou');
    console.log(signupForm);
  }
}
