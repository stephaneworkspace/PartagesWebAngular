import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ForumPoste } from 'src/app/_models/Forum/forum-poste';
import { Observable } from 'rxjs';
import { PaginatedResult } from 'src/app/_reponse/pagination';
import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  })
};

// Pour un ensemble déjà fermé
const headers_fix = new HttpHeaders({
  'Authorization': 'Bearer ' + localStorage.getItem('token')
});

@Injectable({
  providedIn: 'root'
})
export class ForumPosteService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  // pagination à faire ici
  getForumPoste(id: number, page?, itemsPerPage?): Observable<PaginatedResult<ForumPoste[]>> {
    const paginatedResult: PaginatedResult<ForumPoste[]> = new PaginatedResult<ForumPoste[]>();

    let params = new HttpParams();

    if (page != null) {
      params = params.append('pageNumber', page);
    }
    if (itemsPerPage != null) {
      params = params.append('pageSize', itemsPerPage);
    }
    return this.http.get<ForumPoste[]>(this.baseUrl + 'ForumPostes/' + id, { headers: headers_fix, observe: 'response', params })
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
}