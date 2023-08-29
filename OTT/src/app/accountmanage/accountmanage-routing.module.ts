import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountmanagePage } from './accountmanage.page';

const routes: Routes = [
  {
    path: '',
    component: AccountmanagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountmanagePageRoutingModule {}
