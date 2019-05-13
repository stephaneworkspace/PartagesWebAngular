import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // baseUrl = 'http://51.77.201.204:5000/api/auth/';
  baseUrl = 'http://localhost:5000/api/Auth/';
  jwtHelper = new JwtHelperService();
  decodedToken: any;

  constructor(private http: HttpClient) { }

  login(model: any) {
    return this.http.post(this.baseUrl + 'login', model).pipe(
      map((response: any) => {
        const user = response;
        if (user) {
          localStorage.setItem('token', user.token);
          console.log(user.token)
          this.decodedToken = this.jwtHelper.decodeToken(user.token);
          console.log(this.decodedToken);
        }
      })
    );
  }

  register(model: any) {
    return this.http.post(this.baseUrl + 'register', model);
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    // if (!this.jwtHelper.isTokenExpired(token)) {
    //  localStorage.removeItem('token');
    // }
    return !this.jwtHelper.isTokenExpired(token);
  }

  logout(model: any) {
    localStorage.removeItem('token');
    localStorage.clear();
    return this.http.post(this.baseUrl + 'logout', model);
  }
}
