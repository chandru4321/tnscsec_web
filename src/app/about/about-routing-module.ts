import { NgModule } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet, Routes } from '@angular/router';
import { About1 } from "./about1/about1";
import { About2 } from "./about2/about2";
import { About3 } from "./about3/about3";
import { About4 } from "./about4/about4";
import { About5 } from "./about5/about5";

const routes: Routes = [
      { path: 'about1', component: About1 },
      { path: 'about2', component: About2 },
      { path: 'about3', component: About3 },
      { path: 'about4', component: About4 },
      { path: 'about5', component: About5 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule,RouterLink,RouterModule,RouterOutlet]
})
export class AboutRoutingModule { }
