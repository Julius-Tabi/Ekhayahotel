import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingComponent } from './booking/booking.component';
import { BankingDetailsComponent } from './banking-details/banking-details.component';
import { DisplayComponent } from './display/display.component';

const routes: Routes = [
{path: '', component: BookingComponent},
    { path: 'booking', component: BookingComponent },
    { path: 'banking-details', component: BankingDetailsComponent },
    { path: 'display', component: DisplayComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
