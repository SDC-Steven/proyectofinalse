import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RealizarnoPageRoutingModule } from './realizarno-routing.module';

import { RealizarnoPage } from './realizarno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RealizarnoPageRoutingModule
  ],
  declarations: [RealizarnoPage]
})
export class RealizarnoPageModule {}
