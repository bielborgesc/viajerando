import { HomeModule } from './main/logged/home/home.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpsRequestInterceptor, Interceptor } from './core/interceptors/HttpsRequestInterceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AlertModule } from 'ngx-bootstrap/alert';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    HomeModule,
    Interceptor,
    BrowserAnimationsModule,
    AlertModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [
    { provide: 'HTTP_INTERCEPTORS', useClass: HttpsRequestInterceptor, multi: true }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
