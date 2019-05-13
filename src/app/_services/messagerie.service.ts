import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PaginatedResult } from 'src/app/_reponse/pagination';
import { map } from 'rxjs/operators';
import { Messagerie } from '../_models/messagerie';
import { MessagerieDtoInput } from '../_dto/messagerie/messagerie-dto-input';

@Injectable({
  providedIn: 'root'
})
export class MessagerieService {
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

  countMessagerie(): Observable<number> {
    return this.http.get<number>(this.baseUrl + 'Messageries/Count', this.httpOptions);
  }

  getMessageries(id: number, page?, itemsPerPage?): Observable<PaginatedResult<Messagerie[]>> {
    const paginatedResult: PaginatedResult<Messagerie[]> = new PaginatedResult<Messagerie[]>();

    let params = new HttpParams();

    if (page != null) {
      params = params.append('pageNumber', page);
    }
    if (itemsPerPage != null) {
      params = params.append('pageSize', itemsPerPage);
    }
    return this.http.get<Messagerie[]>(this.baseUrl + 'Messageries/' + id, { headers: this.headers_fix, observe: 'response', params })
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

  postEnvoiMessagerie(item: MessagerieDtoInput) {
    return this.http.post(this.baseUrl + 'Messageries', item, this.httpOptions);
  }

  getMessagerie(id: number): Observable<Messagerie> {
    return this.http.get<Messagerie>(this.baseUrl + 'Messageries/' + id, this.httpOptions);
  }
}
