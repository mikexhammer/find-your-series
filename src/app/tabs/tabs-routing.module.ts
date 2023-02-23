import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'serien',
        loadChildren: () =>
          import('../pages/serien/serien.module').then(
            (m) => m.SerienPageModule
          ),
      },
      {
        path: 'serien/:id',
        loadChildren: () =>
          import('../pages/serien-details/serien-details.module').then(
            (m) => m.SerienDetailsPageModule
          ),
      },
      {
        path: 'favorites',
        loadChildren: () =>
          import('../pages/favorites/favorites.module').then(
            (m) => m.FavoritesPageModule
          ),
      },
      {
        path: 'favorites/:id',
        loadChildren: () =>
          import('../pages/serien-details/serien-details.module').then(
            (m) => m.SerienDetailsPageModule
          ),
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('../pages/settings/settings.module').then(
            (m) => m.SettingsPageModule
          ),
      },
      {
        path: '',
        redirectTo: 'serien',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: 'serien',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
