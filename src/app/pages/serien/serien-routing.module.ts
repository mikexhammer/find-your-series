import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SerienPage } from './serien.page';

const routes: Routes = [
  {
    path: '',
    component: SerienPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SerienPageRoutingModule {}
