import { NgModule } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet, Routes } from '@angular/router';
import { Ep1 } from './ep1/ep1';
import { Ep2 } from './ep2/ep2';
import { Ep3 } from './ep3/ep3';
import { Ep4 } from './ep4/ep4';
import { Ep5 } from './ep5/ep5';
import { Ep6 } from './ep6/ep6';
import { Ep7 } from './ep7/ep7';



const routes: Routes = [
      { path: 'ep1', component: Ep1 },
      { path: 'ep2', component: Ep2 },
      { path: 'ep3', component: Ep3 },
      { path: 'ep4', component: Ep4 },
      { path: 'ep5', component: Ep5 },
      { path: 'ep6', component: Ep6},
      { path: 'ep7', component: Ep7}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule,RouterLink,RouterModule,RouterOutlet]
})
export class EpRoutingModule { }