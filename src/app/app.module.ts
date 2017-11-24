import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler, NO_ERRORS_SCHEMA } from '@angular/core';
import { RequestOptions, HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { CheckboxModule, SidebarModule, ChartModule } from 'primeng/primeng';

import { AuthGuard } from './auth/auth-guard.service';
import { AuthService } from './auth/auth.service';

import { AppRoutingModule } from './app-routing.module';

import { AuthRequestOptions } from './auth/auth-request-options';
import { AuthErrorHandler } from './auth/auth-error.handler';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { CadastroUsuarioComponent } from './components/cadastro-usuario/cadastro-usuario.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    InicioComponent,
    CadastroUsuarioComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    BrowserAnimationsModule,
    CheckboxModule,
    SidebarModule,
    ChartModule,
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
