import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isNotRoot: boolean;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    router.events.subscribe((val) => {
      if (this.router.url == "/" || this.router.url == '/login') {
        this.isNotRoot = false;
      } else {
        this.isNotRoot = true;
      }
    });
  }
}
