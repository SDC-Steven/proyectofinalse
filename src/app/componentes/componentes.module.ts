import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderReturnComponent } from '../header-return/header-return.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [HeaderReturnComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[
    HeaderReturnComponent
  ]
})
export class ComponentesModule { }
