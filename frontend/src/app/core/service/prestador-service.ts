import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PrestadorDto } from '../dto/prestador.dto';

@Injectable({
  providedIn: 'root',
})
export class PrestadorService {
  url = 'http://localhost:3000/prestador';
  constructor(private httpClient: HttpClient) {}

  findAll(): Observable<any> {
    return this.httpClient.get(this.url, { observe: 'response' });
  }

  create(prestador: any): Observable<any> {
    return this.httpClient.post(this.url, prestador, { observe: 'response' });
  }
  patch(prestador: PrestadorDto): Observable<any> {
    return this.httpClient.patch(this.url + '/' + prestador.id, prestador, {
      observe: 'response',
    });
  }
}
