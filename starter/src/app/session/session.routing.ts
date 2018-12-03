import { Routes } from '@angular/router';

import { NotFoundComponent } from './not-found/not-found.component';
import { ErrorComponent } from './error/error.component';
import { ForgotComponent } from './forgot/forgot.component';
import { LockscreenComponent } from './lockscreen/lockscreen.component';
import { SigninComponent } from './signin/signin.component';
import { CambiarpassComponent } from './cambiarpass/cambiarpass.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';

export const SessionRoutes: Routes = [
  {
    path: '',
    children: [{
      path: '404',
      component: NotFoundComponent
    }, {
      path: 'error',
      component: ErrorComponent
    }, {
      path: 'forgot',
      component: ForgotComponent
    }, {
      path: 'lockscreen',
      component: LockscreenComponent
    }, {
      path: 'login',
      component: SigninComponent
    }, {
      path: 'login',
      component: SigninComponent
    }, {
      path: 'changepass',
      component: CambiarpassComponent
    }, {
      path: 'updateuser',
      component: UpdateuserComponent
    }]
  }
];
