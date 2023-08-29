import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewofferPage } from './viewoffer.page';

const routes: Routes = [
  {
    path: '',
    component: ViewofferPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewofferPageRoutingModule {}
