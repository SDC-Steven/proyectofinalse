import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CiberbullyingPage } from './ciberbullying.page';

const routes: Routes = [
  {
    path: '',
    component: CiberbullyingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CiberbullyingPageRoutingModule {}
