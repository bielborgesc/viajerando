import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './main/logged/home/home.component';

const routes: Routes = [
  {
    path: 'auth',
    // component: AuthComponent
    loadChildren: () => import('./main/unlogged/unlogged.module')
      .then(m => m.UnloggedModule),
  },
  {
    path: '',
    // component: HomeComponent,
    loadChildren: () => import('./main/logged/home/home.module')
      .then(m => m.HomeModule),
  },
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
