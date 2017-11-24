import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth/auth-guard.service';

import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { CadastroUsuarioComponent } from './components/cadastro-usuario/cadastro-usuario.component';



export const appRoutes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home',  canActivate: [AuthGuard] },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'cad_user', component: CadastroUsuarioComponent },
    { path: '**', redirectTo: 'home' }
];
@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }