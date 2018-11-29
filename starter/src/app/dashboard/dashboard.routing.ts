import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { ListResourceComponent } from './list-resource/list-resource.component';
import { ListUserComponent } from './list-user/list-user.component';
import { ListFilmComponent } from './list-film/list-film.component';
import { ListBookComponent } from './list-book/list-book.component';
import { ProfileComponent } from './profile/profile.component';
import { ListMagazineComponent } from './list-magazine/list-magazine.component';

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
}, {
  path: 'list-film',
  component:ListFilmComponent
}, {
  path: 'list-book',
  component:ListBookComponent
}, {
  path: 'profile',
  component:ProfileComponent
}, {
  path: 'list-magazine',
  component:ListMagazineComponent
},]
}];
