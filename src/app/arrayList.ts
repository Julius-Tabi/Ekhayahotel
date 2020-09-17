export class booking{

  firstname;
  lastname;
  phonenumber;
  email; 
    select;
  CheckIndate;
  CheckOutdate;

    constructor(firstname, lastname, phonenumber, email, select, CheckIndate, CheckOutdate){
        this.firstname =firstname;
        this.lastname =lastname;
        this.phonenumber = phonenumber;
        this.email = email;
        
        this.select = select;
        this.CheckIndate =CheckIndate;
        this.CheckOutdate = CheckOutdate;
        
    }


}
