import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TitreMenu } from '../_models/titre-menu';

@Injectable({
  providedIn: 'root'
})
export class TitreMenuService {
  baseUrl = environment.apiUrl;

  // Headers
  httpOptions = {};

  constructor(private http: HttpClient) {}

  setHeaders() {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      })
    };
  }

  getTitreMenus(): Observable<TitreMenu[]> {
    this.setHeaders();
    return this.http.get<TitreMenu[]>(this.baseUrl + 'TitreMenus/', this.httpOptions);
  }

  getTitreMenu(id: number): Observable<TitreMenu> {
    this.setHeaders();
    return this.http.get<TitreMenu>(this.baseUrl + 'TitreMenus/' + id, this.httpOptions);
  }

  update(id: number, item: TitreMenu) {
    this.setHeaders();
    return this.http.put(this.baseUrl + 'TitreMenus/' + id, item, this.httpOptions);
  }

  create(item: TitreMenu) {
    this.setHeaders();
    return this.http.post(this.baseUrl + 'TitreMenus', item, this.httpOptions);
  }

  delete(id: number) {
    this.setHeaders();
    return this.http.delete(this.baseUrl + 'TitreMenus/' + id, this.httpOptions);
  }

  up(id: number) {
    this.setHeaders();
    return this.http.post(this.baseUrl + 'TitreMenus/up/' + id, {}, this.httpOptions);
  }

  down(id: number) {
    this.setHeaders();
    return this.http.post(this.baseUrl + 'TitreMenus/down/' + id, {}, this.httpOptions);
  }
}
