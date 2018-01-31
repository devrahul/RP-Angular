import { Component, OnInit , Input} from '@angular/core';
import {Content} from './../interfaces/content'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homecontent : string;
  constructor() { 
  }

  ngOnInit() {
  	this.homecontent = "Experienced Software Engineer with a demonstrated history of working in the computer software industry. Skilled in PHP, TypeScript, Angular, and JavaScript.Currently working as technical lead role in company with approximately 8.7 Years of Experience in web development and good hands on these skill  MYSQL, Rest API , JavaScript, jQuery, LAMP, Linux,JSON, Web Services, REST, Jenkins (deployment tool), HTML5 , Bootstrap 3/4, Apache, JIRA, Use PHP Storm, NetBeans(PHPEditor), PHP, Sublime text"
  }

}
