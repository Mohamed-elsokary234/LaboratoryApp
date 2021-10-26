import { Component, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/_Services/_Department/department.service';

@Component({
  selector: 'app-delete-department',
  templateUrl: './delete-department.component.html',
  styleUrls: ['./delete-department.component.css']
})
export class DeleteDepartmentComponent implements OnInit {

 
  constructor(private departmentsservice:DepartmentService) { }

  ngOnInit(): void {

  this.Deletedepartment();
  }
  // form=new FormGroup({
  //   empl_Id:new FormControl('',Validators.required),
  // });
  // get Empl_Id(){
  //   return this.form.get( 'empl_Id');
  // } 
  Result
  deptlId:any;
  Deletedepartment(){
    this.Result=this.departmentsservice.deleteDepartment(this.deptlId);
    console.log(this.Result);
  }
}
