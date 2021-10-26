import { Component, OnInit } from '@angular/core';
import { EmployeesService } from 'src/app/_Services/_Employee/employees.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {

  constructor(private employeesservice:EmployeesService) { }

  ngOnInit(): void {

  this.DeleteEmployee();
  }
  // form=new FormGroup({
  //   empl_Id:new FormControl('',Validators.required),
  // });
  // get Empl_Id(){
  //   return this.form.get( 'empl_Id');
  // } 
  Result
  emplId:any;
  DeleteEmployee(){
    this.Result=this.employeesservice.deleteEmployee(this.emplId);
    console.log(this.Result);
  }

}