import { Component, OnInit } from '@angular/core';
import { Skill } from './skillinteface';
import { SkillService } from '../skill.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  languageSkills: Skill[] =[];
  programLanguageSkills: Skill[] =[];
  othersSkills: Skill[] =[];
  showAddSkill:boolean = false;


  constructor(
    private skillservice: SkillService,

  ) { }


  ngOnInit(): void {
    this.skillservice.getSkills('Idioma').subscribe(
      (Skill) => (this.languageSkills = Skill));

    this.skillservice.getSkills('Lenguaje de Programacion').subscribe(
     (Skill) => (this.programLanguageSkills = Skill));

    this.skillservice.getSkills('Otros').subscribe(
      (Skill) => (this.othersSkills = Skill));
  }

  deleteLanguageSkill(skill:Skill){
    this.skillservice.deleteSkill(skill)
    .subscribe(()=> (this.languageSkills = this.languageSkills.filter( (t) =>
    t.id !== skill.id)));
  }

  deleteProgramLanguageSkill(skill:Skill){
    this.skillservice.deleteSkill(skill)
    .subscribe(()=> (this.programLanguageSkills = this.programLanguageSkills.filter( (t) =>
    t.id !== skill.id)));
  }

  deleteOthersSkill(skill:Skill){
    this.skillservice.deleteSkill(skill)
    .subscribe(()=> (this.othersSkills = this.othersSkills.filter( (t) =>
    t.id !== skill.id)));
  }

  addLanguageSkill(skill:Skill){
    this.skillservice.addSkill(skill)
    .subscribe ( (skill) => (this.languageSkills.push(skill)))
  }

  addProgramLangugeSkill(skill:Skill){
    this.skillservice.addSkill(skill)
    .subscribe ( (skill) => (this.programLanguageSkills.push(skill)))
  }

  addOthersSkill(skill:Skill){
    this.skillservice.addSkill(skill)
    .subscribe ( (skill) => (this.othersSkills.push(skill)))
  }

  toggleAddLanguageSkill(){
    this.skillservice.toggleAddLanguageSkill();
    this.showAddSkill = !this.showAddSkill;
  }

}
