import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TranhisPageRoutingModule } from './tranhis-routing.module';

import { TranhisPage } from './tranhis.page';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranhisPageRoutingModule
  ],
  declarations: [TranhisPage]
})
export class TranhisPageModule {}
