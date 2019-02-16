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
    return this.http.get<Section[]>(this.baseUrl + 'sections/gestion-pages-avec-arbre-complet', httpOptions);
  }

  getSections(): Observable<Section[]> {
    return this.http.get<Section[]>(this.baseUrl + 'sections', httpOptions);
  }

  getSection(id): Observable<Section> {
    return this.http.get<Section>(this.baseUrl + 'sections/' + id, httpOptions);
  }

  createSection(section: Section) {
    return this.http.post(this.baseUrl + 'sections', section, httpOptions);
  }

  updateSection(id: number, section: Section) {
    return this.http.put(this.baseUrl + 'sections/' + id, section, httpOptions);
  }

  deleteSection(id: number) {
    return this.http.delete(this.baseUrl + 'sections/' + id, httpOptions);
  }

  upSection(id: number) {
    return this.http.post(this.baseUrl + 'sections/monter/' + id, {}, httpOptions);
  }

  downSection(id: number) {
    return this.http.post(this.baseUrl + 'sections/descendre/' + id, {}, httpOptions);
  }
}
