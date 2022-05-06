import { Component, OnInit } from '@angular/core';
import { EducationService } from '../education.service';
import { Education } from '../education/educationinteface';

@Component({
  selector: 'app-updateeducation',
  templateUrl: './updateeducation.component.html',
  styleUrls: ['./updateeducation.component.css']
})
export class UpdateeducationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
