import { Injectable } from '@angular/core';
import { Experience } from "./experiencia/intefaceExperience";
import { Observable, of , Subject} from 'rxjs';
import { HttpClient, HttpHeaders} from "@angular/common/http";

const httpOption={
   headers: new HttpHeaders({'Content-Type':'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class experienciaService {
  private apiUrl = 'http://localhost:8080/experience';
  private showAddExperience:boolean = false;
  private subject= new Subject<any>();
  constructor(
    private http: HttpClient,

  ) { }

  getExperience(): Observable<Experience[]>{
    return this.http.get<Experience[]>(this.apiUrl)
  }

  deleteExperience(experience:Experience):Observable<Experience>{
     const url=`${this.apiUrl}/${experience.id}`
     return this.http.delete<Experience>(url)
  }

  addExperience(experience:Experience): Observable<Experience>{
    return this.http.post<Experience>(this.apiUrl,experience,httpOption);
  }
  toggleAddExperience(): void{
    this.showAddExperience = !this.showAddExperience;
    this.subject.next(this.showAddExperience);
  }
  onTaggle(): Observable<any>{
    return this.subject.asObservable();
  }
}
