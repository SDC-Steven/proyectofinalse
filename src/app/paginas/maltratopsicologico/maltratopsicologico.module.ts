import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaltratopsicologicoPageRoutingModule } from './maltratopsicologico-routing.module';

import { MaltratopsicologicoPage } from './maltratopsicologico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaltratopsicologicoPageRoutingModule
  ],
  declarations: [MaltratopsicologicoPage]
})
export class MaltratopsicologicoPageModule {}
