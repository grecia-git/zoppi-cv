import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.css']
})
export class BotonComponent implements OnInit {
  @Input() text:string=""
  @Input() color:string=""
  @Output() btnclick = new EventEmitter()


  constructor() { }

  ngOnInit(): void {
  }

  Onclick(){
    this.btnclick.emit();
  }

}
