import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { viewallrecievePage } from './viewallrecieve.page';

const routes: Routes = [
  {
    path: '',
    component: viewallrecievePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class viewallrecievePageRoutingModule {}
