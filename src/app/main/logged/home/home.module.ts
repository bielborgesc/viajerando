import { DestinationsListComponent } from './destinations-list/destinations-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing';
import { MyRoadmapsComponent } from './my-roadmaps/my-roadmaps.component';


@NgModule({
  declarations: [
    HomeComponent,
    MyRoadmapsComponent,
    DestinationsListComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
  ],
  exports: [ HomeComponent ]
})
export class HomeModule { }
