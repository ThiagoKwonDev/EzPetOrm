import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PetDto } from '../dto/pet.dto';

@Injectable({
  providedIn: 'root',
})
export class PetService {
  url = 'http://localhost:3000/pet';
  constructor(private httpClient: HttpClient) {}

  findAll(): Observable<any> {
    return this.httpClient.get(this.url, { observe: 'response' });
  }

  create(pet: any): Observable<any> {
    return this.httpClient.post(this.url, pet, { observe: 'response' });
  }

  patch(pet: PetDto): Observable<any> {
    return this.httpClient.patch(this.url + '/' + pet.id, pet, {
      observe: 'response',
    });
  }
}
