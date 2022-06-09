import { UserRegister, UserLogin } from './../../shared/interfaces/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly API: string = environment.url;
  private readonly API_LOGIN = `${this.API}/login`;
  private readonly API_USERS = `${this.API}/users`;

  constructor(
    private readonly http: HttpClient,
  ) { }

  login(userLoginForm: UserLogin) {
    return this.http.post(this.API_LOGIN, userLoginForm)
  }

  createUser(userRegisterForm: UserRegister) {
    return this.http.post(this.API_USERS, userRegisterForm)
  }

  updateUser(userUpdateForm: any): any {
    return this.http.put(this.API_USERS, {user: userUpdateForm})
  }

}
