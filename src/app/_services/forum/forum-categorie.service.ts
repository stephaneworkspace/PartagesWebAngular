import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ForumCategorie } from 'src/app/_models/Forum/forum-categorie';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  })
};

@Injectable({
  providedIn: 'root'
})
export class ForumCategorieService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  // Cette méthode est avec la pagination (inutile mais j'enleverai plus tard)
  getForumCategories(): Observable<ForumCategorie[]> {
    return this.http.get<ForumCategorie[]>(this.baseUrl + 'ForumCategories', httpOptions);
  }

  getForumCategorie(id: number): Observable<ForumCategorie> {
    return this.http.get<ForumCategorie>(this.baseUrl + 'ForumCategories/' + id, httpOptions);
  }
}