import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // baseUrl = 'http://51.77.201.204:5000/api/auth/';
  baseUrl = 'http://localhost:5000/api/Auth/';
  jwtHelper = new JwtHelperService();
  decodedToken: any;
  currentUser: User;

  // Headers
  httpOptions = {};

  constructor(private http: HttpClient) { }

  setHeaders() {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      })
    };
  }

  login(model: any) {
    return this.http.post(this.baseUrl + 'login', model).pipe(
      map((response: any) => {
        /*localStorage.setItem('token', '');
        localStorage.removeItem('token');
        localStorage.clear();*/
        const user = response;
        if (user) {
          localStorage.setItem('token', user.token);
          localStorage.setItem('user', JSON.stringify(user.user));
          localStorage.setItem('messagesNonLu', JSON.stringify(user.messagesNonLu));
          this.currentUser = user.user;
          // console.log(user.token)
          this.decodedToken = this.jwtHelper.decodeToken(user.token);
          // console.log(this.decodedToken);
        }
      })
    );
  }

  register(model: any) {
    return this.http.post(this.baseUrl + 'register', model);
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }

}
