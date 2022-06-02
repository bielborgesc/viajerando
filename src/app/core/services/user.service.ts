import { UserRegister, UserLogin } from './../../shared/interfaces/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // private readonly API: string = 'localhost:8080';

  constructor(
    private readonly http: HttpClient,
  ) { }

  login(userLoginForm: UserLogin) {
    return this.http.post(`${environment.url}/users`, userLoginForm)
  }

  createUser(userRegisterForm: UserRegister) {
    console.log("Criando usuario service")
    return this.http.post(`${environment.url}/users`, userRegisterForm)
  }

  updateUser(userUpdateForm: any): any {
    return this.http.put(`${environment.url}/users`, {user: userUpdateForm})
  }

}
