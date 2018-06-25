import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-inactive',
  templateUrl: './inactive.component.html',
  styleUrls: ['./inactive.component.css']
})
export class InactiveComponent implements OnInit {
  
  inactiveUsers: any
  @Output() setActive = new EventEmitter<number>();
  constructor(private accountsService: AccountsService) { }

  ngOnInit() {
    this.inactiveUsers = this.accountsService.inactiveAccounts;
  }

  onSetToActive(id: number){
  this.accountsService.onSetToActive(id)
  }

}
