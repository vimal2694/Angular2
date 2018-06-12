import { Component, OnInit } from '@angular/core';

@Component({
  //selector: 'app-servers',
 // selector: '[app-servers]',              // selector as an attribute and not as an element
  selector: '.app-servers',
  // template: `<app-server></app-server>
  // <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreattionStatus = 'No Server was created';
  serverName = 'TestServer';
  serverCreated = false;
  servers = ['TestServer', 'TestServer 2']

  constructor() {
   setTimeout(()=>{
     this.allowNewServer = true;
   },2000)
   }

  ngOnInit() {
  }

  onClickBtn(){
    this.serverCreated = true;
    this.servers.push(this.serverName)
    this.serverCreattionStatus = 'Server is created '+ this.serverName;
  }

  // onUpdateServerName(event: Event){
  //   this.serverName = (<HTMLInputElement>event.target).value;
  // }
}
