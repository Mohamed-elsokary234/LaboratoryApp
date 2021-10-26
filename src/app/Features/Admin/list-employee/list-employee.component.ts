import { Component, OnInit } from '@angular/core';
import { employee } from 'src/app/_Models/employee';
import { EmployeesService } from 'src/app/_Services/_Employee/employees.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
//import { EmployeesService } from 'src/app/_Services/_Employee/employees.service';


@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

  constructor(private employeesservice:EmployeesService) { }


  ngOnInit(): void {
    this.listEmployee();
  }
  // array
  listEmployees;

listEmployee(){
this.employeesservice.getAllEmployees().subscribe(data=>{
  this.listEmployees=data;
  console.log(this.listEmployees);
  
});
}
  
}