import { Component, OnInit } from '@angular/core';
import {SharedService } from 'src/app/shared/shared.service';
import { Inputs } from '../model/Inputs';
import  {Cardinput} from '../model/Cardinput';
import { from } from 'rxjs';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  displaydetails: Inputs;
  cardData: Cardinput;
  // Accountholder;
  
  constructor(private shared: SharedService) {
   
  }

  ngOnInit(): void {
    this.displaydata();
    this.cardDisplay();   
   }
  displaydata() {
    this.displaydetails = this.shared.getmessage();
    console.log(this.displaydetails)
  }
  
  cardDisplay() {
    this.cardData = this.shared.getcardDetails();
     console.log(this.cardData)
  }
}
