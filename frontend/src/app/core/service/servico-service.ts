import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServicoDto } from '../dto/servico.dto';

@Injectable({
  providedIn: 'root',
})
export class ServicoService {
  url = 'http://localhost:3000/servico';
  constructor(private httpClient: HttpClient) {}

  findAll(): Observable<any> {
    return this.httpClient.get(this.url, { observe: 'response' });
  }

  create(servico: any): Observable<any> {
    return this.httpClient.post(this.url, servico, { observe: 'response' });
  }

  patch(servico: ServicoDto): Observable<any> {
    return this.httpClient.patch(this.url + '/' + servico.id, servico, {
      observe: 'response',
    });
  }
}
