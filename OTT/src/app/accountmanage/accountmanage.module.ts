import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccountmanagePageRoutingModule } from './accountmanage-routing.module';

import { AccountmanagePage } from './accountmanage.page';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccountmanagePageRoutingModule
  ],
  declarations: [AccountmanagePage]
})
export class AccountmanagePageModule {}
