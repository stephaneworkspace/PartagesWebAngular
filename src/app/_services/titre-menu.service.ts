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

  getTitreMenus(idSection: number): Observable<TitreMenu[]> {
    return this.http.get<TitreMenu[]>(this.baseUrl + 'titre-menus', httpOptions);
  }

  getTitreMenu(id: number): Observable<TitreMenu> {
    return this.http.get<TitreMenu>(this.baseUrl + 'titre-menus/' + id, httpOptions);
  }

  updateTitreMenu(id: number, titreMenu: TitreMenu) {
    return this.http.put(this.baseUrl + 'titre-menus/' + id, titreMenu);
  }

  createTitreMenu(titreMenu: TitreMenu) {
    return this.http.post(this.baseUrl + 'titre-menus', titreMenu);
  }
}
