import { Routes } from '@angular/router';

import { SpaceComponent}  from './space.component';

export const ChartlibRoutes: Routes = [{
  path: '',
  redirectTo: 'space',
  pathMatch: 'full',
},{
  path: '',
  children: [{
    path: 'space',
    component: SpaceComponent
  }]
}];
