import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Experience } from "../experiencia/intefaceExperience";
import { experienciaService } from '../experiencia.service';

@Component({
  selector: 'app-item',
  templateUrl: './itemexperience.component.html',
  styleUrls: ['./itemexperience.component.css']
})

export class ItemComponent implements OnInit {
@Input() experience: Experience = {
  id: 1,
  rol: '',
  startDate: new Date(),
  endDate: new Date(),
  personId: 1
};
@Output() onDeleteExperience:EventEmitter<Experience>=new EventEmitter()
  constructor(
    private experienciaService: experienciaService
  ) { }

  ngOnInit(): void {
  }
  OnDelete(experience:Experience){
    this.onDeleteExperience.emit(experience);
  }

}














