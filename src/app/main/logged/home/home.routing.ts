import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { MyRoadmapsComponent } from './my-roadmaps/my-roadmaps.component';
import { DestinationsListComponent } from './destinations-list/destinations-list.component';
import { AuthGuard } from 'src/app/core/auth/AuthGuard';
import { NewRoadmapComponent } from './new-roadmap/new-roadmap.component';

const childrens = [
  {
    path: 'lista-destinos',
    component: DestinationsListComponent
  },
  {
    path: 'meus-roteiros',
    component: MyRoadmapsComponent
  },
  {
    path: 'novo-roteiro',
    component: NewRoadmapComponent
  },
  { path: '**', redirectTo: 'lista-destinos'}
]

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    // canActivateChild: [ AuthGuard ],
    children: childrens
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
