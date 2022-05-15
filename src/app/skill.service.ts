import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { Subject } from 'rxjs';
import { Skill } from './skill/skillinteface';

const httpOption={
  headers: new HttpHeaders({'Content-Type':'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  private apiUrl = 'https://still-spire-61131.herokuapp.com/skill'
  private showAddSkill:boolean = false;
  private subject= new Subject<any>();

  constructor(
    private http: HttpClient


  ) { }

  getSkills(category:string): Observable<Skill[]>{
    const url=`${this.apiUrl}/${category}`
    return this.http.get<Skill[]>(url)
  }

  deleteSkill(skill:Skill): Observable<Skill>{
    const url=`${this.apiUrl}/${skill.id}`
    return this.http.delete<Skill>(url)
  }

  addSkill(skill:Skill): Observable<Skill>{
    return this.http.post<Skill>(this.apiUrl,skill, httpOption);
  }

  toggleAddLanguageSkill(): void{
    this.showAddSkill = !this.showAddSkill;
    this.subject.next(this.showAddSkill);
  }

  onTaggle(): Observable<any>{
    return this.subject.asObservable();
  }
}
