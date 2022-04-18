import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaltratosexualPageRoutingModule } from './maltratosexual-routing.module';

import { MaltratosexualPage } from './maltratosexual.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaltratosexualPageRoutingModule
  ],
  declarations: [MaltratosexualPage]
})
export class MaltratosexualPageModule {}
