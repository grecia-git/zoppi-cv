
import { Injectable } from '@angular/core';
import { Person } from './sobremi/person';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private apiUrl = 'https://still-spire-61131.herokuapp.com/person/1'
  constructor(
    private http: HttpClient
  ) { }
  getPerson(): Observable<Person>{
    return this.http.get<Person>(this.apiUrl)
  }
}
