import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/_Services/_Test/test.service';

@Component({
  selector: 'app-list-test',
  templateUrl: './list-test.component.html',
  styleUrls: ['./list-test.component.css']
})
export class ListTestComponent implements OnInit {

  constructor(private TestService:TestService) { }

  ngOnInit(): void {
    this.listTest();
  }
  // array
  listTests;

listTest(){
this.TestService.getTests().subscribe(data=>{
  this.listTests=data;
  console.log(this.listTests);
  // alert("ok");
});
}
  
}
