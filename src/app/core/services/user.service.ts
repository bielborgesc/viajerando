import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/interfaces/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // private readonly API: string = 'localhost:8080';

  constructor(
    private readonly http: HttpClient,
  ) { }

  createUser(userRegisterForm: User) {
    console.log("Criando usuario service")
    return this.http.post(`${environment.url}/users`, userRegisterForm, {
      headers: {
        // 'Content-type': 'application/json',
        // Authorization: 'token',
        // 'Access-Control-Allow-Origin': 'http://localhost:8080',
        // 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
      }
    })
  }

  updateUser(userUpdateForm: any): any {
    return this.http.put(`${environment.url}/users`, {user: userUpdateForm})
  }

}
