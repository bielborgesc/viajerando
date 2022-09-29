import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnloggedComponent } from './unlogged.component';
import { UnloggedRoutingModule } from './unlogged.routing';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UnloggedComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    UnloggedRoutingModule,
    ReactiveFormsModule
  ],
  exports: [UnloggedComponent]
})
export class UnloggedModule { }
