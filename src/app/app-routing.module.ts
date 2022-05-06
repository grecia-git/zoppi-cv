import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddeducationComponent } from './addeducation/addeducation.component';
import { AddexperienciaComponent } from './addexperiencia/addexperiencia.component';
import { EducationComponent } from './education/education.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { ItemComponent } from './item/itemexperience.component';
import { SkillComponent } from './skill/skill.component';

const routes: Routes = [

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
