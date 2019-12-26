import { Routes } from '@angular/router';

import { ConsoleCardComponent } from './console-card/console-card.component';

export const FormRoutes: Routes = [
  {
    path: '',
    children: [{
      path: 'gen-key',
      component: ConsoleCardComponent
    }]
  }
];
