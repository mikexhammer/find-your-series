import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./tabs/tabs.module').then((m) => m.TabsPageModule),
  },
  {
    path: 'favorites',
    loadChildren: () =>
      import('./pages/favorites/favorites.module').then(
        (m) => m.FavoritesPageModule
      ),
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./pages/search/search.module').then( m => m.SearchPageModule)
  },
  // {
  //   path: '',
  //   redirectTo: 'serien',
  //   pathMatch: 'full',
  // },
  // {
  //   path: 'serien',
  //   loadChildren: () =>
  //     import('./pages/serien/serien.module').then((m) => m.SerienPageModule),
  // },
  // {
  //   path: 'serien/:id',
  //   loadChildren: () =>
  //     import('./pages/serien-details/serien-details.module').then(
  //       (m) => m.SerienDetailsPageModule
  //     ),
  // },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
