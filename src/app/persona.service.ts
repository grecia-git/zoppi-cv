
import { Injectable } from '@angular/core';
import { Person } from './sobremi/person';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private apiUrl = 'http://localhost:8080/person/1'
  constructor(
    private http: HttpClient
  ) { }
  getPerson(): Observable<Person>{
    return this.http.get<Person>(this.apiUrl)
  }

}
