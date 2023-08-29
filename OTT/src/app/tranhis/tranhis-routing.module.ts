import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TranhisPage } from './tranhis.page';

const routes: Routes = [
  {
    path: '',
    component: TranhisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TranhisPageRoutingModule {}
