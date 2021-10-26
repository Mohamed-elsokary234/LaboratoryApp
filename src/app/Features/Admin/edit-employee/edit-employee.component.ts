import { Component, OnInit } from '@angular/core';
import { employee } from 'src/app/_Models/employee';
import { EmployeesService } from 'src/app/_Services/_Employee/employees.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
//import { EmployeesService } from 'src/app/_Services/_Employee/employees.service';


@Component({
  selector: 'app-add-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  constructor(private employeesservice:EmployeesService) { }

  ngOnInit(): void {
    // this.editEmployee();

  }
  form=new FormGroup({
    empl_Id:new FormControl('',Validators.required),
    empl_name:new FormControl('',Validators.required),
    empl_phone:new FormControl('',Validators.required),
    empl_address:new FormControl('',Validators.required),
    empl_salary:new FormControl('',Validators.required),
    empl_quantification:new FormControl('',Validators.required),
    empl_work_period:new FormControl('',Validators.required),
    empl_email:new FormControl('',Validators.required),
    job_Id_fk:new FormControl('',Validators.required),

  });
  get Empl_Id(){
    return this.form.get( 'empl_Id');
  }   
   get Empl_name(){
    return this.form.get( 'empl_name');
  }  
  get Empl_phone(){
    return this.form.get( 'empl_phone');
  } 
  get Empl_address(){
    return this.form.get( 'empl_address');
  } 
  get Empl_salary(){
    return this.form.get( 'empl_salary');
  } 
  get Empl_quantification(){
    return this.form.get( 'empl_quantification');
  } 
  get Empl_work_period(){
    return this.form.get( 'empl_work_period');
  } 
  get Empl_email(){
    return this.form.get( 'empl_email');
  } 
  get Job_Id_fk(){
    return this.form.get( 'job_Id_fk');
  } 
  //------------
  emplId:number;
  emplname:string;
  emplphone:string;
  empladdress:string;
  emplsalary:number;
  emplquantification:string;
  emplwork_period:string;
  emplemail:string;
  jobId_fk:number;

  Emp:employee;
  Result

editEmployee(){
  this.Emp=new employee(this.emplId,this.emplname,this.emplphone,this.empladdress,
 this.emplsalary,
  this.emplquantification,
  this.emplwork_period,
  this.emplemail,
 this.jobId_fk,
  );
  this.Result= this.employeesservice.editEmployee(this.emplId,this.Emp);
  console.log(this.Result);
}


}
