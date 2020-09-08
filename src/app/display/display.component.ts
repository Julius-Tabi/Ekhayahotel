import { Component, OnInit } from '@angular/core';
import { booking } from '../arrayList';
import bookingsArray from '../array';
import { banking } from '../BankingArrayList';
import bankingArray from '../bankingArray';
import {SharedService } from 'src/app/shared/shared.service';
import { BankingDetailsComponent } from '../banking-details/banking-details.component';
import { CommentStmt } from '@angular/compiler';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  firstname;
  lastname;
 phonenumber;
    email;
    select;
  CheckIndate;
  CheckOutdate;
   Bankname;
  Accountholder;
  Cardno;
  
  constructor(private shared: SharedService) {
   
  }
message:string
  ngOnInit(): void {
  
    console.log(bookingsArray[0])
    this.firstname = bookingsArray[0].firstname
    console.log(bookingsArray[0].lastname)
    this.lastname = bookingsArray[0].lastname
    
    console.log(bookingsArray[0].phonenumber)
    this.phonenumber = bookingsArray[0].phonenumber
    console.log(bookingsArray[0].email)
    this.email = bookingsArray[0].email
    
    console.log(bookingsArray[0].select)
    this.select = bookingsArray[0].select
    
    console.log(bookingsArray[0].CheckIndate)
    this.CheckIndate = bookingsArray[0].CheckIndate
    console.log(bookingsArray[0].CheckOutdate)
    this.CheckOutdate = bookingsArray[0]. CheckOutdate
    
    console.log(this.firstname)
    console.log(this.lastname)
    console.log(this.phonenumber)
    console.log(this.email)
    
    console.log(this.select)
    console.log(this.CheckIndate)
    console.log(this.CheckOutdate)
    
    console.log(bankingArray[0].Bankname)
    console.log(bankingArray[0].Bankname)
    this.Bankname = bankingArray[0].Bankname
    
    console.log(bankingArray[0].Accountholder)
    this.Accountholder = bankingArray[0].Accountholder
    console.log(bankingArray[0].Cardno)
    this.Cardno = bankingArray[0].Cardno
    
    console.log(this.Bankname)
    console.log(this.Accountholder)
    console.log(this.Cardno)
      
  }
  
}
