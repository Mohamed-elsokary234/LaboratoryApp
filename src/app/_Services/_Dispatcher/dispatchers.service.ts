import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Content } from '@angular/compiler/src/render3/r3_ast';

@Injectable({
  providedIn: 'root'
})
export class DispatcherService {

    url="http://localhost:49986/api/";
    constructor(private http:HttpClient) { }
  //GetAll
    getAllDispatchers(){
      console.log(" s url");
      return this.http.get(this.url+"dispatchers");
  
    }
    //
    // Get one
  
   getDispatcher(id){
    return this.http.get(this.url+"dispatchers/"+id);
  }
  result
   // post Dispatcher
   addDispatcher(dispatcher){
    let head=new HttpHeaders();
    head.set('Content-Type', 'application/json; charset=utf-8')
 this.result= this.http.post(this.url+"dispatchers",dispatcher,{headers: head}).subscribe(data => {
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
  // put dispatcher
  editDispatcher(id,dispatcher){
    let head=new HttpHeaders();
    head.set('Content-Type', 'application/json; charset=utf-8')
this.http.put(this.url+"dispatchers/"+id,dispatcher,{headers: head}).subscribe(data => {
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
   // delete dispatcher(header)
deleteDispatcher(id){
    console.log("start delete");
    return this.http.delete(this.url+"dispatchers/"+id).subscribe(data=>{
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
  