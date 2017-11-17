import { Component, OnInit } from '@angular/core';
import { AbstractControlDirective, AbstractControl} from '@angular/forms';
import { Users} from './../interfaces/users';
import { Address} from './../interfaces/address';
import { Geo} from './../interfaces/geo';
import { NgForm , FormsModule } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  isFormSubmitted : false
  contryname : Array<any> = ['Choose Country','US','IT'];
  constructor() { }

  ngOnInit() {
  }

  doRegister (signupForm: NgForm) {
  	console.log('Successful registration');
  	console.log(signupForm);
  }

}
