import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaltratofisicoPageRoutingModule } from './maltratofisico-routing.module';

import { MaltratofisicoPage } from './maltratofisico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaltratofisicoPageRoutingModule
  ],
  declarations: [MaltratofisicoPage]
})
export class MaltratofisicoPageModule {}
