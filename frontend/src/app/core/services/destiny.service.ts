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
    return this.http.get(this.API_DESTINIES);
  }

}
