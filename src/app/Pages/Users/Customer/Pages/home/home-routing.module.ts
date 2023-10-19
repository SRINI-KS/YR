import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { RCardComponent } from '../../Components/rcard/rcard.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path: 'rCard/:category',
    pathMatch:'full',
    component: RCardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
