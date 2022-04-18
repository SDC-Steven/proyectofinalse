import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RealizarsiPageRoutingModule } from './realizarsi-routing.module';

import { RealizarsiPage } from './realizarsi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RealizarsiPageRoutingModule
  ],
  declarations: [RealizarsiPage]
})
export class RealizarsiPageModule {}
