import { AlertModalService } from './../../../shared/components/alert-modal/alert-modal.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';
import { User } from 'src/app/shared/interfaces/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    cpf: new FormControl('', Validators.required),
    phonenumber: new FormControl('', Validators.required)
  });

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router,
    private userService: UserService,
    private alertService: AlertModalService
  ) { }

  ngOnInit(): void {

  }

  sendRegisterForm(): void {
    const userForm: User = {
      username: this.registerForm.get('username')?.value,
      password: this.registerForm.get('email')?.value,
      email: this.registerForm.get('password')?.value,
      cpf: this.registerForm.get('cpf')?.value,
      telefone: this.registerForm.get('phonenumber')?.value
    };

    this.userService.createUser(userForm).subscribe(
      success => {
        localStorage.clear();
        localStorage.setItem("Authorization", Object.values(success)[0])
        this.alertService.showAlertSuccess("Conta criada, efetue o login!");
        this.router.navigate(['/auth/login'])
      },
      () => {
        this.alertService.showAlertDanger("Falha ao criar conta!");
      }
    )

    console.log(this.registerForm);
  }

  goToLogin(): void {
    this.router.navigate(["/auth/login"]);
  }
}
