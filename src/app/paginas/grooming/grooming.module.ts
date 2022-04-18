import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GroomingPageRoutingModule } from './grooming-routing.module';

import { GroomingPage } from './grooming.page';
import { ComponentesModule } from '../../componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GroomingPageRoutingModule,
    ComponentesModule
  ],
  declarations: [GroomingPage]
})
export class GroomingPageModule {}
