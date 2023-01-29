import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'test',
    component: NotFoundComponent
  },{
    path: 'flights',
    loadChildren: () => {
      return loadRemoteModule({
        type: 'module',
        remoteEntry: 'https://mfe1.z20.web.core.windows.net/remoteEntry.js',
        exposedModule: './Tab1PageModule'
      })
      .then(m => m.Tab1PageModule) }
  }, {
    path: '**',
    component: NotFoundComponent
  }
];
  // DO NOT insert routes after this one.
  // { path:'**', ...} needs to be the LAST one.