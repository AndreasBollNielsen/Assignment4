import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-GameControl',
  templateUrl: './GameControl.component.html',
  styleUrls: ['./GameControl.component.css'],
})
export class GameControlComponent implements OnInit {
 @Input() counter: number =0;
 @Output() numberChanged = new EventEmitter<number>();

  interval;
  constructor() {}

  ngOnInit() {}

  increment() {
    this.counter++;
    this.numberChanged.emit( this.counter);


  }

  startGame() {
    this.interval = setInterval(()=>{this.increment()},1000);
  }

  endGame(){
    clearInterval(this.interval);
  }


}
