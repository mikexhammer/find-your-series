import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsPage } from './settings.page';
import { LicencePage } from '../licence/licence.page';
import { ImpressumPage } from '../impressum/impressum.page';

const routes: Routes = [
  {
    path: '',
    component: SettingsPage,
  },
  {
    path: 'licence',
    component: LicencePage,
  },

  {
    path: 'impressum',
    component: ImpressumPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsPageRoutingModule {}
