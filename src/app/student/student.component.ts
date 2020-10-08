import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  private messageService:MessageService;

  public message:String="hello";

 public constructor(messageService:MessageService){
  this.messageService=messageService;
 
 }

  //this is the best place to initialize the component
  ngOnInit(): void {
    this.messageService.getObserable().subscribe((message)=>{ //you're listening using subscribe which requires a call back function
      this.message = message;
    }); 


  }

}
