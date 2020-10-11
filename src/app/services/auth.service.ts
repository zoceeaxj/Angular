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
    
    return this.http.post<AppResponse>("http://local....", something); //i will get apprespone object

  }
}
