import { Component, OnInit } from '@angular/core';
import { patientService } from 'src/app/_Services/_Patient/patient.service';

@Component({
  selector: 'app-delete-patient',
  templateUrl: './delete-patient.component.html',
  styleUrls: ['./delete-patient.component.css']
})
export class DeletePatientComponent implements OnInit {

  constructor(private patientservice:patientService) { }

  ngOnInit(): void {
  }
  Result
  patientId:any;
  DeleteJob(){
    this.Result=this.patientservice.deletepatient(this.patientId);
    console.log(this.Result);
  }


}
