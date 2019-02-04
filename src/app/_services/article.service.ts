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
    return this.http.get<Article[]>(this.baseUrl + 'articles', httpOptions);
  }

  getArticle(id): Observable<Article> {
    return this.http.get<Article>(this.baseUrl + 'articles/' + id, httpOptions);
  }

  updateArticle(id: number, article: Article) {
    return this.http.put(this.baseUrl + 'articles/' + id, article);
  }
}
