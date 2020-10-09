import { Component, OnInit, ViewChild } from '@angular/core';
import { MessageService } from '../services/message.service';
import { StudentComponent } from '../student/student.component';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  //public title:string = 'banking-UI';
  title = 'banking-UI';

  //In typescript we can write all the Javascript code
  welcome = "Nepal is a country";
  public message:string="";
 
  public btmessage="Coming Soon!";
 
  @ViewChild(StudentComponent)
  public studentChild:StudentComponent;
 
  //@Autowired 
  private messageService:MessageService;
 

  public changeMessage(msg): void{
    this.btmessage=msg;
    this.studentChild.processMessage("This is from parent");
  }
 
  public constructor(messageService:MessageService){
   this.messageService=messageService;
   this.welcome = "This is Constructor";
 
  }
 
  public ngOnInit(): void{
    this.welcome = "This is USA - reinitializing"; //reinitializing it
  }
 
  public authUser(username, password){
    console.log(username.value);
    console.log(password.value);
    if("anuska"===username.value && "123"===password.value){
 
     this.message = "Correct Username and Password"
     this.messageService.setMessage("Correct Username and Password");
    }
    else{
      this.message="Sorry, incorrect username or password"
      this.messageService.setMessage("Sorry, incorrect username or password");
    }
    console.log("authUser!!!!");
  }
}
