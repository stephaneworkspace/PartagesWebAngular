import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Icone } from '../_models/icone';

const httpOptions = {
  headers: new HttpHeaders({
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  })
};

@Injectable({
  providedIn: 'root'
})
export class IconeService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getIcones(): Observable<Icone[]> {
    return this.http.get<Icone[]>(this.baseUrl + 'Icones', httpOptions);
  }

  getIcone(id): Observable<Icone> {
    return this.http.get<Icone>(this.baseUrl + 'Icones/' + id, httpOptions);
  }

  createSection(item: Icone) {
    return this.http.post(this.baseUrl + 'Icones', item);
  }

  updateSection(id: number, item: Icone) {
    return this.http.put(this.baseUrl + 'Icones/' + id, item);
  }

  deleteSection(id: number) {
    return this.http.delete(this.baseUrl + 'icones/' + id);
  }

  deleteSections() {
    return this.http.delete(this.baseUrl + 'icones');
  }
}
