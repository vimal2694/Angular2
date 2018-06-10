import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  evenNumArr: number[]=[];
  oddNumArr: number[]=[];

  onIncrNumber(emittedNumber: number){
    if(emittedNumber%2 == 0)
    this.evenNumArr.push(emittedNumber);
    else
    this.oddNumArr.push(emittedNumber);
  }

}

