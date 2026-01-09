import { Routes } from '@angular/router';
import { Home } from './home/home';
import { ElectionManuals } from './electionmanuals/electionmanuals';
import { Rti } from './rti/rti';
import { Gallery } from './gallery/gallery';
import { Contact } from './contact/contact';
import { Complaintregister } from './complaintregister/complaintregister';
import { Action } from 'rxjs/internal/scheduler/Action';
import { TakeAction } from './takeaction/takeaction';
import { AdminComponent } from './admin/admin';
import { Component } from '@angular/core';
import { Complaintasigning } from './complaintasigning/complaintasigning';
import { Viewuser } from '../../viewuser/viewuser';
import { LoginComponent } from './login/login';
import { Press } from './press/press';
import { Electiondata } from './electiondata/electiondata';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },

  {
    path: 'app',
    loadChildren: () =>
      import('./app/app-routing-module').then(m => m.AppRoutingModule)
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./about/about-routing-module').then(m => m.AboutRoutingModule)
  },
  {
    path: 'ep',
    loadChildren: () =>
      import('./ep/ep-routing-module').then(m => m.EpRoutingModule)
  },
  {
    path: 'circulars',
    loadChildren: () =>
      import('./circulars/circulars-routing-module').then(m => m.CircularsRoutingModule)
  },
  {
    path: 'electionmanuals', component: ElectionManuals
  },
  {
    path: 'rti', component: Rti
  },
  {
    path: 'gallery', component: Gallery
  },
  {
    path: 'contact', component: Contact
  },
  {
    path: 'complaintregister', component: Complaintregister
  },
  {
    path: 'takeaction', component: TakeAction
  },
  {
    path: 'admin', component: AdminComponent
  },
  {
    path: 'complaintasigning', component: Complaintasigning
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'viewuser', component: Viewuser
  },
  {
    path: 'press', component: Press

  },
  {
    path: 'electiondata', component: Electiondata
  }






];



