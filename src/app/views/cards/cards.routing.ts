import { Routes } from '@angular/router';

import { BasicCardComponent } from './basic/basic-card.component';
import { ModernCardComponent } from './modern/modern-card.component';

export const CardsRoutes: Routes = [{
  path: '',
  redirectTo: 'basic',
  pathMatch: 'full',
},{
  path: '',
  children: [{
    path: 'basic',
    component: BasicCardComponent
  }, {
    path: 'modern',
    component: ModernCardComponent
  }]
}];
