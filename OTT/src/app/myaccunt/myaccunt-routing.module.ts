import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyaccuntPage } from './myaccunt.page';

const routes: Routes = [
  {
    path: '',
    component: MyaccuntPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyaccuntPageRoutingModule {}
