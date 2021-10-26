import { Component, OnInit } from '@angular/core';
import { DispatcherService } from 'src/app/_Services/_Dispatcher/dispatchers.service';
import { dispatcher } from 'src/app/_Models/dispatcher';

@Component({
  selector: 'app-add-dispature',
  templateUrl: './add-dispature.component.html',
  styleUrls: ['./add-dispature.component.css']
})
export class AddDispatureComponent implements OnInit {

  constructor(private dispatcherService:DispatcherService) { }

  ngOnInit(): void {
 this.AddDispatcher();
  }
  // object

  dispatcher:dispatcher;
      dis_Id :number=1;
      disp_name :string="mohamed";
      disp_phone:string="012333333443";
      pat_Id:number=null;

 AddDispatcher(){
  this.dispatcher=new dispatcher(this.dis_Id,this.disp_name,this.disp_phone,this.pat_Id);

   this.dispatcherService.addDispatcher(this.dispatcher);
 }

}
