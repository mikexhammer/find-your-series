import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  // },
  {
    path: '',
    redirectTo: 'serien',
    pathMatch: 'full',
  },
  {
    path: 'serien',
    loadChildren: () =>
      import('./pages/serien/serien.module').then((m) => m.SerienPageModule),
  },
  {
    path: 'serien-details',
    loadChildren: () =>
      import('./pages/serien-details/serien-details.module').then(
        (m) => m.SerienDetailsPageModule
      ),
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
