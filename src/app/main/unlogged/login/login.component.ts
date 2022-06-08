import { UserLogin } from './../../../shared/interfaces/user';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';
import { AlertModalService } from 'src/app/shared/components/alert-modal/alert-modal.service';

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

  sendLoginForm(): void {
    const userForm: UserLogin = {
      email: this.loginForm.get('email')?.value,
      password: this.loginForm.get('password')?.value,
    };

    console.log(userForm)
    this.userService.login(userForm).subscribe(
      success => {
        console.log("success: ", success)
        localStorage.clear();
        localStorage.setItem("Authorization", Object.values(success)[0])
        this.alertService.showAlertSuccess("Login efetuado com sucesso!");
        this.router.navigate([''])
      },
      () => {
        this.alertService.showAlertDanger("Falha efetuar login!");
      }
    )

    console.log(this.loginForm);

  }

  goToRegister(): void {
    this.router.navigate(["/auth/register"]);
  }

}
