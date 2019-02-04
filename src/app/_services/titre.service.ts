import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Titre } from '../_models/titre';

const httpOptions = {
  headers: new HttpHeaders({
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  })
};

@Injectable({
  providedIn: 'root'
})
export class TitreService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getTitres(): Observable<Titre[]> {
    return this.http.get<Titre[]>(this.baseUrl + 'titres', httpOptions);
  }

  getTitre(id): Observable<Titre> {
    return this.http.get<Titre>(this.baseUrl + 'titres/' + id, httpOptions);
  }

  updateTitre(id: number, titre: Titre) {
    return this.http.put(this.baseUrl + 'titres/' + id, titre);
  }
}
