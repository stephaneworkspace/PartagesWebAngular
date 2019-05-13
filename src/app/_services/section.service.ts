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
    return this.http.get<Section[]>(this.baseUrl + 'Sections', this.httpOptions);
  }

  getSection(id): Observable<Section> {
    return this.http.get<Section>(this.baseUrl + 'Sections/' + id, this.httpOptions);
  }

  create(item: Section) {
    return this.http.post(this.baseUrl + 'Sections', item, this.httpOptions);
  }

  update(id: number, item: Section) {
    return this.http.put(this.baseUrl + 'Sections/' + id, item, this.httpOptions);
  }

  delete(id: number) {
    return this.http.delete(this.baseUrl + 'Sections/' + id, this.httpOptions);
  }

  up(id: number) {
    return this.http.post(this.baseUrl + 'Sections/up/' + id, {}, this.httpOptions);
  }

  down(id: number) {
    return this.http.post(this.baseUrl + 'Sections/down/' + id, {}, this.httpOptions);
  }

}
