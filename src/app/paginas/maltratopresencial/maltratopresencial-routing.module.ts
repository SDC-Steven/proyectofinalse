import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaltratopresencialPage } from './maltratopresencial.page';

const routes: Routes = [
  {
    path: '',
    component: MaltratopresencialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaltratopresencialPageRoutingModule {}
