import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.css']
})
export class ActiveComponent implements OnInit {

   activeUsers: any
  @Output() setInactive = new EventEmitter<number>(); 
  constructor(private accountsService: AccountsService) { }

  ngOnInit() {
    this.activeUsers = this.accountsService.activeAccounts;
  }

  onSetToInactive(number){
      this.accountsService.onSetToInactive(number);
  }

}
