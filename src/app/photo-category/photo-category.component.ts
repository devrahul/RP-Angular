import { Component,  OnInit, Input } from '@angular/core';
import { PhotoStockType } from '../model/photo-stock-type';
import { PhotostockComponent } from './../photostock/photostock.component';

@Component({
  selector: 'app-photo-category',
  templateUrl: './photo-category.component.html',
  styleUrls: ['./photo-category.component.css']
})
export class PhotoCategoryComponent implements OnInit {

  @Input('categories') categories : PhotoStockType;
  @Input('errors') errors
  apiRoot :string = '';
  constructor() {}

  ngOnInit() {
  	this.apiRoot = 'http://api.bigstockphoto.com/2/883610/search/';
  }  
}
