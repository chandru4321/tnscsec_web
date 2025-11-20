import { NgModule } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet, Routes } from '@angular/router';

import { App1 } from './app1/app1';
import { App2 } from './app2/app2';
import { App3 } from './app3/app3';
import { App4 } from './app4/app4';
import { App5 } from './app5/app5';
import { App6 } from './app6/app6';

const routes: Routes = [
      { path: 'app1', component: App1 },
      { path: 'app2', component: App2 },
      { path: 'app3', component: App3 },
      { path: 'app4', component: App4 },
      { path: 'app5', component: App5 },
      { path: 'app6', component: App6}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule,RouterLink,RouterModule,RouterOutlet]
})
export class AppRoutingModule { }