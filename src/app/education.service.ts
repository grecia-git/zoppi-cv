import { Injectable } from '@angular/core';
import { Education } from "./education/educationinteface";
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { Subject } from 'rxjs';

const httpOption={
  headers: new HttpHeaders({'Content-Type':'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  private apiUrl = 'https://still-spire-61131.herokuapp.com/education'
  private showAddEducation:boolean = false;
  private subject= new Subject<any>();

  constructor(
    private http: HttpClient


  ) { }

  getEducation(): Observable<Education[]>{
    return this.http.get<Education[]>(this.apiUrl)
  }

  deleteEducation(education:Education): Observable<Education>{
    const url=`${this.apiUrl}/${education.id}`
    return this.http.delete<Education>(url)
  }

  addEducation(education:Education): Observable<Education>{
    return this.http.post<Education>(this.apiUrl,education, httpOption);
  }
  updateEducation(education:Education): Observable<Education>{
    const url=`${this.apiUrl}/${education.id}`
    return this.http.put<any>(url, education )
  }
  toggleAddEducation(): void{
    this.showAddEducation = !this.showAddEducation;
    this.subject.next(this.showAddEducation);
  }
  onTaggle(): Observable<any>{
    return this.subject.asObservable();
  }
}
