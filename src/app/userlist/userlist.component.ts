import { Component, OnInit } from '@angular/core';
import { UserService } from './../services/users/user.service';
import { Users} from './../interfaces/users';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  moduleId : module.id,
  selector: 'app-userlist',
  templateUrl: 'userlist.component.html',
  styleUrls: ['userlist.component.css'],
  providers : [UserService]
})
export class UserlistComponent implements OnInit {
	users: Array<Users> = []
	errors : string = ''
  constructor( 
    private userservices : UserService,
    private route : ActivatedRoute, private router : Router) { }

  ngOnInit() {
  	this.userservices.getAllUsers().subscribe(
  		data => this.users = data,
  		error => this.errors = error
  	); 
  }

  getUserDetails( id ) {
    this.route.params
    let link = ['users']
    this.router.navigate(link, id);

  }

}
