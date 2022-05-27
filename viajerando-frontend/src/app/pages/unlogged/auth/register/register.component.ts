import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

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
    logradouro: new FormControl('', Validators.required),
    cidade: new FormControl('', Validators.required),
    numero: new FormControl('', Validators.required),
    cep: new FormControl('', Validators.required),
    telefone: new FormControl('', Validators.required)
  });

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router
  ) { }

  ngOnInit(): void {

  }

  sendRegisterForm(): void {
    console.log(this.registerForm);
  }

  goToLogin(): void {
    this.router.navigate(["/auth/login"]);
  }
}
