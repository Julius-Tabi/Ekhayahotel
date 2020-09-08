import { Component, OnInit } from '@angular/core';
import {SharedService } from 'src/app/shared/shared.service';
import { AppComponent } from 'src/app/app.component';
import { booking } from '../arrayList';
import bookingsArray from '../array';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  title = 'Hotel-booking';
  arr = [];
  
  firstname;
  lastname;
  phonenumber;
  email;
  select;
  CheckIndate;
  CheckOutdate;
  
  listb(firstname, lastname, phonenumber, email, select, CheckIndate, CheckOutdate) {
    let book = new booking(firstname, lastname, phonenumber, email, select, CheckIndate, CheckOutdate);
    bookingsArray.push(book);
    console.log(bookingsArray)
    
  }
  constructor(private shared: SharedService) { }
 
  message = "hmmmm"
  ngOnInit(): void{
    this.shared.setMessage(this.message)
  }

}
