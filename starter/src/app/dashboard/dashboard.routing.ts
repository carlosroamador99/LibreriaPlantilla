import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { ListResourceComponent } from './list-resource/list-resource.component';
import { ListUserComponent } from './list-user/list-user.component';

export const DashboardRoutes: Routes = [{
  path: '',
  children: [{
    path: 'list-resource',
    component: ListResourceComponent
  }, {
    path: '',
    component: DashboardComponent,
}, {
    path: 'list-user',
    component:ListUserComponent
}]
}];
