import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { User } from '../../models/user'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user : User = new User();
  login_msg :boolean = false;
  constructor(private loginService:LoginService, private router : Router) { }

  ngOnInit() {
  }

  login(){
    this.loginService.login(this.user).then((user) => {
      //here user come as a JSON response
      if(user["status"]=="success"){
        sessionStorage.setItem("userName", user["name"]);
        if(user["name"]=="Himanshu "){
          this.router.navigate(['/admin']);
        }
        else{
            this.router.navigate(['/landing']);
        }
      }
      else{
        this.login_msg=true;
      }
    })
    .catch((err) => {
      console.log(err);
    });
  }

}
