import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Bill } from 'src/app/_Models/bill';

@Injectable({
  providedIn: 'root'
})
export class BillService {

 
  url:string="http://localhost:4645/api/bills";
  constructor(private http:HttpClient) { }
  //get all bills
  getAllBills()
  {
    return this.http.get(this.url);

  }
  //get by id
  getBill(id)
  {
    return this.http.get(this.url+"/"+id);

  }
  //add bill
add(NewBill:Bill)
{
  return this.http.post(this.url,NewBill);
}
//update bill
update(NewBill:Bill)
{
  return this.http.put(this.url+"/"+NewBill.bill_id,NewBill);
}
//delete bill
delet(Id:number)
{
  return this.http.delete(this.url+"/"+Id);
}




}
