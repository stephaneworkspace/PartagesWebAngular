import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SousTitreMenu } from '../_models/sous-titre-menu';

@Injectable({
  providedIn: 'root'
})
export class SousTitreMenuService {
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

  getSousTitreMenus(): Observable<SousTitreMenu[]> {
    this.setHeaders();
    return this.http.get<SousTitreMenu[]>(this.baseUrl + 'SousTitreMenus/', this.httpOptions);
  }

  getSousTitreMenu(id: number): Observable<SousTitreMenu> {
    this.setHeaders();
    return this.http.get<SousTitreMenu>(this.baseUrl + 'SousTitreMenus/' + id, this.httpOptions);
  }

  update(id: number, item: SousTitreMenu) {
    this.setHeaders();
    return this.http.put(this.baseUrl + 'SousTitreMenus/' + id, item, this.httpOptions);
  }

  create(item: SousTitreMenu) {
    this.setHeaders();
    return this.http.post(this.baseUrl + 'SousTitreMenus', item, this.httpOptions);
  }

  delete(id: number) {
    this.setHeaders();
    return this.http.delete(this.baseUrl + 'SousTitreMenus/' + id, this.httpOptions);
  }

  up(id: number) {
    this.setHeaders();
    return this.http.post(this.baseUrl + 'SousTitreMenus/up/' + id, {}, this.httpOptions);
  }

  down(id: number) {
    this.setHeaders();
    return this.http.post(this.baseUrl + 'SousTitreMenus/down/' + id, {}, this.httpOptions);
  }
}
