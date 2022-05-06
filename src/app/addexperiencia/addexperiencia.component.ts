import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Experience } from '../experiencia/intefaceExperience';
import { experienciaService } from '../experiencia.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-addexperiencia',
  templateUrl: './addexperiencia.component.html',
  styleUrls: ['./addexperiencia.component.css']
})
export class AddexperienciaComponent implements OnInit {
  @Output() onAddExperience:EventEmitter<Experience> = new EventEmitter();
  id:number = 0;
  rol:string = "";
  startDate:Date = new Date();
  endDate:Date = new Date();
  personId: number = 1;

  showAddExperience: boolean = false;
  subscription?: Subscription;

  constructor(
    private experienciaService: experienciaService,
      ) {
    this.subscription = this.experienciaService.onTaggle()
    .subscribe(value => this.showAddExperience = value)

  }

  ngOnInit(): void {
  }
  onSubmit(){
    alert("rol: " + this.rol);

    if(this.rol.length === 0){
       alert ("Por favor agrega un rol!");
       return
    }

    if(this.startDate > this.endDate) {
      alert ("La fecha de inicio no puede ser mayor que la fecha de fin!");
      return
    }

    const {id, rol, startDate, endDate, personId}= this
    const newExperience= {id, rol, startDate, endDate, personId}
    this.onAddExperience.emit(newExperience)

    }
  }


