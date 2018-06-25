import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AccountsService } from './accounts.service';
import { LoggingService } from './logging.service';
import { ActiveComponent } from './active/active.component';
import { InactiveComponent } from './inactive/inactive.component';

@NgModule({
  declarations: [
    AppComponent,
    ActiveComponent,
    InactiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [AccountsService,LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
