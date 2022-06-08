import { UserRegister, UserLogin } from './../../shared/interfaces/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    return this.http.post(`${environment.url}/users`, userLoginForm, {
      headers: {
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Headers': 'Content-Type, Accept, X-Requested-With, remember-me',
        'Accept': 'application/json, text/plain, */*',
        'content-type': 'application/json',
        'Origin': 'localhost:4200'
      }
    })
  }

  createAuthorizationHeader(headers: HttpHeaders) {
    headers.append('Authorization', 'Basic ' +
      btoa('username:password'));
  }

  createUser(userRegisterForm: UserRegister) {
    const headersTeste = new HttpHeaders();

    headersTeste.append('Access-Control-Allow-Credentials', 'true')
    headersTeste.append('Access-Control-Allow-Headers', 'Content-Type, Accept, X-Requested-With, remember-me')
    headersTeste.append('Accept', 'application/json, text/plain, */*')

    console.log("Criando usuario service")
    this.createAuthorizationHeader(headersTeste);
    return this.http.post(`${environment.url}/users`, userRegisterForm, {
      headers: headersTeste
    })
  }

  updateUser(userUpdateForm: any): any {
    return this.http.put(`${environment.url}/users`, {user: userUpdateForm})
  }

}
