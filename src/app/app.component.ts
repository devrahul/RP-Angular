import { Component, AfterViewInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd,
NavigationCancel } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  loading: boolean;
  constructor( private route: Router) { }

  ngAfterViewInit(): void {
    this.route.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.loading = true;
      } else if (event instanceof NavigationCancel
        || event instanceof NavigationEnd) {
        this.loading = false;
      }
    });
  }

}

