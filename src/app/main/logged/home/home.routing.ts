import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { MyRoadmapsComponent } from './my-roadmaps/my-roadmaps.component';
import { DestinationsListComponent } from './destinations-list/destinations-list.component';

const childrens = [
  {
    path: 'lista-destinos',
    component: DestinationsListComponent
  },
  {
    path: 'meus-roteiros',
    component: MyRoadmapsComponent
  }
]

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: childrens
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
