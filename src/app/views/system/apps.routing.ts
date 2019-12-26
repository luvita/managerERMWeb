import { Routes } from '@angular/router';

import { SystemComponent } from './system.component';

export const AppsRoutes: Routes = [{
  path: '',
  children: [{
    path: 'space',
    component: SystemComponent
  }]
}];
