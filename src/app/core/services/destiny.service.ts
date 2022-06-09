import { environment } from './../../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DestinyService {

  private readonly API: string = environment.url;
  private readonly API_DESTINIES = `${this.API}/destinies`;

  constructor(
    private readonly http: HttpClient,
  ) { }

  findAll() {
    const token = localStorage.getItem("Authorization");

    return this.http.get(this.API_DESTINIES, {
      headers: {
        "Bearer" : `Token ${token}`
      }
    });
  }

}
