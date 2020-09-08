import { Component, OnInit } from '@angular/core';
import { banking } from 'src/app/BankingArrayList';
import bankingArray from 'src/app/bankingArray';
import { booking } from '../arrayList';
import bookingsArray from '../array';


@Component({
  selector: 'app-banking-details',
  templateUrl: './banking-details.component.html',
  styleUrls: ['./banking-details.component.css']
})
export class BankingDetailsComponent implements OnInit {
 arr = [];
  firstname;
  lastname;
  
  Bankname;
  Bankholder;
  Cardnumber;
  
  list(Bankname, Accountholder,Cardno) {
    let Finish = new banking(Bankname, Accountholder, Cardno);
    bankingArray.push(Finish);
    console.log(bankingArray)
    
  }
  
  constructor() {
    console.log(bookingsArray)
  }

  ngOnInit(): void {
    console.log(bookingsArray)
     console.log(bookingsArray[0])
    this.firstname = bookingsArray[0].firstname
    console.log(bookingsArray[0].lastname)
    this.lastname = bookingsArray[0].lastname
    
    console.log(this.firstname)
    console.log(this.lastname)
  }

}
