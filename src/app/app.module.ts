import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BookingComponent } from './booking/booking.component';
import { BankingDetailsComponent } from './banking-details/banking-details.component';
// import { routes } from './app.router';
import { DisplayComponent } from './display/display.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import {SharedService } from 'src/app/shared/shared.service';
import {EndDateValidatorDirective} from './CustomDirectives/EndDateValidatorDirective'
import { from } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [
    AppComponent,
    BookingComponent,
    BankingDetailsComponent, 
    DisplayComponent,
    EndDateValidatorDirective,
    
    
    
    
    
  ],
  imports: [
    BrowserModule,
    // routes,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    
    BrowserAnimationsModule,MatInputModule, MatButtonModule, MatCardModule, MatFormFieldModule, MatCheckboxModule, MatDatepickerModule, MatRadioModule, MatSelectModule
   
    
  ],
  providers: [
  SharedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
