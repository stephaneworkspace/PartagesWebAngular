import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from '../_models/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
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

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.baseUrl + 'Articles', this.httpOptions);
  }

  getArticle(id): Observable<Article> {
    return this.http.get<Article>(this.baseUrl + 'Articles/' + id, this.httpOptions);
  }

  update(id: number, article: Article) {
    return this.http.put(this.baseUrl + 'Articles/' + id, article, this.httpOptions);
  }

  create(item: Article) {
    return this.http.post(this.baseUrl + 'Articles', item, this.httpOptions);
  }

  delete(id: number) {
    return this.http.delete(this.baseUrl + 'Articles/' + id, this.httpOptions);
  }

  up(id: number) {
    return this.http.post(this.baseUrl + 'Articles/up/' + id, {}, this.httpOptions);
  }

  down(id: number) {
    return this.http.post(this.baseUrl + 'Articles/down/' + id, {}, this.httpOptions);
  }
}
