import { Component, OnInit,Input } from '@angular/core';
import { RandomUser } from '../model/random-user.app.module';
@Component({
  selector: 'app-random-user',
  templateUrl: './random-user.component.html',
  styleUrls: ['./random-user.component.css']
})
export class RandomUserComponent implements OnInit {
	@Input('user') user
	
	constructor() { }

	ngOnInit() {

	}

}
