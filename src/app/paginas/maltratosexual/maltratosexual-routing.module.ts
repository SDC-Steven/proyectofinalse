import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaltratosexualPage } from './maltratosexual.page';

const routes: Routes = [
  {
    path: '',
    component: MaltratosexualPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaltratosexualPageRoutingModule {}
