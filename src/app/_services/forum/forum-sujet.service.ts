import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ForumSujet } from 'src/app/_models/Forum/forum-sujet';
import { Observable } from 'rxjs';
import { PaginatedResult } from 'src/app/_reponse/pagination';
import { map } from 'rxjs/operators';
import { DtoForumNouveauSujet } from 'src/app/_dto/forum/nouveau-sujet/nouveau-sujet';

@Injectable({
  providedIn: 'root'
})
export class ForumSujetService {
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

  // pagination à faire ici
  getForumSujets(id: number, page?, itemsPerPage?): Observable<PaginatedResult<ForumSujet[]>> {
    this.setHeaders();

    const paginatedResult: PaginatedResult<ForumSujet[]> = new PaginatedResult<ForumSujet[]>();

    let params = new HttpParams();

    if (page != null) {
      params = params.append('pageNumber', page);
    }
    if (itemsPerPage != null) {
      params = params.append('pageSize', itemsPerPage);
    }
    return this.http.get<ForumSujet[]>(this.baseUrl + 'ForumSujets/' + id, { headers: this.headers_fix, observe: 'response', params })
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

  getForumSujet(id: number): Observable<ForumSujet> {
    this.setHeaders();
    return this.http.get<ForumSujet>(this.baseUrl + 'ForumSujets/ForumSujetId/' + id, this.httpOptions);
  }

  postForumSujet(item: DtoForumNouveauSujet) {
    this.setHeaders();
    return this.http.post(this.baseUrl + 'ForumSujets', item, this.httpOptions);
  }

}
