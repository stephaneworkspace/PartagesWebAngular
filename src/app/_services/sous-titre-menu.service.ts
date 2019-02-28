import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SousTitreMenu } from '../_models/sous-titre-menu';

const httpOptions = {
  headers: new HttpHeaders({
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  })
};

@Injectable({
  providedIn: 'root'
})
export class SousTitreMenuService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getSousTitreMenu(id: number): Observable<SousTitreMenu> {
    return this.http.get<SousTitreMenu>(this.baseUrl + 'SousTitresMenus/' + id, httpOptions);
  }

  update(id: number, item: SousTitreMenu) {
    return this.http.put(this.baseUrl + 'SousTitresMenus/' + id, item);
  }

  create(item: SousTitreMenu) {
    return this.http.post(this.baseUrl + 'SousTitresMenus', item);
  }

  delete(id: number) {
    return this.http.delete(this.baseUrl + 'SousTitresMenus/' + id, httpOptions);
  }

  up(id: number) {
    return this.http.post(this.baseUrl + 'SousTitresMenus/up/' + id, {}, httpOptions);
  }

  down(id: number) {
    return this.http.post(this.baseUrl + 'SousTitresMenus/down/' + id, {}, httpOptions);
  }
}
