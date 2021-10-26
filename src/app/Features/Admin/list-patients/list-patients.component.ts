import { Component, OnInit } from '@angular/core';
import { patientService } from 'src/app/_Services/_Patient/patient.service';

@Component({
  selector: 'app-list-patients',
  templateUrl: './list-patients.component.html',
  styleUrls: ['./list-patients.component.css']
})
export class ListPatientsComponent implements OnInit {

  constructor(private patientService:patientService) { }

  ngOnInit(): void {
    this.getPatients();
  }
  patients;
getPatients(){
  this.patientService.getpatients().subscribe(a=>{
    this.patients=a;
  });
  console.log(this.patients);
  alert("ok");
}
}
