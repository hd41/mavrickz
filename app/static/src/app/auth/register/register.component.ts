import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { User } from '../../models/user'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user : User = new User();
  constructor(private loginService:LoginService, private router : Router) { }

  ngOnInit() {
  }

  register(){
    console.log("ok till now");
   this.loginService.register(this.user)
   .then((user) => {
     //here user come as a JSON response
     if(user['status']=="success"){
       this.router.navigate(['/auth/login']);
     }
   })
   .catch((err) => {
     console.log(err);
   });
 }

}
