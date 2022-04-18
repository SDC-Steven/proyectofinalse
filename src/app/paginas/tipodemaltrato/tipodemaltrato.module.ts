import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TipodemaltratoPageRoutingModule } from './tipodemaltrato-routing.module';

import { TipodemaltratoPage } from './tipodemaltrato.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TipodemaltratoPageRoutingModule
  ],
  declarations: [TipodemaltratoPage]
})
export class TipodemaltratoPageModule {}
