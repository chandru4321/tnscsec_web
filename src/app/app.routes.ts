import { Routes } from '@angular/router';
import { Home } from './home/home';
import { ElectionManuals } from './electionmanuals/electionmanuals';
import { Rti } from './rti/rti';
import { Gallery } from './gallery/gallery';
import { Contact } from './contact/contact';
import { Complaintregister } from './complaintregister/complaintregister';
import { Admin } from './admin/admin';
import { Action } from 'rxjs/internal/scheduler/Action';
import { TakeAction } from './takeaction/takeaction';

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
    path:'electionmanuals',component:ElectionManuals},
    {
        path:'rti' ,component:Rti
    },
  {
    path:'gallery', component:Gallery
  },
  {
    path:'contact', component:Contact
  },
  {
    path:'complaintregister', component:Complaintregister
  }, 
  {
    path:'takeaction', component:TakeAction
  },
  {
  path:'admin' ,component:Admin
  },

  
  




  
];



