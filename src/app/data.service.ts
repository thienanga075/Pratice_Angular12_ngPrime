import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/internal/Observable';
import { Note } from './note.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private REST_API_SERVER = 'http://localhost:3000'
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
     // Authorization: 'my-auth-token'
    })
  };

  constructor(private httpClient: HttpClient) { }

  public getNote(authorId: number): Observable<Note[]> {
    const url = `${this.REST_API_SERVER}/notes?authorId=` + authorId;
    return this.httpClient.get<Note[]>(url, this.httpOptions);
  }

  public postNote(payload: any): Observable<Note> {
    const url = `${this.REST_API_SERVER}/notes`;
    return this.httpClient.post<Note>(url, payload, this.httpOptions);
  }
}
