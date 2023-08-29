import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyaccuntPageRoutingModule } from './myaccunt-routing.module';

import { MyaccuntPage } from './myaccunt.page';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyaccuntPageRoutingModule
  ],
  declarations: [MyaccuntPage]
})
export class MyaccuntPageModule {}
