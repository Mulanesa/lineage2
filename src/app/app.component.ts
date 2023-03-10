import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lineage2';

  constructor(
    private router: Router
  ) { }

  hasRoute(route: string) {
    return this.router.url === route
  }
}