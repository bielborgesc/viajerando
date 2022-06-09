import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoadmapService {

  private readonly API: string = environment.url;
  private readonly API_ROADMAP: string = `${this.API}/roadmaps`;

  constructor(
    private readonly http: HttpClient,
  ) { }

  newRoadmap(roadmap: any) {
    // console.log(roadmap, " teste")
    return this.http.post(this.API_ROADMAP, roadmap);
  }
}
