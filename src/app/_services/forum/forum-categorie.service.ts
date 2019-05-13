import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ForumCategorie } from 'src/app/_models/Forum/forum-categorie';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForumCategorieService {
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

  // Cette méthode est avec la pagination (inutile mais j'enleverai plus tard)
  getForumCategories(): Observable<ForumCategorie[]> {
    return this.http.get<ForumCategorie[]>(this.baseUrl + 'ForumCategories', this.httpOptions);
  }

  getForumCategorie(id: number): Observable<ForumCategorie> {
    return this.http.get<ForumCategorie>(this.baseUrl + 'ForumCategories/' + id, this.httpOptions);
  }
}