import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
// import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { JobService } from 'src/app/_Services/_Job/job.service';
import { job } from 'src/app/_Models/job';

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.css']
})
export class AddJobComponent implements OnInit {

  constructor(private jobser:JobService,private router:Router) { }
  // job:job=new job(null,"","");
  form=new FormGroup({
    job_Id:new FormControl('',Validators.required),
    job_name:new FormControl('',Validators.required),
    job_description:new FormControl('',Validators.required),
    
  });
  get JobId()
  {
    return this.form.get('job_Id');
  }
  get JobName()
  {
    return this.form.get('job_name');
  }
  get JobDiscription()
  {
    return this.form.get('job_discription');
  }
  jobId:number;
  jobname:string;
  Discriptions:string;
 
  job:job;
//add job
createJob()
{
this.job=new job(this.jobId,this.jobname,this.Discriptions);
  this.jobser.addJob(this.job);
  this.router.navigateByUrl("/admin/ListJob");
}

  ngOnInit(): void {
  }

}
