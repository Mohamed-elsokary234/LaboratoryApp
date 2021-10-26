import { Component, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/_Services/_Department/department.service';
import { department } from 'src/app/_Models/department';

@Component({
  selector: 'app-list-department',
  templateUrl: './list-department.component.html',
  styleUrls: ['./list-department.component.css']
})
export class ListDepartmentComponent implements OnInit {

  constructor(private departmentservice:DepartmentService) { }

  ngOnInit(): void {
  this.ListDepartment();
  }
  listDepartments:any;
  
  ListDepartment(){
      this.departmentservice.getAllDepartments().subscribe(a=>{
      this.listDepartments=a;
      console.log( this.listDepartments);
      alert("ok");
    });
  }
}
