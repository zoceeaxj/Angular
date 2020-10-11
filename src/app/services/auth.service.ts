import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppResponse } from '../Models/app.response.model';
import { Signup } from '../Models/signup.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { 

  }

  public addUser(signUp:Signup):Observable<AppResponse>{

    //Content-Type = "application/json"
    //Accept = "application/json"
    //{"code":1234, "message":"data is uploded successfully"} example of JSON you will receive
    console.log("calling rest api");
    console.log(signUp);
    return this.http.post<AppResponse>("http://localhost:8443/v3/customer/addPayee", signUp); //i will get apprespone object

  }

  //list of customers
  public findCustomers():Observable<Signup[]>{
    return this.http.get<Signup[]>("http://localhost:8443/v3/customer/addPayee");
  }
}
