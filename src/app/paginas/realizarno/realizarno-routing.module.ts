import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RealizarnoPage } from './realizarno.page';

const routes: Routes = [
  {
    path: '',
    component: RealizarnoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RealizarnoPageRoutingModule {}
