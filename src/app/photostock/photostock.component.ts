import { Component, OnInit } from '@angular/core';
import { PhotoStockType} from '../model/photo-stock-type';
import { Routes, ActivatedRoute, Router} from '@angular/router'
import { PhotostockServicesService } from '../services/photostock-services.service';


@Component({
  selector: 'app-photostock',
  templateUrl: './photostock.component.html',
  styleUrls: ['./photostock.component.css'],
  providers : [PhotostockServicesService]
})
export class PhotostockComponent implements OnInit {
  error : string = '';
  categoryData : Array<PhotoStockType> = [];
  apiRoot :string ='http://api.bigstockphoto.com/2/883610/search/';
  constructor( 
  	private photostockService: PhotostockServicesService,
  	private routeParams : ActivatedRoute,
  	private routerNavigation : Router,
  	) {

   }

  ngOnInit( ) {
  	this.getPhotoStockCategoryData();
  	this.routeParams.params.subscribe( params => {
  		let category= params.category;
  		this.setPhotoStockCategoryUrl(category);
  		let apiURL = `${this.apiRoot}`;
  		this.apiRoot = apiURL;
  	});
  	 
  }

  setPhotoStockCategoryUrl( category : string ) {
  	let apiURL = `${this.apiRoot}?category=${category}&callback=JSONP_CALLBACK`;
  	//this.apiRoot = apiURL;
  }

  getPhotoStockCategoryData() {
  	return this.photostockService.getPhotoStockCategories()
  	.subscribe( 
  		data => this.categoryData = data,
  		error => this.error = error
  		);
  }

}
