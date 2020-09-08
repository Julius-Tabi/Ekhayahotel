import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BookingComponent } from './booking/booking.component';
import { BankingDetailsComponent } from './banking-details/banking-details.component';
import { DisplayComponent } from './display/display.component';

export const router: Routes = [
    // { path: '', redirectTo: 'app', pathMatch: 'full' },
    {path: '', component: BookingComponent},
    { path: 'booking', component: BookingComponent },
    { path: 'banking-details', component: BankingDetailsComponent },
    { path: 'display', component: DisplayComponent },
   
];

export const routes: ModuleWithProviders<any> = RouterModule.forRoot(router)