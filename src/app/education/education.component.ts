import { Component, OnInit } from '@angular/core';
import { Education } from './educationinteface';
import { EducationService } from '../education.service';
//import { AddeducationComponent } from '../addeducation/addeducation.component';

@Component({
 // providers:[AddeducationComponent ],
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  educations: Education[] =[];
  education: Education = {
    id:0,
    title:"",
    institute:"",
    startDate: new Date(),
    endDate: new Date(),
    personId:1
  };
  showAddEducation: boolean = false;

  constructor(
    private educationService: EducationService,
  //  private addEducationComponent: AddeducationComponent,
  ) {


  }

  ngOnInit(): void {
    this.educationService.getEducation().subscribe(
      (Education) => (this.educations = Education));

  }

  deleteEducation(education:Education){
    this.educationService.deleteEducation(education)
    .subscribe(()=> (this.educations = this.educations.filter( (t) =>
    t.id !== education.id)));
  }



  addEducation(education:Education){

      this.educationService.addEducation(education)
      .subscribe ( (education) => (this.educations.push(education)))
    }


  toggleAddEducation(){
    this.educationService.toggleAddEducation();
    this.showAddEducation =!this.showAddEducation;
  }

}
