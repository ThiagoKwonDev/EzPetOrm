import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TutorDto } from '../dto/tutor.dto';

@Injectable({
  providedIn: 'root',
})
export class TutorService {
  url = 'http://localhost:3000/tutor';
  constructor(private httpClient: HttpClient) {}

  findAll(): Observable<any> {
    return this.httpClient.get(this.url, { observe: 'response' });
  }

  create(tutor: TutorDto): Observable<any> {
    return this.httpClient.post(this.url, tutor, { observe: 'response' });
  }
}
