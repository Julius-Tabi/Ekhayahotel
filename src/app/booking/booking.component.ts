import { Component, OnInit } from '@angular/core';
import {SharedService } from 'src/app/shared/shared.service';
import { AppComponent } from 'src/app/app.component';
import { booking } from '../arrayList';
import bookingsArray from '../array';
import { FormControl, FormBuilder, Validators, FormGroup, MaxLengthValidator, MinLengthValidator } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  title = 'Hotel-booking';
  name = new FormControl('');
  arr = [];
  editForm: FormGroup;
  CheckOutdate;
  booked: boolean;
  msg: string;
  CheckIndate;
  phonenumber: string;

  constructor(private fb: FormBuilder, private router: Router, private sharedService: SharedService) {
   
  }
 
 
  ngOnInit(): void{
    this.editbooking();
  
  }
  editbooking() {
    this.editForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      phonenumber: ['', [ Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      roomType: ['', Validators.required],
      CheckIndate: ['', Validators.required],
      CheckOutdate: ['', Validators.required]
      
    })
  }
  get f(){
    return this.editForm.controls;
  }
    
  onSubmit() {
    this.booked = true;
    if (this.editForm.valid) {
    
      this.sharedService.setMessage(this.editForm.value);
      if (this.CheckIndate > this.CheckOutdate || this.CheckOutdate < this.CheckIndate) {
        this.msg = "error";
        console.log(this.msg);
      } else {
        this.router.navigate(['/banking-details']);
      }
    
  }
  }
  
  disableData() {
  
    var today = new Date().toISOString().split('T')[0]; 
    document.getElementsByName("CheckIndate")[0].setAttribute('min', today); 
    // console.log(today);
  
  }
  disableDate() {
    var today = new Date().toISOString().split('T')[0];
    document.getElementsByName("CheckOutdate")[0].setAttribute('min', today);
    console.log(today);
  }
 
  // dateCompare() {
  // if (this.disableData > this.disableDate) {
  //   console.log(this.dateCompare);
  // }
  // }
  
}
