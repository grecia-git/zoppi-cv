import { Component, OnInit } from '@angular/core';
import { experienciaService } from '../experiencia.service';
import {Experience} from "../experiencia/intefaceExperience";



@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})

export class ExperienciaComponent implements OnInit {
  experiences: Experience[] = [];
  experience: Experience = {
    id:0,
    rol:"",
    startDate: new Date(),
    endDate: new Date(),
    personId:1
  };
  showAddExperience: boolean = false;


  constructor(
    private experienciaService: experienciaService,

  ) {

  }

  ngOnInit(): void {
    this.experienciaService.getExperience().subscribe(
      (Experience) => (this.experiences = Experience));
  }

  deleteExperience(experience:Experience){
    this.experienciaService.deleteExperience(experience)
    .subscribe(()=> (this.experiences = this.experiences.filter( (t) =>
    t.id !== experience.id)));
  }

  addExperience(experience:Experience){
    this.experienciaService.addExperience(experience)
    .subscribe ( (experience) => (this.experiences.push(experience)))
  }

  toggleAddExperience(){
    this.experienciaService.toggleAddExperience();
    this.showAddExperience = !this.showAddExperience;
  }

 }


