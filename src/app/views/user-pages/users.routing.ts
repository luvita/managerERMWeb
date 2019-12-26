import { Routes } from '@angular/router';

import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserListComponent } from './user-list/userlist.component';

export const UsersRoutes: Routes = [{
  path: '',
  redirectTo: 'basic-cards',
  pathMatch: 'full',
},{
  path: '',
  children: [{
    path: 'userprofile',
    component: UserProfileComponent
  }, {
    path: 'userlist',
    component: UserListComponent
  }]
}];
