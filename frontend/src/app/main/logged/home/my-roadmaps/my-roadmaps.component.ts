import { RoadmapService } from './../../../../core/services/roadmap.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-roadmaps',
  templateUrl: './my-roadmaps.component.html',
  styleUrls: ['./my-roadmaps.component.scss']
})
export class MyRoadmapsComponent implements OnInit {

  arrRoadmap: any = [];

  constructor(
    private roadmapService: RoadmapService,
  ) { }

  ngOnInit(): void {
    let idUser = localStorage.getItem("idUser");
    this.roadmapService.getRoadmapById(idUser).subscribe(
      res => {
        const user: any = res;
        console.log(user)
        this.arrRoadmap = user.roadMaps;
        console.log(this.arrRoadmap);
      }
    )
  }

  deleteRoadmap(idRoadmap: any) {
    console.log(idRoadmap);
  }

}
