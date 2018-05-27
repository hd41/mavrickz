import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  session_active=false;
  user_active : string;
  constructor(private router : Router) {  }

  ngOnInit() {
    this.user_active= sessionStorage.getItem("userName");
    if(this.user_active !=null){
      this.session_active=true;
    }
  }

  signOut(){
    sessionStorage.clear();
    this.router.navigate(['/signOut']);
  }

}
