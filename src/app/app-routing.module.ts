import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./tabs/tabs.module').then((m) => m.TabsPageModule),
  },
  {
    path: 'flights',
    loadChildren: () => {
      return loadRemoteModule({
        type: 'module',
        remoteEntry: 'https://mfe1.z20.web.core.windows.net/remoteEntry.js',
        exposedModule: './Tab1PageModule'
      })
      .then(m => m.Tab1PageModule) }
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}



  // DO NOT insert routes after this one.
  // { path:'**', ...} needs to be the LAST one.
