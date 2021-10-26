import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/_Services/_Test/test.service';

@Component({
  selector: 'app-delete-test',
  templateUrl: './delete-test.component.html',
  styleUrls: ['./delete-test.component.css']
})
export class DeleteTestComponent implements OnInit {

  constructor(private testservice:TestService) { }

  ngOnInit(): void {
  }
  Result
  testId:any;
  Deletetest(){
    this.Result=this.testservice.deleteTest(this.testId);
    console.log(this.Result);
  }
}
