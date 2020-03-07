import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';     // Add this
import { AboutComponent } from './about/about.component';  // Add this
import { ContactusComponent} from './contactus/contactus.component'; 
import {MymapComponent} from './mymap/mymap.component';
import {TestComponent} from './test/test.component';
import {BinlevelComponent} from './binlevel/binlevel.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
 
  {
    path: 'contactus',
    component: ContactusComponent
  },
  {
    path: 'mymap',
    component: MymapComponent
  },
  {
     path: 'test',
     component: TestComponent
  },
  {
    path: 'binlevel',
    component: BinlevelComponent
 }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
