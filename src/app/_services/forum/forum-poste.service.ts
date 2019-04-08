import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ForumPoste } from 'src/app/_models/Forum/forum-poste';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  })
};

@Injectable({
  providedIn: 'root'
})
export class ForumPosteService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  // pagination à faire ici
  getForumPoste(id: number, pageNumber: number): Observable<ForumPoste[]> {
    return this.http.get<ForumPoste[]>(this.baseUrl + 'ForumPostes/' + id + '?PageNumber=' + pageNumber, httpOptions);
  }
}