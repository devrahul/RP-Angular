import { by } from 'protractor';
import { Component, OnInit, Input } from '@angular/core';
import { Post } from './../interfaces/post';
import { ShortTitleService } from './../services/short-title.service';

@Component({
  moduleId : module.id,
  selector: 'app-post',
  templateUrl: 'post.component.html',
  styleUrls: ['post.component.css']
})
export class PostComponent implements OnInit {
	@Input( 'post') post : Post
	@Input('error') error : Object
	showDetails : boolean = true 

  constructor( private title : ShortTitleService ) { }

  ngOnInit() {
  }

}
