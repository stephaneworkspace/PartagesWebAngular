import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Icone } from '../_models/icone';

@Injectable({
  providedIn: 'root'
})
export class IconeService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  // Headers
  httpOptions = {};

  setHeaders() {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      })
    };
  }

  getIcones(): Observable<Icone[]> {
    return this.http.get<Icone[]>(this.baseUrl + 'Icones', this.httpOptions);
  }

  getIcone(id): Observable<Icone> {
    return this.http.get<Icone>(this.baseUrl + 'Icones/' + id, this.httpOptions);
  }

  create(item: Icone) {
    return this.http.post(this.baseUrl + 'Icones', item, this.httpOptions);
  }

  update(id: number, item: Icone) {
    return this.http.put(this.baseUrl + 'Icones/' + id, item, this.httpOptions);
  }

  delete(id: number) {
    return this.http.delete(this.baseUrl + 'icones/' + id, this.httpOptions);
  }

  deleteIcones() {
    return this.http.delete(this.baseUrl + 'icones', this.httpOptions);
  }
}
