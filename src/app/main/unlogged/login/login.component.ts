import { Subscription } from 'rxjs';
import { UserLogin } from './../../../shared/interfaces/user';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';
import { AlertModalService } from 'src/app/shared/components/alert-modal/alert-modal.service';
import { parseJwt } from 'src/app/shared/utils/parseJson';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router,
    private userService: UserService,
    private alertService: AlertModalService
  ) { }

  ngOnInit(): void {

  }

  // parseJwt(token: any) {
  //   var base64Url = token.split('.')[1];
  //   var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  //   var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
  //       return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  //   }).join(''));

  //   return JSON.parse(jsonPayload);
  // };

  async sendLoginForm() {
    const userForm: UserLogin = {
      email: this.loginForm.get('email')?.value,
      password: this.loginForm.get('password')?.value,
    };

    let id: any = null;

    await this.userService.login(userForm).subscribe(
      response => {
        localStorage.clear();
        localStorage.setItem("Authorization", response.toString());
        localStorage.setItem("idUser", parseJwt(response).sub)
        id = parseJwt(response).sub;
        console.log(parseJwt(response))
        this.alertService.showAlertSuccess("Login efetuado com sucesso!");
        this.router.navigate([''])
      },
      () => {
        this.alertService.showAlertDanger("Falha efetuar login!")
      },
      () => {console.log("Teste")}
    )

    return this.userService.getUserById(id).subscribe(
      response => {
        const res: any = response;
        localStorage.setItem("Username", res.username);
      },
      error => {
        console.error("ERROR: ", error)
      }
    )
  }

  goToRegister(): void {
    this.router.navigate(["/auth/register"]);
  }

}
