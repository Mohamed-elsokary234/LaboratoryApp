import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResultService {
  url="http://localhost:49986/api/";

  constructor(private http:HttpClient) { }
  // get all
  getResults(){
    return this.http.get(this.url+"Results");
  }
  // 
  // get one Results
  getResult(id){
    return this.http.get(this.url+"Results/"+id);
  }
  result
  // 
  // post Results
  addResult(Result){
     let head=new HttpHeaders();
     head.set('Content-Type', 'application/json; charset=utf-8')
  this.result= this.http.post(this.url+"Results", Result,{headers: head}).subscribe(data => {
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
  // put Results
  editResult(id,Result){
    let head=new HttpHeaders();
    head.set('Content-Type', 'application/json; charset=utf-8')
this.http.put(this.url+"Results/"+id,Result,{headers: head}).subscribe(data => {
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

// delete Results (header)
deleteResult(id){
  console.log("start delete");
  return this.http.delete(this.url+"Results/"+id).subscribe(data=>{
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
