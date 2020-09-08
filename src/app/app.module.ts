import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BookingComponent } from './booking/booking.component';
import { BankingDetailsComponent } from './banking-details/banking-details.component';
import { routes } from './app.router';
import { DisplayComponent } from './display/display.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,
    BookingComponent,
    BankingDetailsComponent, 
    DisplayComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    routes,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
