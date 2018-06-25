import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users: User[] = [
    new User("ishah011", "test")
  ];
  formUsername: string;
  formPassword: string;
  isLoggedIn = false;
  constructor() { }

  Login($event){
    this.formUsername = $event.srcElement.form[0].value;
    this.formPassword = $event.srcElement.form[1].value;
    this.users.forEach((user)=> {
      if(user.username == this.formUsername && user.password == this.formPassword){
        this.isLoggedIn = true;
        console.log("isLoggedIn value is: "+ this.isLoggedIn);
        return;
      }
    });
  }

  ngOnInit() {
  }

}
