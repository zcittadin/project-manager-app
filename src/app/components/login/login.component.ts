import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './../../auth/auth.service';

import { User } from './../../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title = 'General Purpose App';
  user: User = new User();

  error = '';

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.user)
      .subscribe(result => {
        if (result === true) {
          this.router.navigate(['/home']);
        } else {
          alert("Credenciais inválidas.");
          this.error = 'Username or password is incorrect';
        }
      });
  }

  cadastrarUsuario() {
    this.router.navigate(['/cad_user']);
  }

}
