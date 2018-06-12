import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
 @Output() incrNumber = new EventEmitter<number>(); 
  
  startNumber = 0;
  interval
  constructor() { 
    
  }

  ngOnInit() {
  }

  onStart(){
      this.interval = setInterval(() => {
        this.incrNumber.emit(this.startNumber + 1);
        this.startNumber++;
      }, 1000);
    }
    
  onStop(){
    clearInterval(this.interval)
  }
  }

  

  // StartNumber(){
  //   this.startNumber+1
  // }


