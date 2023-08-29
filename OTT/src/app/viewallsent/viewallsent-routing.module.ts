import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { viewallsentPage } from './viewallsent.page';

const routes: Routes = [
  {
    path: '',
    component: viewallsentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class viewallsentPageRoutingModule {}
