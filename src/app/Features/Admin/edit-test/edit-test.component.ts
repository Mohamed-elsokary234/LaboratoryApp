import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/_Services/_Test/test.service';
import { test } from 'src/app/_Models/test';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

@Component({
  selector: 'app-edit-test',
  templateUrl: './edit-test.component.html',
  styleUrls: ['./edit-test.component.css']
})
export class EditTestComponent implements OnInit {

  constructor(private testservice:TestService) { }

  ngOnInit(): void {
    // this.editTest();
  }
// ---------------------------
  form=new FormGroup({
    TestId:new FormControl('',Validators.required),
    TestName:new FormControl('',Validators.required),
    TestPrice:new FormControl('',Validators.required),
    ReferenceValue:new FormControl('',Validators.required),
    TestDate:new FormControl('',Validators.required),
  
    
  });
  // s - c
  get testId(){
    return this.form.get('TestId');
  }  // s - c
  get testName(){
    return this.form.get('TestName');
  }  // s - c
  get testPrice(){
    return this.form.get('TestPrice');
  }  // s - c
  get referenceValue(){
    return this.form.get('ReferenceValue');
  } 
  get testDate(){
    return this.form.get('TestDate');
  }
// -------------------------

   test_Id:number=this.testId.value;
   test_name:string=this.testName.value;
   test_price:number=this.testPrice.value;
   reference_value:number=3;
   Dep_fk:number=null;
   date:string="1/2/2020";
// 
  test:test;
  editTest(){
 this.test=new test(this.test_Id,this.test_name,this.test_price,this.reference_value,this.Dep_fk,this.date);
    
 this.testservice.editTest(this.test_Id,this.test);
  }
}
