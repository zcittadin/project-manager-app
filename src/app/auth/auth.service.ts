import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import * as jwt_decode from 'jwt-decode';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

import { User } from './../models/user';

export const TOKEN_NAME: string = 'jwt_token';

@Injectable()
export class AuthService {

  private url: string = '';
  public token: string;

  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) {
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
  }

  getToken(): string {
    return localStorage.getItem(TOKEN_NAME);
  }

  setToken(token: string): void {
    localStorage.setItem(TOKEN_NAME, token);
  }

  getTokenExpirationDate(token: string): Date {
    const decoded = jwt_decode(token);
    if (decoded.exp === undefined)
      return null;
    const tokenDate = new Date(decoded.exp);
    return tokenDate;
  }

  isTokenExpired(token?: string): boolean {
    if (!token)
      token = this.getToken();
    if (!token)
      return true;

    const tokenDate = this.getTokenExpirationDate(token);
    const hoje = new Date();

    if ((hoje.getFullYear() - tokenDate.getFullYear() != 0) ||
      (hoje.getMonth() - tokenDate.getMonth() != 0) ||
      (hoje.getDate() - tokenDate.getDate() != 0) ||
      (hoje.getHours() - tokenDate.getHours() != 0)) {
        return true;
      }
    return false;
  }

  /*login(user): Promise<string> {
    return this.http
      .post(`http://localhost:3000/token`, JSON.stringify(user), { headers: this.headers })
      //.post(`${this.url}/token`, JSON.stringify(user), { headers: this.headers })
      .toPromise()
      .then(res => res.text());
  }*/

  login(user: User): Observable<boolean> {
    return this.http.post('http://localhost:3000/token', JSON.stringify(user), { headers: this.headers })
      .map((response: Response) => {
        let token = response.json() && response.json().token;
        if (token) {
          this.token = token;
          this.setToken(token);
          return true;
        } else {
          return false;
        }
      });
  }

  logout(): void {
    this.token = null;
    localStorage.removeItem(TOKEN_NAME);
  }

}
