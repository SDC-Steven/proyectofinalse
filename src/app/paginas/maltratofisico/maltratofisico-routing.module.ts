import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaltratofisicoPage } from './maltratofisico.page';

const routes: Routes = [
  {
    path: '',
    component: MaltratofisicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaltratofisicoPageRoutingModule {}
