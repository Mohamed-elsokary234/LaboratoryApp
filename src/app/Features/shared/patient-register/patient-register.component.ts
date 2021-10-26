import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { patient } from 'src/app/_Models/patient';
import { patientService } from 'src/app/_Services/_Patient/patient.service';
import { DispatcherService } from 'src/app/_Services/_Dispatcher/dispatchers.service';
import { PhoneService } from 'src/app/_Services/_Phone/phone.service';
import { dispatcher } from 'src/app/_Models/dispatcher';
import { phone } from 'src/app/_Models/phone';

@Component({
  selector: 'app-patient-register',
  templateUrl: './patient-register.component.html',
  styleUrls: ['./patient-register.component.css']
})
export class PatientRegisterComponent implements OnInit {

  constructor(private patientService:patientService,private dispatcherService:DispatcherService,private phoneservice:PhoneService) { }

  ngOnInit(): void {
this.getDispatchers();
  }
  form=new FormGroup({
    Patient_fname:new FormControl('',Validators.required),
    Patient_lname:new FormControl('',Validators.required),
    Patient_gender:new FormControl('',Validators.required),

    Patient_age:new FormControl('',Validators.required),
    Patient_date:new FormControl('',Validators.required),
    Patient_password:new FormControl('',Validators.required),
    Patient_address:new FormControl('',Validators.required),
    Patient_email:new FormControl('',Validators.required),
    
    Phone_number:new FormControl('',Validators.required),
    
  });
  // s - c
get patient_fname(){
  return this.form.get('Patient_fname');
}
get patient_lname(){
  return this.form.get('Patient_lname');
}
get patient_gender(){
  return this.form.get('Patient_gender');
}
get patient_age(){
  return this.form.get('Patient_age');
}
get patient_date(){
  return this.form.get('Patient_date');
}
get patient_password(){
  return this.form.get('Patient_password');
}
get patient_address(){
  return this.form.get('Patient_address');
}
get patient_email(){
  return this.form.get('Patient_email');
}
get phone_num(){
  return this.form.get('Phone_number');
}



    fName;
    lName;
    gender;
    age;
    date;
    password;
    email;
    address;

    phoneNum;

    dis_Id=1;
  getdispatcherId(e){
      this.dis_Id=e.value;
      console.log(  e);
      }

    dispatchers;
    getDispatchers(){
      console.log(" this first name "+this.patient_fname.value);
    this.dispatcherService.getAllDispatchers().subscribe(data=>{
         this.dispatchers=data;
      }

);
}
phone:phone;
patient:patient;
addpatient(){
  this.patient=new patient(1,this.fName,this.lName,this.gender,this.age,this.dis_Id,this.date,this.password,this.address,this.email);
 this.patientService.addpatient(this.patient);
 this.phone = new phone(this.phoneNum,1);
this.phoneservice.addPhone(this.phone);

}

}
