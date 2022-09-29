import { ReactiveFormsModule } from '@angular/forms';
import { DestinationsListComponent } from './destinations-list/destinations-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing';
import { MyRoadmapsComponent } from './my-roadmaps/my-roadmaps.component';
import { NewRoadmapComponent } from './new-roadmap/new-roadmap.component';


@NgModule({
  declarations: [
    HomeComponent,
    MyRoadmapsComponent,
    DestinationsListComponent,
    NewRoadmapComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule
  ],
  exports: [ HomeComponent ]
})
export class HomeModule { }
