import { Component, OnInit } from '@angular/core';
import { PostService} from './../services/posts/post.service';
import { Post } from './../interfaces/post';

@Component({
  moduleId: module.id,
  selector: 'app-articles',
  templateUrl: 'articles.component.html',
  styleUrls: ['articles.component.css']
})
export class ArticlesComponent implements OnInit {

  posts: Array<Post> = [];
  error: string = '';
  showDetails : boolean = false; 
  constructor( private postservices : PostService) { }

  ngOnInit() {
  	this.postservices.getAllPosts()
      .subscribe(
        data => this.posts = data,
        error => this.error = error.statusText
      );
  }

}
