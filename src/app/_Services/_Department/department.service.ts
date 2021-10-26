import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Content } from '@angular/compiler/src/render3/r3_ast';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  url="http://localhost:49986/api/";

  constructor(private http:HttpClient) { }
  // get all
  getAllDepartments(){
    return this.http.get(this.url+"departments");
  }
  // 
  // get one department
  getDepartment(id){
    return this.http.get(this.url+"departments/"+id);
  }
  result
  // 
  // post department
  addDepartment(department){
     let head=new HttpHeaders();
     head.set('Content-Type', 'application/json; charset=utf-8')
  this.result= this.http.post(this.url+"departments", department,{headers: head}).subscribe(data => {
    alert('ok');
    console.log(data);
    },
    (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
            console.log('Client-side error occured.');
        } else {
            console.log('Server-side error occured.');
        }
    });
  return this.result;
  }
  // 
  // put department
  editDepartment(id,department){
    let head=new HttpHeaders();
    head.set('Content-Type', 'application/json; charset=utf-8')
this.http.put(this.url+"departments/"+id,department,{headers: head}).subscribe(data => {
  alert('ok');
  console.log(data);
  },
  (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
          console.log('Client-side error occured.');
      } else {
          console.log('Server-side error occured.');
      }
  });
return this.result;
  }

// delete department (header)
deleteDepartment(id){
  console.log("start delete");
  return this.http.delete(this.url+"departments/"+id).subscribe(data=>{
    alert('ok');
  console.log(data);
  },
  (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
          console.log('Client-side error occured.');
      } else {
          console.log('Server-side error occured.');
      };
});
}
// end

}
