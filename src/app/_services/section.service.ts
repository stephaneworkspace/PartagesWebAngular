import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Section } from '../_models/section';

const httpOptions = {
  headers: new HttpHeaders({
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  })
};

@Injectable({
  providedIn: 'root'
})
export class SectionService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  GetArbreCompletSections(): Observable<Section[]> {
    return this.http.get<Section[]>(this.baseUrl + 'Sections/gestion-pages-avec-arbre-complet', httpOptions);
  }

  getSections(): Observable<Section[]> {
    return this.http.get<Section[]>(this.baseUrl + 'Sections', httpOptions);
  }

  getSection(id): Observable<Section> {
    return this.http.get<Section>(this.baseUrl + 'Sections/' + id, httpOptions);
  }

  create(section: Section) {
    return this.http.post(this.baseUrl + 'Sections', section, httpOptions);
  }

  update(id: number, section: Section) {
    return this.http.put(this.baseUrl + 'Sections/' + id, section, httpOptions);
  }

  delete(id: number) {
    return this.http.delete(this.baseUrl + 'Sections/' + id, httpOptions);
  }

  up(id: number) {
    return this.http.post(this.baseUrl + 'Sections/monter/' + id, {}, httpOptions);
  }

  down(id: number) {
    return this.http.post(this.baseUrl + 'Sections/descendre/' + id, {}, httpOptions);
  }
}
