import { Component } from '@angular/core';
import { MessageService } from './services/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 //public title:string = 'banking-UI';
 title = 'banking-UI';

 //In typescript we can write all the Javascript code
 welcome = "Nepal is a country";
 public message:string="";

 //@Autowired 

 private messageService:MessageService;

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
