import { Component, OnInit, inject } from '@angular/core';

import { MatomoTracker } from 'ngx-matomo-client';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'mymatamo';
  private readonly tracker = inject(MatomoTracker);

  constructor(){

  }
  ngOnInit(): void {
    this.tracker.trackPageView();

    // With custom page title
    this.tracker.trackPageView('App Component');
  }
}
