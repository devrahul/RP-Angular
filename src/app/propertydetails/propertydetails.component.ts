import { Component, OnInit, Input, OnDestroy} from '@angular/core';
import { Crib } from './../interfaces/crib';
import { ActivatedRoute, Router } from '@angular/router';
import { CribsService } from './../services/cribs.service';
@Component({
  selector: 'app-propertydetails',
  templateUrl: './propertydetails.component.html',
  styleUrls: ['./propertydetails.component.css']
})
export class PropertydetailsComponent implements OnInit {

  sub : any
  propertyData: Array<Crib> = [];
  error: string = ''
  @Input('crib') crib: Crib;
  showDetails: boolean = true

  constructor( 
  	private route: ActivatedRoute,
  	private router: Router,
    private cribServices : CribsService
  	) { }

  ngOnInit() {
    this.route.params.subscribe( params => {
      let propId = Number.parseInt(params.id);
      this.getPropertyById( propId);
    })
  }

  getPropertyById(id : number){ 
    return this.cribServices.getCrib( id).
    subscribe ( 
      data => this.propertyData = data,
      error => this.error = error);

  }

  gotoPropertyList(){
  	let link = ['properties']
  	this.router.navigate(link);
  }

}
