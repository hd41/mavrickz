import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoginService {

  BASE_URL : string = "http://127.0.0.1:5000";
  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  login(user: User): Promise<any> {
    let url: string = `${this.BASE_URL}/login`;
    //this function is called by login component where user is defined as a class having two attribute (email, password) and request is given along with JSON data
    return this.http.post(url, user, {headers: this.headers}).toPromise();
    //can also call by {"Username":"hd", "password":"asd"} instead of user object
  }

  register(user: User): Promise<any> {
    console.log(user.email+" "+user.password);
    let url: string = `${this.BASE_URL}/register`;
    return this.http.post(url, user, {headers: this.headers}).toPromise();
  }

}
