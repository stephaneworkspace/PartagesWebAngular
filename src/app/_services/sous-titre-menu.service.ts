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

  getSousTitreMenus(): Observable<SousTitreMenu[]> {
    return this.http.get<SousTitreMenu[]>(this.baseUrl + 'sous-titres-menu', httpOptions);
  }

  getSousTitreMenu(id): Observable<SousTitreMenu> {
    return this.http.get<SousTitreMenu>(this.baseUrl + 'sous-titres-menu/' + id, httpOptions);
  }

  updateSousTitreMenu(id: number, sousTitreMenu: SousTitreMenu) {
    return this.http.put(this.baseUrl + 'sous-titres-menu/' + id, sousTitreMenu);
  }
}
