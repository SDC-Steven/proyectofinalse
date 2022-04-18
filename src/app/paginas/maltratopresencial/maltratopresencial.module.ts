import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaltratopresencialPageRoutingModule } from './maltratopresencial-routing.module';

import { MaltratopresencialPage } from './maltratopresencial.page';
import { ComponentesModule } from '../../componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaltratopresencialPageRoutingModule,
    ComponentesModule
  ],
  declarations: [MaltratopresencialPage]
})
export class MaltratopresencialPageModule {}
