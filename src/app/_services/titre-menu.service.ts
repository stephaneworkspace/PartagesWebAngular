import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TitreMenu } from '../_models/titre-menu';

const httpOptions = {
  headers: new HttpHeaders({
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  })
};

@Injectable({
  providedIn: 'root'
})
export class TitreMenuService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getTitreMenus(): Observable<TitreMenu[]> {
    return this.http.get<TitreMenu[]>(this.baseUrl + 'TitreMenus/', httpOptions);
  }

  getTitreMenu(id: number): Observable<TitreMenu> {
    return this.http.get<TitreMenu>(this.baseUrl + 'TitreMenus/' + id, httpOptions);
  }

  update(id: number, item: TitreMenu) {
    return this.http.put(this.baseUrl + 'TitreMenus/' + id, item);
  }

  create(item: TitreMenu) {
    return this.http.post(this.baseUrl + 'TitreMenus', item);
  }

  delete(id: number) {
    return this.http.delete(this.baseUrl + 'TitreMenus/' + id, httpOptions);
  }

  up(id: number) {
    return this.http.post(this.baseUrl + 'TitreMenus/up/' + id, {}, httpOptions);
  }

  down(id: number) {
    return this.http.post(this.baseUrl + 'TitreMenus/down/' + id, {}, httpOptions);
  }
}
