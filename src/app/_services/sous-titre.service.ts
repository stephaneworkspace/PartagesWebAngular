import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SousTitre } from '../_models/sous-titre';

const httpOptions = {
  headers: new HttpHeaders({
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  })
};

@Injectable({
  providedIn: 'root'
})
export class SousTitreService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getSousTitres(): Observable<SousTitre[]> {
    return this.http.get<SousTitre[]>(this.baseUrl + 'sous-titres', httpOptions);
  }

  getSousTitre(id): Observable<SousTitre> {
    return this.http.get<SousTitre>(this.baseUrl + 'sous-titres/' + id, httpOptions);
  }

  updateSousTitre(id: number, sousTitre: SousTitre) {
    return this.http.put(this.baseUrl + 'sous-titres/' + id, sousTitre);
  }
}
