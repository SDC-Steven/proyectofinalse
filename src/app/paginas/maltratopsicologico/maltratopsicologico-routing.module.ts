import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaltratopsicologicoPage } from './maltratopsicologico.page';

const routes: Routes = [
  {
    path: '',
    component: MaltratopsicologicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaltratopsicologicoPageRoutingModule {}
