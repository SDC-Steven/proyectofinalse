import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RealizarPageRoutingModule } from './realizar-routing.module';

import { RealizarPage } from './realizar.page';
import { ComponentesModule } from '../../componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RealizarPageRoutingModule,
    ComponentesModule
  ],
  declarations: [RealizarPage]
})
export class RealizarPageModule {}
