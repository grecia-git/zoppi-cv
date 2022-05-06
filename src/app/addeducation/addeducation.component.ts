import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Education } from '../education/educationinteface';
import { Subscription } from 'rxjs';
import { EducationService } from '../education.service';


@Component({
  selector: 'app-addeducation',
  templateUrl: './addeducation.component.html',
  styleUrls: ['./addeducation.component.css']
})
export class AddeducationComponent implements OnInit {

  @Output() onAddEducation:EventEmitter<Education> = new EventEmitter();
  id:number = 0;
  title:string = "";
  institute:string= "";
  startDate:Date = new Date();
  endDate:Date = new Date();
  personId: number = 1;

  showAddEducation: boolean = false;
  subscription?: Subscription;

  constructor(
    private educationservice: EducationService
  ) {
    this.subscription = this.educationservice.onTaggle()
    .subscribe(value => this.showAddEducation = value)

  }

  ngOnInit(): void {
  }

  onSubmit(){


      if(this.title.length === 0){
        alert ("Por favor agrega un titulo!");
        return
      }

      if(this.startDate > this.endDate) {
        alert ("La fecha de inicio no puede ser mayor que la fecha de fin!");
        return
      }

      const {id, title, institute ,startDate, endDate, personId}= this
      const newEducation= {id, title,institute, startDate, endDate, personId}
      this.onAddEducation.emit(newEducation)
    }
}
