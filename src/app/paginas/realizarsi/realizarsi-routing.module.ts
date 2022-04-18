import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RealizarsiPage } from './realizarsi.page';

const routes: Routes = [
  {
    path: '',
    component: RealizarsiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RealizarsiPageRoutingModule {}
