import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/logged/home/home.component';
import { AuthComponent } from './pages/unlogged/auth/auth.component';
import { LoginComponent } from './pages/unlogged/auth/login/login.component';
import { RegisterComponent } from './pages/unlogged/auth/register/register.component';

const routes: Routes = [
  {
    path: 'auth',
    // component: AuthComponent
    // loadChildren: () => import('./unlogged/auth/auth.module').then(mod => mod.AuthModule),
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
    ]
  },
  {
    path: 'home',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
