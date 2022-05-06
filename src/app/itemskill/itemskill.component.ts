import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { SkillService } from '../skill.service';
import { Skill } from '../skill/skillinteface';

@Component({
  selector: 'app-itemskill',
  templateUrl: './itemskill.component.html',
  styleUrls: ['./itemskill.component.css']
})
export class ItemskillComponent implements OnInit {
  @Input() skill: Skill = {
    id: 1,
    category: '',
    type:'',
    level:'',
    personId: 1,
  };
  @Output() onDeleteSkill:EventEmitter<Skill>=new EventEmitter()
    constructor(
      private skillservice:SkillService
    ) { }

    ngOnInit(): void {
    }

    OnDelete(skill:Skill){
      this.onDeleteSkill.emit(skill);
    }

}
