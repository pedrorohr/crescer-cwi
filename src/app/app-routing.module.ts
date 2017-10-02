import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MembersComponent } from './members/members.component';
import { SeatingMapComponent } from './seating-map/seating-map.component';

const routes: Routes = [
  {
    path: 'members',
    component: MembersComponent
  },
  {
    path: 'seating-map',
    component: SeatingMapComponent
  },
  {
    path: '',
    redirectTo: '/members',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
