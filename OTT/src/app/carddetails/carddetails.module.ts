import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardDetailsRoutingModule } from './carddetails-routing.module';

import { CardDetailsPage } from './carddetails.page';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardDetailsRoutingModule
  ],
  declarations: [CardDetailsPage]
})
export class CardDetailsPageModule {}
