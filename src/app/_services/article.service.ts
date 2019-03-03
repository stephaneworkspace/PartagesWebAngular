import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from '../_models/article';

const httpOptions = {
  headers: new HttpHeaders({
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  })
};

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.baseUrl + 'Articles', httpOptions);
  }

  getArticle(id): Observable<Article> {
    return this.http.get<Article>(this.baseUrl + 'Articles/' + id, httpOptions);
  }

  update(id: number, article: Article) {
    return this.http.put(this.baseUrl + 'Articles/' + id, article);
  }

  create(item: Article) {
    return this.http.post(this.baseUrl + 'Articles', item);
  }

  delete(id: number) {
    return this.http.delete(this.baseUrl + 'Articles/' + id, httpOptions);
  }

  up(id: number) {
    return this.http.post(this.baseUrl + 'Articles/up/' + id, {}, httpOptions);
  }

  down(id: number) {
    return this.http.post(this.baseUrl + 'Articles/down/' + id, {}, httpOptions);
  }
}
