import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { viewallrecievePageRoutingModule } from './viewallrecieve-routing.module';

import { viewallrecievePage } from './viewallrecieve.page';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    viewallrecievePageRoutingModule
  ],
  declarations: [viewallrecievePage]
})
export class viewallrecievePageModule {}
