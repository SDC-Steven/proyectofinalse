import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TipodemaltratoPage } from './tipodemaltrato.page';

const routes: Routes = [
  {
    path: '',
    component: TipodemaltratoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TipodemaltratoPageRoutingModule {}
