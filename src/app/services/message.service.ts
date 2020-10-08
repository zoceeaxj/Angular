import { ReturnStatement } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService { 

 private shareMessage:BehaviorSubject<String> = new BehaviorSubject (""); 


 constructor() { }

 //using obserable to subscribe it
 public getObserable(): Observable<String>{
  return this.shareMessage.asObservable();
 }

 //this method wil write message on above subject
public setMessage(message:String):void{
  this.shareMessage.next(message); 
}


}


