import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ForumPoste } from 'src/app/_models/Forum/forum-poste';
import { Observable } from 'rxjs';
import { PaginatedResult } from 'src/app/_reponse/pagination';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ForumPosteService {
  baseUrl = environment.apiUrl;

  // Headers
  httpOptions = {};
  headers_fix;

  constructor(private http: HttpClient) {}

  setHeaders() {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      })
    };
    this.headers_fix = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
  }

  getForumPostes(id: number, page?, itemsPerPage?): Observable<PaginatedResult<ForumPoste[]>> {
    this.setHeaders();
    const paginatedResult: PaginatedResult<ForumPoste[]> = new PaginatedResult<ForumPoste[]>();

    let params = new HttpParams();

    if (page != null) {
      params = params.append('pageNumber', page);
    }
    if (itemsPerPage != null) {
      params = params.append('pageSize', itemsPerPage);
    }
    return this.http.get<ForumPoste[]>(this.baseUrl + 'ForumPostes/' + id, { headers: this.headers_fix, observe: 'response', params })
    .pipe(
      map(response => {
        paginatedResult.result = response.body;
        if (response.headers.get('Pagination') != null) {
          paginatedResult.pagination = JSON.parse(response.headers.get('Pagination'))
        }
        return paginatedResult;
      })
    );
  }

  postReponseForumPoste(item: ForumPoste) {
    this.setHeaders();
    return this.http.post(this.baseUrl + 'ForumPostes', item, this.httpOptions);
  }

  getForumPoste(id: number): Observable<ForumPoste> {
    this.setHeaders();
    return this.http.get<ForumPoste>(this.baseUrl + 'ForumPostes/ForumPosteId/' + id, this.httpOptions);
  }
}
