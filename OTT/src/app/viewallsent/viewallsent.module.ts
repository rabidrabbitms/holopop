import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { viewallsentPageRoutingModule } from './viewallsent-routing.module';

import { viewallsentPage } from './viewallsent.page';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    viewallsentPageRoutingModule
  ],
  declarations: [viewallsentPage]
})
export class viewallsentPageModule {}
