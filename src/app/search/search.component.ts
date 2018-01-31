import { Component, OnInit,OnDestroy} from '@angular/core';
import {RandomUserService} from '../services/random-user.service';
import { RandomUser } from '../model/random-user.app.module';
import { ActivatedRoute, Router} from '@angular/router'


//import { Routes, ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers : [RandomUserService]
})
export class SearchComponent implements OnInit {

	errors : string = '';
	userObject : Array<RandomUser> = [];
  loading : boolean  = false
  searchField: string;
  limitField :Array<number> = [5 ,10, 15 , 20, 25, 50,100, 150, 200, 250]
  sortField : Array<string> = ['name','postcode']
  searchFieldValue:string
  isAllowDisplayType : string = 'grid'
  req : any
  constructor( 
    private userService : RandomUserService,
    private usrroutes : ActivatedRoute,
    private router : Router,

    ) { }

  sortFields : Array<string> =['name','location', 'city']
  ngOnInit() {
    this.loading =true;
  	let obj = this.getRandomUsers();
    if(obj) {
      this.loading = false
    }
  }
  ngOnDestory() {
    this.req.unsubscribe()
  }

  addNewUser(){
    let link = ['addnewuser']
    this.router.navigate(link)
  }
  getRandomUsers(){
  	return this.userService.getAllRandomUsers()
      .subscribe(
        data => this.userObject  = data,
        error => this.errors = error
      );
  }

  searchUserBylimit( limit ) {
    return this.userService.getUserByLimit(parseInt( limit ) ).subscribe( 
      item => this.userObject = item.results)
        /*let data = []
        this.req = item.forEach( user => { 
          if( user ){
            return data.push( user )
          }
       } )
        if( data.length > 0)
        //this.userObject = data
        this.userObject = [] ;
      }*/
    }

  searchUserBy( event : any ) {
    //console.log(event)
    if(event.key =='Enter'){
      this.searchFieldValue  = event.target.value
    }
  }

  renderDisplay( type ) {
    this.isAllowDisplayType = type
  }

}
