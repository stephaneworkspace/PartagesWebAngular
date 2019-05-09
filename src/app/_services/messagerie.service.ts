import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PaginatedResult } from 'src/app/_reponse/pagination';
import { map } from 'rxjs/operators';
import { Messagerie } from '../_models/messagerie';
import { MessagerieDtoInput } from '../_dto/messagerie/messagerie-dto-input';

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
export class MessagerieService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getMessageries(id: number, page?, itemsPerPage?): Observable<PaginatedResult<Messagerie[]>> {
    const paginatedResult: PaginatedResult<Messagerie[]> = new PaginatedResult<Messagerie[]>();

    let params = new HttpParams();

    if (page != null) {
      params = params.append('pageNumber', page);
    }
    if (itemsPerPage != null) {
      params = params.append('pageSize', itemsPerPage);
    }
    return this.http.get<Messagerie[]>(this.baseUrl + 'Messageries/' + id, { headers: headers_fix, observe: 'response', params })
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
    return this.http.post(this.baseUrl + 'Messageries', item, httpOptions);
  }

  getMessagerie(id: number): Observable<Messagerie> {
    return this.http.get<Messagerie>(this.baseUrl + 'Messageries/' + id, httpOptions);
  }
}
