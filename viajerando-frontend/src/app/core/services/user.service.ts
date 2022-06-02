import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly API: string = 'localhost:8080';

  constructor(
    private readonly http: HttpClient,
  ) { }

  createUser(userRegisterForm: any): any {
    this.http.post(`${this.API}/viajerando/user`, {user: userRegisterForm})
  }

  updateUser(userUpdateForm: any): any {
    this.http.put(`${this.API}/viajerando/user`, {user: userUpdateForm})
  }

}
