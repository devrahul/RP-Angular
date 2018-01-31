import { Component, OnInit } from '@angular/core';
import { CribsService } from './../services/cribs.service';
import { UtilService } from './../services/util.service';
import { SortByPipe } from '../pipes/sort-by.pipe';
import { Crib } from './../interfaces/crib';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crib-listing',
  templateUrl: './crib-listing.component.html',
  styleUrls: ['./crib-listing.component.css']
})
export class CribListingComponent implements OnInit {

  cribs: Array<Crib> = [];
  error: string = '';
  sortField: string = 'price';
  sortDirection: string = 'asc';
  renderCribDisplay:string = 'grid'
  sortFields: Array<string> = [
    'address',
    'area',
    'bathrooms',
    'bedrooms',
    'price',
    'type'
  ];

  constructor(
    private cribsService: CribsService,
    private utilService: UtilService,
    private router : Router,
  ) { }

  ngOnInit() {
    this.cribsService.getAllCribs()
      .subscribe(
        data => this.cribs = data,
        error => this.error = error.statusText
      );

    this.cribsService.newCribSubject.subscribe(
      data => this.cribs = [data, ...this.cribs]
    );
  }

  addMoreCrib(){
    let link = ['addprop']
    this.router.navigate(link);
  }
  renderCribs( type ) {
    this.renderCribDisplay = type
  }

}
