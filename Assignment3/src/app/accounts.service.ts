import { LoggingService } from "./logging.service";
import { Injectable, EventEmitter } from "@angular/core";

@Injectable()

export class AccountsService{
  activeAccounts = ['vimal', 'rawat'];
  inactiveAccounts = ['amit', 'sharma']
   
   statusUpdated = new EventEmitter<string>();
   

   constructor(){}   

   onSetToInactive(id:number){
    this.inactiveAccounts.push(this.inactiveAccounts[id]);
    this.activeAccounts.splice(id, 1);
  }

  onSetToActive(id:number){
    this.activeAccounts.push(this.activeAccounts[id]);
    this.inactiveAccounts.splice(id, 1);
  }

}