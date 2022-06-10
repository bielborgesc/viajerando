import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoadmapService {

  private readonly API: string = environment.url;
  private readonly API_USER: string = `${this.API}/users`;
  private readonly API_ROADMAP: string = `${this.API}/roadmaps`;
  private readonly API_ROADMAP_USER: string = `${this.API_ROADMAP}`

  constructor(
    private readonly http: HttpClient,
  ) { }

  newRoadmap(roadmap: any) {
    return this.http.post(this.API_ROADMAP, roadmap);
  }

  roadmapInUser(idRoadMap: number, idUser: number | null | string, arrIdsDestiny: any) {
    console.log(arrIdsDestiny);
    const arr: any[] = arrIdsDestiny;
    arr.forEach(element => {
      this.http.put(`${this.API_ROADMAP}/${idRoadMap}/destiny/${element}`, {});
    });
    return this.http.put(`${this.API_ROADMAP}/${idRoadMap}/user/${idUser}`, {});
  }

  addDestiniesInRoadmap(idRoadmap: any, idDestiny: any) {
    return this.http.put(`${this.API_ROADMAP}/${idRoadmap}/destiny/${idDestiny}`, {});
  }

  getRoadmapById(idUser: any) {
    return this.http.get(`${this.API_USER}/${idUser}`);
  }
}
