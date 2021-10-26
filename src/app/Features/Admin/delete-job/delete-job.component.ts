import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/_Services/_Job/job.service';

@Component({
  selector: 'app-delete-job',
  templateUrl: './delete-job.component.html',
  styleUrls: ['./delete-job.component.css']
})
export class DeleteJobComponent implements OnInit {

  constructor(private jobservice:JobService) { }

  ngOnInit(): void {
  }
  Result
  jobId:any;
  DeleteJob(){
    this.Result=this.jobservice.deleteJob(this.jobId);
    console.log(this.Result);
  }

}
