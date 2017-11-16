import { Component, OnInit , ViewChild } from '@angular/core';
import { NgForm, FormsModule , AbstractControlDirective} from '@angular/forms';
@Component({
  moduleId: module.id,
  selector: 'app-signin',
  templateUrl: 'signin.component.html',
  styleUrls: ['signin.component.css']
})
export class SigninComponent implements OnInit {

  @ViewChild('loginForm')
  loginForm = NgForm;

  constructor() { }

  ngOnInit() {
  }

  doLogin (data) {
  	console.log('Successful Loggedi');
  	console.log(data);
  }
  resetForm( ){
  	console.log(this.loginForm );
  }
 
}
