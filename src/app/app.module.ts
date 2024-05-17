import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Tracker1Component } from './tracker1/tracker1.component';
import { Tracker2Component } from './tracker2/tracker2.component';
import { Tracker3Component } from './tracker3/tracker3.component';
import { Tracker4Component } from './tracker4/tracker4.component';
import { MatomoModule, MatomoRouterModule, provideMatomo } from 'ngx-matomo-client';
import { withRouter } from 'ngx-matomo-client';

@NgModule({
  declarations: [
    AppComponent,
    Tracker1Component,
    Tracker2Component,
    Tracker3Component,
    Tracker4Component
  ],
  imports: [
    BrowserModule,
    MatomoModule.forRoot({
        siteId:"1",
        trackerUrl:"https://diversityapps.matomo.cloud/matamo/php",
        scriptUrl:"https://cdn.matomo.cloud/diversityapps.matomo.cloud/matomo.js"
    }),
    MatomoRouterModule, 
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
