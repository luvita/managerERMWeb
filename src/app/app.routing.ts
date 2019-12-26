import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';

export const AppRoutes: Routes = [{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full',
}, {
  path: '',
  component: AdminLayoutComponent,
  children: [{
    path: 'home',
    loadChildren: './views/dashboard/dashboard.module#DashboardModule'
  }, {
    path: 'system',
    loadChildren: './views/system/apps.module#AppsModule'
  }
  , {
    path: 'console',
    loadChildren: './views/console/forms.module#FormModule'
  }
  , {
    path: 'tables',
    loadChildren: './views/support/tables.module#TablesModule'
  }, {
    path: 'space',
    loadChildren: './views/space/chartlib.module#ChartlibModule'
  }, {
    path: 'cards',
    loadChildren: './views/cards/cards.module#CardsDemoModule'
  },{
    path: 'pages',
    loadChildren: './views/custom-pages/pages.module#PagesDemoModule'
  },{
    path: 'user-pages',
    loadChildren: './views/user-pages/users.module#UsersModule'
  },{
    path: 'ecommerce',
    loadChildren: './views/ecommerce/ecommerce.module#EcommerceDemoModule'
  }]
}, {
  path: '',
  component: AuthLayoutComponent,
  children: [{
    path: 'authentication',
    loadChildren: './views/session/session.module#SessionModule'
  }]
}, {
  path: '**',
  redirectTo: 'session/404'
}];
