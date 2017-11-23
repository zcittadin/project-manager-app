import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler, NO_ERRORS_SCHEMA } from '@angular/core';
import { RequestOptions, HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AuthGuard } from './auth/auth-guard.service';
import { AuthService } from './auth/auth.service';

import { AppRoutingModule } from './app-routing.module';

import { AuthRequestOptions } from './auth/auth-request-options';
import { AuthErrorHandler } from './auth/auth-error.handler';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { InicioComponent } from './components/inicio/inicio.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    AuthGuard,
    AuthService,
    {
      provide: RequestOptions,
      useClass: AuthRequestOptions
    },
    {
      provide: ErrorHandler,
      useClass: AuthErrorHandler
    }
  ],
  schemas: [NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
