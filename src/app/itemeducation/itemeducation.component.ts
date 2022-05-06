import {Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import {Education } from '../education/educationinteface';
import { EducationService } from '../education.service';
import { convertUpdateArguments } from '@angular/compiler/src/compiler_util/expression_converter';

@Component({
  selector: 'app-itemeducation',
  templateUrl: './itemeducation.component.html',
  styleUrls: ['./itemeducation.component.css']
})
export class ItemeducationComponent implements OnInit {
  @Input() education: Education = {
    id: 1,
    title: '',
    institute:'',
    startDate: new Date(),
    endDate: new Date(),
    personId: 1
  };
  @Output() onDeleteEducation:EventEmitter<Education>=new EventEmitter()
   constructor(
      private educationService: EducationService
    ) { }

    ngOnInit(): void {
    }

    OnDelete(education:Education){
      this.onDeleteEducation.emit(education);
    }

  }


