import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComponentsModule } from  '../_components/components.module';
import { HomePage } from './home.page';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    NgCircleProgressModule.forRoot({
      radius: 100,
      outerStrokeWidth: 10,
      innerStrokeWidth: 5,
      outerStrokeColor: "#bbcefb",
      animationDuration: 300,
      innerStrokeColor: '#ffffff'
    })
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
