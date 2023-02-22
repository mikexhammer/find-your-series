import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SerienDetailsPage } from './serien-details.page';

const routes: Routes = [
  {
    path: '',
    component: SerienDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SerienDetailsPageRoutingModule {}
