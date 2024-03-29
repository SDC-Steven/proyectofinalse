import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TipodemaltratoPageRoutingModule } from './tipodemaltrato-routing.module';

import { TipodemaltratoPage } from './tipodemaltrato.page';
import { ComponentesModule } from '../../componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TipodemaltratoPageRoutingModule,
    ComponentesModule
  ],
  declarations: [TipodemaltratoPage]
})
export class TipodemaltratoPageModule {}
