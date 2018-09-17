import { Route } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Route[] = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    canActivate: [ AuthGuard ],
    component: HomeComponent
  },
  {
    path: '*',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];
