import { Routes } from '@angular/router';

import { SupportComponent } from './support/support.component';

export const TablesRoutes: Routes = [
  {
    path: '',
    children: [{
      path: 'fullscreen',
      component: SupportComponent
    }]
  }
];
