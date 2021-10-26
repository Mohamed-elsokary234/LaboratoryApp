import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }


  // form=new FormGroup({
  //   email:new FormControl('',Validators.required)
  // });

 
  // get name(){
  //   return this.form.get('UserName');
  // }

  // get passward(){
  //   return this.form.get('UserPassward');
  // }
   

  ngOnInit(): void {
  }

}
