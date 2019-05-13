import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Section } from '../_models/section';

@Injectable({
  providedIn: 'root'
})
export class SectionService {
  baseUrl = environment.apiUrl;

  // Headers
  httpOptions = {};

  constructor(private http: HttpClient) {}

  setHeaders() {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      })
    };
  }

  getSections(): Observable<Section[]> {
    this.setHeaders();
    return this.http.get<Section[]>(this.baseUrl + 'Sections', this.httpOptions);
  }

  getSection(id): Observable<Section> {
    this.setHeaders();
    return this.http.get<Section>(this.baseUrl + 'Sections/' + id, this.httpOptions);
  }

  create(item: Section) {
    this.setHeaders();
    return this.http.post(this.baseUrl + 'Sections', item, this.httpOptions);
  }

  update(id: number, item: Section) {
    this.setHeaders();
    return this.http.put(this.baseUrl + 'Sections/' + id, item, this.httpOptions);
  }

  delete(id: number) {
    this.setHeaders();
    return this.http.delete(this.baseUrl + 'Sections/' + id, this.httpOptions);
  }

  up(id: number) {
    this.setHeaders();
    return this.http.post(this.baseUrl + 'Sections/up/' + id, {}, this.httpOptions);
  }

  down(id: number) {
    this.setHeaders();
    return this.http.post(this.baseUrl + 'Sections/down/' + id, {}, this.httpOptions);
  }

}
