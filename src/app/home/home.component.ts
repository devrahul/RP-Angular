import { Component, OnInit , Input} from '@angular/core';
import {Content} from './../interfaces/content'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input( 'homecontent') homecontent : Content
  constructor() { }

  ngOnInit() {
  }

}
