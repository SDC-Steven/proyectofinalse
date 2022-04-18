import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaltratosexualPageRoutingModule } from './maltratosexual-routing.module';

import { MaltratosexualPage } from './maltratosexual.page';
import { ComponentesModule } from '../../componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaltratosexualPageRoutingModule,
    ComponentesModule
  ],
  declarations: [MaltratosexualPage]
})
export class MaltratosexualPageModule {}
