import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tracker1Component } from './tracker1/tracker1.component';
import { Tracker2Component } from './tracker2/tracker2.component';
import { Tracker3Component } from './tracker3/tracker3.component';
import { Tracker4Component } from './tracker4/tracker4.component';

export const routes: Routes = [
  {
      path:'tracker1', component:Tracker1Component,pathMatch:'full'
  },
  {
      path:'tracker2', component:Tracker2Component,pathMatch:'full'
  },
  {
      path:'tracker3', component:Tracker3Component,pathMatch:'full'
  },
  {
      path:'tracker4', component:Tracker4Component,pathMatch:'full'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
