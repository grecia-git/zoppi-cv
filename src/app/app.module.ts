import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SobremiComponent } from './sobremi/sobremi.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { BotonComponent } from './boton/boton.component';
import { ItemComponent } from './item/itemexperience.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddexperienciaComponent } from './addexperiencia/addexperiencia.component';
import { FormsModule } from '@angular/forms';
import { EducationComponent } from './education/education.component';
import {AddeducationComponent} from './addeducation/addeducation.component';
import { ItemeducationComponent } from './itemeducation/itemeducation.component';
import { ProyectoComponent } from './proyecto/proyecto.component';
import { AddproyectoComponent } from './addproyecto/addproyecto.component';
import { ItemproyectoComponent } from './itemproyecto/itemproyecto.component';
import { SkillComponent } from './skill/skill.component';
import { ItemskillComponent } from './itemskill/itemskill.component';
import { AddSkillsComponent } from './addskills/addskills.component';
import { UpdateeducationComponent } from './updateeducation/updateeducation.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SobremiComponent,
    ExperienciaComponent,
    BotonComponent,
    ItemComponent,
    AddexperienciaComponent,
    EducationComponent,
    AddeducationComponent,
    ItemeducationComponent,
    ProyectoComponent,
    AddproyectoComponent,
    ItemproyectoComponent,
    SkillComponent,
    ItemskillComponent,
    AddSkillsComponent,
    UpdateeducationComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
