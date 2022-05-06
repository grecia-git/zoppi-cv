import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Skill } from '../skill/skillinteface';
import { SkillService } from '../skill.service';
import {Subscription} from 'rxjs'
@Component({
  selector: 'app-addskills',
  templateUrl: './addskills.component.html',
  styleUrls: ['./addskills.component.css']
})
export class AddSkillsComponent implements OnInit {
  @Output() onAddSkill:EventEmitter<Skill> = new EventEmitter();
  id?:number= 1 ;
  category:string= '';
  type:string= '' ;
  level:string= '';
  personId:number= 1;
  languages: string[] = ["Ingles", "Español", "Italiano","Frances","Aleman","Portugues"];
  levels: string[] = ["Basico", "Intermedio","Avanzado","No Aplica"]
  programLanguages: string[] = ["Python","Ruby","CSS","HTML","Java","Java Script", "Type Script"]

  showAddSkill:boolean = false;

  subscription?: Subscription;


  constructor(
    private skillservice: SkillService
  )
  {
    this.subscription = this.skillservice.onTaggle()
    .subscribe(value => this.showAddSkill = value)
  }

  ngOnInit(): void {
  }

  onSubmitLanguageSkill(){

    if(this.type.length === 0){
      alert ("Por favor agrega un idioma!");
      return
    }
    if(this.level.length === 0){
      alert ("Por favor agrega un nivel!");
      return
    }

    const {id, level, type , personId}= this
    const category = 'Idioma';
    const newLanguageSkill= {id, category, level, type, personId}
    this.onAddSkill.emit(newLanguageSkill)
  }

  onSubmitProgramLanguageSkill(){
    if(this.type.length === 0){
      alert ("Por favor agrega un lenguaje de programacion!");
      return
    }
    if(this.level.length === 0){
      alert ("Por favor agrega un nivel!");
      return
    }
    const {id, level, type , personId}= this
    const category = 'Lenguaje de Programacion';
    const newLanguageSkill= {id, category, level, type, personId}
    this.onAddSkill.emit(newLanguageSkill)
  }

  onSubmitOtherSkill(){
    if(this.type.length === 0){
      alert ("Por favor agrega una habilidad!");
      return
    }
    if(this.level.length === 0){
      alert ("Por favor agrega un nivel!");
      return
    }
    const {id, level, type , personId}= this
    const category = 'Otros';
    const newLanguageSkill= {id, category, level, type, personId}
    this.onAddSkill.emit(newLanguageSkill)
  }
}


