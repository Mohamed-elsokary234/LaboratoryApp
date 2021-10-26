import { Component, OnInit } from '@angular/core';
import { BillService } from 'src/app/_Services/_Bill/bill.service';
import { patientService } from 'src/app/_Services/_Patient/patient.service';
import { TestService } from 'src/app/_Services/_Test/test.service';

@Component({
  selector: 'app-bill-list',
  templateUrl: './bill-list.component.html',
  styleUrls: ['./bill-list.component.css']
})
export class BillListComponent implements OnInit {

  constructor(private billService:BillService,private patientservice:patientService,private testService:TestService) { }

  ngOnInit(): void {
    this.getBills();
    
  }
  Bills
  patients;
  tests;
getBills(){
  this.billService.getAllBills().subscribe(d=>{

    this.Bills=d;
  });
  // 
  this.patientservice.getpatients().subscribe(d=>{

    this.patients=d;
  });
  // 
  this.testService.getTests().subscribe(d=>{

    this.tests=d;
  });
  // 

}
}
