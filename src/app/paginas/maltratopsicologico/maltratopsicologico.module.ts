import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaltratopsicologicoPageRoutingModule } from './maltratopsicologico-routing.module';

import { MaltratopsicologicoPage } from './maltratopsicologico.page';
import { ComponentesModule } from '../../componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaltratopsicologicoPageRoutingModule,
    ComponentesModule
  ],
  declarations: [MaltratopsicologicoPage]
})
export class MaltratopsicologicoPageModule {}
