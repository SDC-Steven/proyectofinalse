import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CiberbullyingPageRoutingModule } from './ciberbullying-routing.module';

import { CiberbullyingPage } from './ciberbullying.page';
import { ComponentesModule } from '../../componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CiberbullyingPageRoutingModule,
    ComponentesModule
  ],
  declarations: [CiberbullyingPage]
})
export class CiberbullyingPageModule {}
