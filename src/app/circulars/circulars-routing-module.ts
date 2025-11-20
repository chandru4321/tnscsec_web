import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ep1 } from '../ep/ep1/ep1';
import { C1 } from './c1/c1';
import { C2 } from './c2/c2';
import { C3 } from './c3/c3';
import { C4 } from './c4/c4';
import { C5 } from './c5/c5';
import { C6 } from './c6/c6';
import { C7 } from './c7/c7';
import { C8 } from './c8/c8';
import { C9 } from './c9/c9';
import { C10 } from './c10/c10';
import { C11 } from './c11/c11';

const routes: Routes = [
  {
    path:'c1', component:C1},
    { path: 'c2', component: C2 },
          { path: 'c3', component: C3 },
          { path: 'c4', component: C4 },
          { path: 'c5', component: C5 },
          { path: 'c6', component: C6 },
          { path: 'c7', component: C7},
          { path: 'c8', component: C8 },
                { path: 'c9', component: C9 },
                { path: 'c10', component: C10 },
                { path: 'c11', component: C11 },
                

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CircularsRoutingModule { }
