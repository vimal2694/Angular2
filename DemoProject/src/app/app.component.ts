import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayPassword = false;
  title = 'app';
  log =[];

  onToggleBtn(){
    this.displayPassword = !this.displayPassword;
    this.log.push(this.log.length+1);  
}
}
