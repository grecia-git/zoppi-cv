import { Component, OnInit, Input } from '@angular/core';
import { PersonaService } from '../persona.service';
import { Person } from "./person";
@Component({
  selector: 'app-sobremi',
  templateUrl: './sobremi.component.html',
  styleUrls: ['./sobremi.component.css']
})

export class SobremiComponent implements OnInit {
 // persons: Person = {};
  @Input() person: Person = {
    id: 0,
    profession: "",
    name: "",
    surname: "",
    description: "",
  };

  constructor(
    private personaservice : PersonaService
  ) { }

  ngOnInit(): void {
    this.personaservice.getPerson().subscribe(
      (person) => (this.person = person));
  }

}
